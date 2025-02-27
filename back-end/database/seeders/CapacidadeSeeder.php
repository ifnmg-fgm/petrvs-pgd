<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Capacidade;
use App\Models\Perfil;
use App\Models\TipoCapacidade;
use App\Services\UtilService;

class CapacidadeSeeder extends Seeder
{
  /**
   * Run the database seeds.
   *
   * @return void
   */

  public $timenow;
  public $utilService;

  public function __construct()
  {
    $this->timenow = now();
    $this->utilService = new UtilService();
  }

  public function run()
  {
    $capacidades_participante = [
      ["codigo" => "CTXT_EXEC"],
      ["codigo" => "MOD_AFT"],
      ["codigo" => "MOD_AFT_EDT"],
      ["codigo" => "MOD_AFT_INCL"],
      ["codigo" => "MOD_AFT_EXCL"],
      ["codigo" => "MOD_ATV"],
      ["codigo" => "MOD_ATV_CLONAR"],
      ["codigo" => "MOD_ATV_EDT"],
      ["codigo" => "MOD_ATV_EXCL"],
      ["codigo" => "MOD_ATV_INCL"],
      ["codigo" => "MOD_ATV_INICIO"],
      ["codigo" => "MOD_ATV_RESP_INICIAR"],
      ["codigo" => "MOD_ATV_TIPO_ATV_VAZIO"],
      ["codigo" => "MOD_ATV_TRF_CONS"],
      ["codigo" => "MOD_ATV_TRF_EDT"],
      ["codigo" => "MOD_ATV_TRF_EXCL"],
      ["codigo" => "MOD_ATV_TRF_INCL"],
      ["codigo" => "MOD_OCOR"],
      ["codigo" => "MOD_OCOR_EDT"],
      ["codigo" => "MOD_OCOR_INCL"],
      ["codigo" => "MOD_OCOR_EXCL"],
      ["codigo" => "MOD_PTR"],
      ["codigo" => "MOD_PTR_CNC"],
      ["codigo" => "MOD_PTR_CSLD"],
      ["codigo" => "MOD_PTR_CSLD_REC_AVAL"],
      ["codigo" => "MOD_PTR_EDT"],
      ["codigo" => "MOD_PTR_EDT_ATV"],
      ["codigo" => "MOD_PTR_ENTR"],
      ["codigo" => "MOD_PTR_ENTR_EDT"],
      ["codigo" => "MOD_PTR_ENTR_INCL"],
      ["codigo" => "MOD_PTR_INCL"],
      ["codigo" => "MOD_PTR_USERS_INCL"],
      ["codigo" => "MOD_TRF"],
      ["codigo" => "MOD_USER"],
      ["codigo" => "MOD_USER_TUDO"],
      ["codigo" => "MOD_PENT"],
      ["codigo" => "MOD_PRGT"],
    ];


    $capacidades_chefia_de_unidade_executora = [
      ["codigo" => "CTXT_GEST"],
      ["codigo" => "MENU_GESTAO_ACESSO"],
      ["codigo" => "ACESSO"],
      ["codigo" => "MOD_AFT"],
      ["codigo" => "MOD_AFT_EDT"],
      ["codigo" => "MOD_AFT_EXCL"],
      ["codigo" => "MOD_AFT_INCL"],
      ["codigo" => "MOD_ATV"],
      ["codigo" => "MOD_ATV_CLONAR"],
      ["codigo" => "MOD_ATV_EDT"],
      ["codigo" => "MOD_ATV_INCL"],
      ["codigo" => "MOD_ATV_EXCL"],
      ["codigo" => "MOD_ATV_INICIO"],
      ["codigo" => "MOD_ATV_RESP_INICIAR"],
      ["codigo" => "MOD_ATV_TIPO_ATV_VAZIO"],
      ["codigo" => "MOD_ATV_TRF_CONS"],
      ["codigo" => "MOD_ATV_TRF_EDT"],
      ["codigo" => "MOD_ATV_TRF_EXCL"],
      ["codigo" => "MOD_ATV_TRF_INCL"],
      ["codigo" => "MOD_ATV_USU_EXT"],
      ["codigo" => "MOD_CTXT"],
      ["codigo" => "MOD_OCOR"],
      ["codigo" => "MOD_OCOR_EDT"],
      ["codigo" => "MOD_OCOR_INCL"],
      ["codigo" => "MOD_PART"],
      ["codigo" => "MOD_PART_HAB"],
      ["codigo" => "MOD_PENT"],
      ["codigo" => "MOD_PENT_ARQ"],
      ["codigo" => "MOD_PENT_AVAL"],
      ["codigo" => "MOD_PENT_AVAL_SUBORD"],
      ["codigo" => "MOD_PENT_CANC_AVAL"],
      ["codigo" => "MOD_PENT_CANC_HOMOL"],
      ["codigo" => "MOD_PENT_CONC"],
      ["codigo" => "MOD_PENT_EDT"],
      ["codigo" => "MOD_PENT_EDT_ATV_ATV"],
      ["codigo" => "MOD_PENT_EDT_ATV_HOMOL"],
      ["codigo" => "MOD_PENT_EDT_FLH"],
      ["codigo" => "MOD_PENT_ENTR_EDT"],
      ["codigo" => "MOD_PENT_ENTR_EXTRPL"],
      ["codigo" => "MOD_PENT_ENTR_INCL"],
      ["codigo" => "MOD_PENT_EXCL"],
      ["codigo" => "MOD_PENT_HOMOL"],
      ["codigo" => "MOD_PENT_INCL"],
      ["codigo" => "MOD_PENT_LIB_HOMOL"],
      ["codigo" => "MOD_PENT_RET_HOMOL"],
      ["codigo" => "MOD_PLAN_INST"],
      ["codigo" => "MOD_PLAN_INST_EDT"],
      ["codigo" => "MOD_PLAN_INST_INCL"],
      ["codigo" => "MOD_PLAN_INST_INCL_UNEX_LOTPRI"],
      ["codigo" => "MOD_PLAN_INST_INCL_UNEX_QQLOT"],
      ["codigo" => "MOD_PLAN_INST_INCL_UNEX_SUBORD"],
      ["codigo" => "MOD_PTR"],
      ["codigo" => "MOD_PTR_CNC"],
      ["codigo" => "MOD_PTR_CSLD"],
      ["codigo" => "MOD_PTR_CSLD_AVAL"],
      ["codigo" => "MOD_PTR_CSLD_REC_AVAL"],
      ["codigo" => "MOD_PTR_EDT"],
      ["codigo" => "MOD_PTR_EDT_ATV"],
      ["codigo" => "MOD_PTR_ENTR"],
      ["codigo" => "MOD_PTR_ENTR_EDT"],
      ["codigo" => "MOD_PTR_ENTR_EXCL"],
      ["codigo" => "MOD_PTR_ENTR_INCL"],
      ["codigo" => "MOD_PTR_INCL"],
      ["codigo" => "MOD_PTR_USERS_INCL"],
      ["codigo" => "MOD_TIPO_ATV"],
      ["codigo" => "MOD_TIPO_ATV_EDT_UND"],
      ["codigo" => "MOD_TIPO_ATV_INCL"],
      ["codigo" => "MOD_TIPO_TRF"],
      ["codigo" => "MOD_TIPO_TRF_EDT"],
      ["codigo" => "MOD_TIPO_TRF_INCL"],
      ["codigo" => "MOD_TRF"],
      ["codigo" => "MOD_TRF_EDT"],
      ["codigo" => "MOD_TRF_EXCL"],
      ["codigo" => "MOD_TRF_INCL"],
      ["codigo" => "MOD_UND"],
      ["codigo" => "MOD_UND_EDT"],
      ["codigo" => "MOD_UND_INCL"],
      ["codigo" => "MOD_UND_TUDO"],
      ["codigo" => "MOD_USER"],
      ["codigo" => "MOD_USER_TUDO"]
    ];

    $capacidades_administrador_negocial = [
      ["codigo" => "CTXT_EXEC"],
      ["codigo" => "CTXT_GEST"],
      ["codigo" => "MOD_ATV_DASH"],
      ["codigo" => "MENU_CAD_ACESSO"],
      ["codigo" => "MENU_CONFIG_ACESSO"],
      ["codigo" => "MENU_GESTAO_ACESSO"],
      ["codigo" => "ACESSO"],
      ["codigo" => "MOD_AFT"],
      ["codigo" => "MOD_AFT_EDT"],
      ["codigo" => "MOD_AFT_EXCL"],
      ["codigo" => "MOD_AFT_INCL"],
      ["codigo" => "MOD_ATV"],
      ["codigo" => "MOD_ATV_CLONAR"],
      ["codigo" => "MOD_ATV_EDT"],
      ["codigo" => "MOD_ATV_EXCL"],
      ["codigo" => "MOD_ATV_INCL"],
      ["codigo" => "MOD_ATV_INICIO"],
      ["codigo" => "MOD_ATV_RESP_INICIAR"],
      ["codigo" => "MOD_ATV_TIPO_ATV_VAZIO"],
      ["codigo" => "MOD_ATV_TRF_CONS"],
      ["codigo" => "MOD_ATV_TRF_EDT"],
      ["codigo" => "MOD_ATV_TRF_EXCL"],
      ["codigo" => "MOD_ATV_TRF_INCL"],
      ["codigo" => "MOD_ATV_USU_EXT"],
      ["codigo" => "MOD_CADV"],
      ["codigo" => "MOD_CADV_EDT"],
      ["codigo" => "MOD_CADV_EXCL"],
      ["codigo" => "MOD_CADV_INCL"],
      ["codigo" => "MOD_CFG"],
      ["codigo" => "MOD_CFG_PERFS"],
      ["codigo" => "MOD_CFG_UND"],
      ["codigo" => "MOD_CFG_USER"],
      ["codigo" => "MOD_CFG_USER_CPF"],
      ["codigo" => "MOD_CFG_USER_MAT"],
      ["codigo" => "MOD_CFG_USER_PERFIL"],
      ["codigo" => "MOD_PERF_EDT"],
      ["codigo" => "MOD_CID"],
      ["codigo" => "MOD_CTXT"],
      ["codigo" => "MOD_ENTD"],
      ["codigo" => "MOD_ENTD_EDT"],
      ["codigo" => "MOD_ENTRG"],
      ["codigo" => "MOD_ENTRG_EDT"],
      ["codigo" => "MOD_ENTRG_EXCL"],
      ["codigo" => "MOD_ENTRG_INCL"],
      ["codigo" => "MOD_EXTM"],
      ["codigo" => "MOD_EXTM_EDT"],
      ["codigo" => "MOD_EXTM_EXCL"],
      ["codigo" => "MOD_EXTM_INCL"],
      ["codigo" => "MOD_FER"],
      ["codigo" => "MOD_FER_EDT"],
      ["codigo" => "MOD_FER_EXCL"],
      ["codigo" => "MOD_FER_INCL"],
      ["codigo" => "MOD_OCOR"],
      ["codigo" => "MOD_OCOR_EDT"],
      ["codigo" => "MOD_OCOR_INCL"],
      ["codigo" => "MOD_OCOR_EXCL"],
      ["codigo" => "MOD_PART"],
      ["codigo" => "MOD_PART_DESAB"],
      ["codigo" => "MOD_PART_HAB"],
      ["codigo" => "MOD_PART_INCL"],
      ["codigo" => "MOD_PENT"],
      ["codigo" => "MOD_PENT_ARQ"],
      ["codigo" => "MOD_PENT_AVAL"],
      ["codigo" => "MOD_PENT_AVAL_SUBORD"],
      ["codigo" => "MOD_PENT_CANC_AVAL"],
      ["codigo" => "MOD_PENT_CANC_CONCL"],
      ["codigo" => "MOD_PENT_CANC_HOMOL"],
      ["codigo" => "MOD_PENT_CNC"],
      ["codigo" => "MOD_PENT_CONC"],
      ["codigo" => "MOD_PENT_EDT"],
      ["codigo" => "MOD_PENT_EDT_ATV_ATV"],
      ["codigo" => "MOD_PENT_EDT_ATV_HOMOL"],
      ["codigo" => "MOD_PENT_EDT_FLH"],
      ["codigo" => "MOD_PENT_ENTR_EDT"],
      ["codigo" => "MOD_PENT_ENTR_EXCL"],
      ["codigo" => "MOD_PENT_ENTR_INCL"],
      ["codigo" => "MOD_PENT_ENTR_PRO_EDT"],
      ["codigo" => "MOD_PENT_ENTR_PRO_EXCL"],
      ["codigo" => "MOD_PENT_ENTR_PRO_INCL"],
      ["codigo" => "MOD_PENT_EXCL"],
      ["codigo" => "MOD_PENT_HOMOL"],
      ["codigo" => "MOD_PENT_INCL"],
      ["codigo" => "MOD_PENT_LIB_HOMOL"],
      ["codigo" => "MOD_PENT_QQR_UND"],
      ["codigo" => "MOD_PENT_RET_HOMOL"],
      ["codigo" => "MOD_PENT_RTV"],
      ["codigo" => "MOD_PENT_SUSP"],
      ["codigo" => "MOD_PLAN_INST"],
      ["codigo" => "MOD_PLAN_INST_EDT"],
      ["codigo" => "MOD_PLAN_INST_EXCL"],
      ["codigo" => "MOD_PLAN_INST_INCL"],
      ["codigo" => "MOD_PLAN_INST_INCL_UNEX_LOTPRI"],
      ["codigo" => "MOD_PLAN_INST_INCL_UNEX_QQLOT"],
      ["codigo" => "MOD_PLAN_INST_INCL_UNEX_QUALQUER"],
      ["codigo" => "MOD_PLAN_INST_INCL_UNEX_SUBORD"],
      ["codigo" => "MOD_PLAN_INST_INCL_UNID_INST"],
      ["codigo" => "MOD_PRGT"],
      ["codigo" => "MOD_PRGT_EDT"],
      ["codigo" => "MOD_PRGT_EXCL"],
      ["codigo" => "MOD_PRGT_INCL"],
      ["codigo" => "MOD_PTR"],
      ["codigo" => "MOD_PTR_CNC"],
      ["codigo" => "MOD_PTR_CSLD"],
      ["codigo" => "MOD_PTR_CSLD_AVAL"],
      ["codigo" => "MOD_PTR_CSLD_CANC_AVAL"],
      ["codigo" => "MOD_PTR_CSLD_CONCL"],
      ["codigo" => "MOD_PTR_CSLD_DES_CONCL"],
      ["codigo" => "MOD_PTR_CSLD_EDT"],
      ["codigo" => "MOD_PTR_CSLD_EXCL"],
      ["codigo" => "MOD_PTR_CSLD_INCL"],
      ["codigo" => "MOD_PTR_CSLD_REC_AVAL"],
      ["codigo" => "MOD_PTR_EDT"],
      ["codigo" => "MOD_PTR_EDT_ATV"],
      ["codigo" => "MOD_PTR_ENTR"],
      ["codigo" => "MOD_PTR_ENTR_EDT"],
      ["codigo" => "MOD_PTR_ENTR_EXCL"],
      ["codigo" => "MOD_PTR_ENTR_INCL"],
      ["codigo" => "MOD_PTR_INCL"],
      ["codigo" => "MOD_PTR_INTSC_DATA"],
      ["codigo" => "MOD_PTR_USERS_INCL"],
      ["codigo" => "MOD_TEMP"],
      ["codigo" => "MOD_TIPO_ATV"],
      ["codigo" => "MOD_TIPO_ATV_EDT_UND"],
      ["codigo" => "MOD_TIPO_ATV_INCL"],
      ["codigo" => "MOD_TIPO_AVAL"],
      ["codigo" => "MOD_TIPO_AVAL_EDT"],
      ["codigo" => "MOD_TIPO_AVAL_EXCL"],
      ["codigo" => "MOD_TIPO_AVAL_INCL"],
      ["codigo" => "MOD_TIPO_CAP"],
      ["codigo" => "MOD_TIPO_CAP_EDT"],
      ["codigo" => "MOD_TIPO_CAP_EXCL"],
      ["codigo" => "MOD_TIPO_CAP_INCL"],
      ["codigo" => "MOD_TIPO_DOC"],
      ["codigo" => "MOD_TIPO_DOC_EDT"],
      ["codigo" => "MOD_TIPO_DOC_EXCL"],
      ["codigo" => "MOD_TIPO_DOC_INCL"],
      ["codigo" => "MOD_TIPO_JUST"],
      ["codigo" => "MOD_TIPO_JUST_EDT"],
      ["codigo" => "MOD_TIPO_JUST_EXCL"],
      ["codigo" => "MOD_TIPO_JUST_INCL"],
      ["codigo" => "MOD_TIPO_MDL"],
      ["codigo" => "MOD_TIPO_MDL_EDT"],
      ["codigo" => "MOD_TIPO_MDL_EXCL"],
      ["codigo" => "MOD_TIPO_MDL_INCL"],
      ["codigo" => "MOD_TIPO_MTV_AFT"],
      ["codigo" => "MOD_TIPO_MTV_AFT_EDT"],
      ["codigo" => "MOD_TIPO_MTV_AFT_EXCL"],
      ["codigo" => "MOD_TIPO_MTV_AFT_INCL"],
      ["codigo" => "MOD_TPMAF_INCL"],
      ["codigo" => "MOD_TIPO_PROC"],
      ["codigo" => "MOD_TIPO_PROC_EDT"],
      ["codigo" => "MOD_TIPO_PROC_EXCL"],
      ["codigo" => "MOD_TIPO_PROC_INCL"],
      ["codigo" => "MOD_TIPO_TRF"],
      ["codigo" => "MOD_TIPO_TRF_EDT"],
      ["codigo" => "MOD_TIPO_TRF_EXCL"],
      ["codigo" => "MOD_TIPO_TRF_INCL"],
      ["codigo" => "MOD_TRF"],
      ["codigo" => "MOD_TRF_EDT"],
      ["codigo" => "MOD_TRF_EXCL"],
      ["codigo" => "MOD_TRF_INCL"],
      ["codigo" => "MOD_UND"],
      ["codigo" => "MOD_UND_EDT"],
      ["codigo" => "MOD_UND_INCL"],
      ["codigo" => "MOD_UND_INTG"],
      ["codigo" => "MOD_UND_INTG_EDT"],
      ["codigo" => "MOD_UND_INTG_EXCL"],
      ["codigo" => "MOD_UND_INTG_GST"],
      ["codigo" => "MOD_UND_INTG_INCL"],
      ["codigo" => "MOD_UND_TUDO"],
      ["codigo" => "MOD_USER"],
      ["codigo" => "MOD_USER_ATRIB"],
      ["codigo" => "MOD_USER_EDT"],
      ["codigo" => "MOD_USER_INCL"],
      ["codigo" => "MOD_USER_TUDO"],
    ];

    // Inserção de dados
    $capacidadesInseridas = [];
    $capacidadesRestauradas = [];
    $tipoCapacidadesInexistentes = [];
    $capacidadesRepetidas = [];

    foreach ($capacidades_participante as $c) {
      $capacidade = [
        "id" => $this->utilService->uuid("Participante" . $c['codigo']),
        "created_at" => $this->timenow,
        "updated_at" => $this->timenow,
        "deleted_at" => NULL,
        "perfil_id" => $this->utilService->uuid("Participante"),
        "tipo_capacidade_id" => $this->utilService->uuid($c['codigo']),
      ];

      $queryCapacidade = Capacidade::onlyTrashed()->find($capacidade['id']);
      $queryTipoCapacidade = TipoCapacidade::find($capacidade['tipo_capacidade_id']);

      if ($queryTipoCapacidade) {
        if (!empty ($queryCapacidade)) {
          $queryCapacidade->restore();
          array_push($capacidadesRestauradas, $capacidade['id']);
        } else {
          $result = Capacidade::insertOrIgnore($capacidade);
          //if (!$result) echo("Capacidade já existe: (" . $c['codigo'] . ") Participante.\n");
        }
        !in_array($capacidade['id'], $capacidadesInseridas) ? array_push($capacidadesInseridas, $capacidade['id']) : array_push($capacidadesRepetidas, ["Participante", $c['codigo']]);
      } else {
        // echo("Erro: TipoCapacidade inexistente(" . "código: " . $c['codigo'] . " - ID: " . $capacidade['tipo_capacidade_id']. ")");
        array_push($tipoCapacidadesInexistentes, ["Participante", $c['codigo']]);
      }
    }

    foreach ($capacidades_chefia_de_unidade_executora as $c) {
      $capacidade = [
        "id" => $this->utilService->uuid("Chefia de Unidade Executora" . $c['codigo']),
        "created_at" => $this->timenow,
        "updated_at" => $this->timenow,
        "deleted_at" => NULL,
        "perfil_id" => $this->utilService->uuid("Chefia de Unidade Executora"),
        "tipo_capacidade_id" => $this->utilService->uuid($c['codigo']),
      ];
      $queryCapacidade = Capacidade::onlyTrashed()->find($capacidade['id']);
      $queryTipoCapacidade = TipoCapacidade::find($capacidade['tipo_capacidade_id']);

      if ($queryTipoCapacidade) {
        if (!empty ($queryCapacidade)) {
          $queryCapacidade->restore();
          array_push($capacidadesRestauradas, $capacidade['id']);
        } else {
          $result = Capacidade::insertOrIgnore($capacidade);
        }
        !in_array($capacidade['id'], $capacidadesInseridas) ? array_push($capacidadesInseridas, $capacidade['id']) : array_push($capacidadesRepetidas, ["Chefia de Unidade Executora", $c['codigo']]);
      } else {
        array_push($tipoCapacidadesInexistentes, ["Chefia de Unidade Executora", $c['codigo']]);
      }
    }

    foreach ($capacidades_administrador_negocial as $c) {
      $capacidade = [
        "id" => $this->utilService->uuid("Administrador Negocial" . $c['codigo']),
        "created_at" => $this->timenow,
        "updated_at" => $this->timenow,
        "deleted_at" => NULL,
        "perfil_id" => $this->utilService->uuid("Administrador Negocial"),
        "tipo_capacidade_id" => $this->utilService->uuid($c['codigo']),
      ];

      $queryCapacidade = Capacidade::onlyTrashed()->find($capacidade['id']);
      $queryTipoCapacidade = TipoCapacidade::find($capacidade['tipo_capacidade_id']);

      if ($queryTipoCapacidade) {
        if (!empty ($queryCapacidade)) {
          $queryCapacidade->restore();
          array_push($capacidadesRestauradas, $capacidade['id']);
        } else {
          $result = Capacidade::insertOrIgnore($capacidade);
        }
        !in_array($capacidade['id'], $capacidadesInseridas) ? array_push($capacidadesInseridas, $capacidade['id']) : array_push($capacidadesRepetidas, ["Administrador Negocial", $c['codigo']]);
      } else {
        array_push($tipoCapacidadesInexistentes, ["Administrador Negocial", $c['codigo']]);
      }
    }

    $perfilDesenvolvedorId = Perfil::where([['nome', 'Desenvolvedor']])->first()->id;
    $qtdCapacidadesRemovidas = Capacidade::whereNotIn('id', $capacidadesInseridas)->whereNotIn('perfil_id', [$perfilDesenvolvedorId])->delete();
    $qtdCapacidades = Capacidade::count();
    $qtdCapacidadesRestauradas = count($capacidadesRestauradas);
    $qtdTiposCapacidadesInexistentes = count($tipoCapacidadesInexistentes);
    $qtdCapacidadesRepetidas = count($capacidadesRepetidas);

    echo ("*** CapacidadeSeeder ***" . ".\n");
    echo ("Quantidade total de capacidades: " . $qtdCapacidades . ".\n");
    echo ("Quantidade de capacidades removidas: " . $qtdCapacidadesRemovidas . ".\n");
    echo ("Quantidade de capacidades restauradas: " . $qtdCapacidadesRestauradas . ".\n");

    if ($qtdTiposCapacidadesInexistentes > 0) {
      echo ("\nQuantidade de capacidades usadas que não existem na tabela tipos_capacidades:\n");
      foreach ($tipoCapacidadesInexistentes as $msg) {
        echo (implode(" - ", $msg) . "\n");
      }
    }

    if ($qtdCapacidadesRepetidas > 0) {
      echo ("\nCapacidades repetidas no mesmo perfil e não registradas na tabela capacidades:\n");
      foreach ($capacidadesRepetidas as $msg) {
        echo (implode(" - ", $msg) . "\n");
      }
    }
    ;

    echo ("*********************************" . ".\n");
  }
}
