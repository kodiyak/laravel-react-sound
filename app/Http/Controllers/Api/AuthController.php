<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\Auth\AuthBaseResource;
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

        return [
            'auth' => new AuthBaseResource($user),
            'artists' => Artist::all(),
            'albums' => Album::all(),
        ];
    }
}
