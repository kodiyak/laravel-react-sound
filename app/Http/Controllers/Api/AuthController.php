<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Album;
use App\Models\Artist;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    /**
     * Instantiate a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    public function getProfile(Request $request)
    {
        $user = $request->user();
        $user->load('playlists');

        return [
            'auth' => $user,
            'artists' => Artist::all(),
            'albums' => Album::all(),
        ];
    }
}
