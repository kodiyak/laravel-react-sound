<?php

namespace App\Http\Controllers\FrontEnd;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function index(Request $request)
    {
        $oAuthClient = DB::table('oauth_clients')->where('password_client', true)->first();

        // dd($oAuthClient);

        return view('index', [
            'oAuthClient' => $oAuthClient,
        ]);
    }
}
