<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;
use Throwable;

class CurriculumController extends ControllerBase
{
  public function checkPermissions($action, $request, $service, $unidade, $usuario)
  {
    switch ($action) {
      case 'STORE':
        if (!$usuario->hasPermissionTo('MOD_RX_CURR_INCL')) throw new ServerException("CapacidadeStore");
        break;
      case 'EDIT':
        if (!$usuario->hasPermissionTo('MOD_RX_CURR_EDT')) throw new ServerException("CapacidadeEdit");
        break;
      case 'DESTROY':
        if (!$usuario->hasPermissionTo('MOD_RX_CURR_EXCL')) throw new ServerException("CapacidadeDestroy");
        break;
      case 'QUERY':
        if (!$usuario->hasPermissionTo('MOD_RX_CURR')) throw new ServerException("CapacidadeDestroy");
        break;
    }
  }

  public function lookupsCurriculum(Request $request)
  {
    try {
      //$this->checkPermissions('QUERY', $request, $this->service, $this->getUnidade($request), $this->getUsuario($request));
      $result = response()->json([
        'success' => true,
        'lookups' => $this->service->lookupsCurriculum()
      ]);
      return $result;
    } catch (Throwable $e) {
      return response()->json(['error' => $e->getMessage()]);
    }
  }
}
