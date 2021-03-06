<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\HealthCheckController;
use App\Http\Controllers\Api\{
    AlbumController,
    UserController,
    ArtistController,
    PlaylistController,
    TrackController
};
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/health-check', HealthCheckController::class);

Route::prefix('/oauth')->group(function () {
    Route::get('/profile', [AuthController::class, 'getProfile']);
});

Route::middleware('auth:api')->group(function () {
    Route::apiResource('users', UserController::class);
    Route::apiResource('artists', ArtistController::class);
    Route::apiResource('playlists', PlaylistController::class);
    Route::apiResource('albums', AlbumController::class);

    Route::post('albums/{album}/tracks', [TrackController::class, 'store']);
    Route::post('playlists/{playlist}/tracks/{track}', [PlaylistController::class, 'addTrack']);
    Route::delete('playlists/{playlist}/tracks/{track}', [PlaylistController::class, 'removeTrack']);
});
