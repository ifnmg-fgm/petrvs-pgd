<?php

namespace App\Http\Controllers;

use App\Services\CalendarioService;
use Illuminate\Http\Request;
use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;
use Throwable;

class UsuarioController extends ControllerBase
{
  public $updatable = ["config", "notificacoes", "texto_complementar_plano", "perfil_id"];

  public function checkPermissions($action, $request, $service, $unidade, $usuario)
  {
    switch ($action) {
      case 'STORE':
        if (!$usuario->hasPermissionTo('MOD_USER_INCL')) throw new ServerException("CapacidadeStore", "Inserção não realizada");
        break;
      case 'EDIT':
        if (!$usuario->hasPermissionTo('MOD_USER_EDT')) throw new ServerException("CapacidadeStore", "Edição não realizada");
        break;
      case 'DESTROY':
        if (!$usuario->hasPermissionTo('MOD_USER_EXCL')) throw new ServerException("CapacidadeStore", "Exclusão não realizada");
        break;
    }
  }

  public function calculaDataTempoUnidade(Request $request)
  {
    try {
      $data = $request->validate([
        'inicio' => ['required'],
        'fimOuTempo' => ['required'],
        'cargaHoraria' => ['required'],
        'unidade_id' => ['required'],
        'tipo' => ['required'],
        'pausas' => [],
        'afastamentos' => []
      ]);
      return response()->json([
        'success' => true,
        'data' => CalendarioService::preparaParametros($data)
      ]);
    } catch (Throwable $e) {
      return response()->json(['error' => $e->getMessage()]);
    }
  }
}
