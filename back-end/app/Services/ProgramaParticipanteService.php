<?php

namespace App\Services;

use App\Exceptions\ServerException;
use App\Models\Programa;
use App\Models\PlanoTrabalho;
use App\Models\ProgramaParticipante;
use App\Models\Usuario;
use App\Services\ServiceBase;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Eloquent\Builder;
use Throwable;

class ProgramaParticipanteService extends ServiceBase {

    public function habilitar($data)    // ou desabilitar
    {
        try {
            DB::beginTransaction();
            foreach($data['participantes_ids'] as $idp){
                $registro = ProgramaParticipante::firstOrCreate(['programa_id' => $data['programa_id'], 'usuario_id' => $idp]);
                $plano_trabalho_ativo = PlanoTrabalho::where('usuario_id',$idp)->where('programa_id',$data['programa_id'])->where('status','ATIVO')->where('data_inicio','<=',now())->where('data_fim','>=',now())->first();
                if(empty($data['habilitar']) && !empty($plano_trabalho_ativo)) {
                    if(!$data['suspender_plano_trabalho']) throw new ServerException("ValidatePlanoTrabalho","Foi identificado que o usuário - " . Usuario::find($idp)->nome . " - possui Plano de Trabalho ATIVO e não foi repassada autorização para suspendê-lo. Portanto, a operação de desabilitação foi abortada " . (count($data['participantes_ids']) > 1 ? "para todos os usuários " : "" . "!"));
                    $plano_trabalho_ativo->status = 'SUSPENSO';
                    $plano_trabalho_ativo->save();
                }
                $registro->habilitado = $data['habilitar'];
                if($data['habilitar'] == 0) $registro->deleted_at = now();
                $registro->save();
            }
            DB::commit();
        } catch (Throwable $e) {
            DB::rollback();
            throw $e;
        }
        //$this->notificar($data);
        return true;
    }

    public function quantidadePlanosTrabalhoAtivos($programasParticipantesIds)
    {
        return ProgramaParticipante::whereIn("usuario_id", $programasParticipantesIds)->whereHas('usuario.planosTrabalho', function ($query) {
            return $query->where('status', 'ATIVO')->where('data_inicio', '<=', now())->where('data_fim', '>=', now());
        })->count();
    }

    public function notificar($data)
    {
        $this->notificacoesService->send("PRG_PART_HABILITACAO",
                [
                    "programa" => Programa::find($data['programa_id']),
                    "programa_participante"  => ProgramaParticipante::find($data['participantes_ids'] )
        ]);
    }

}

