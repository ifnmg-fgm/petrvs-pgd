<?php

namespace App\Http\Controllers;

use App\Http\Controllers\ControllerBase;
use App\Exceptions\ServerException;
use Throwable;

class TenantsLogsController extends ControllerBase {
    public function checkPermissions($action, $request, $service, $unidade, $usuario) {
        /* Verifica se foi passada a credencial do administrador do sistema */
        if(false) throw new ServerException("CapacidadeStore", "Inserção não realizada");
    }

}
