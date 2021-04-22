<?php

namespace App\Http\Controllers\Api;

use App\Helpers\CheckConnection;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HealthCheckController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        return [
            'php_version' => phpversion(),
            'os' => PHP_OS,
            'server' => $_SERVER['SERVER_SOFTWARE'],
            'connections' => [
                'mysql' => CheckConnection::check('mysql'),
                'sqlite' => CheckConnection::check('sqlite'),
                'pgsql' => CheckConnection::check('pgsql'),
                'sqlsrv' => CheckConnection::check('sqlsrv'),
            ]
        ];
    }
}
