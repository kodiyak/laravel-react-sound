<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePlaylistsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('playlists', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');
            $table->string('title');
            $table->text('description')->nullable();
            $table->boolean('is_collab')->default(false);
            $table->string('avatar')->nullable();
            $table->timestamps();

            $table->foreignId('user_id')->references('id')->on('users');
        });

        Schema::create('playlists_has_users', function (Blueprint $table) {
            $table->foreignId('user_id')->references('id')->on('users');
            $table->foreignId('playlist_id')->references('id')->on('playlists');
            $table->boolean('can_edit')->default(false);
        });

        Schema::create('playlists_has_tracks', function (Blueprint $table) {
            $table->foreignId('track_id')->references('id')->on('tracks');
            $table->foreignId('playlist_id')->references('id')->on('playlists');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('playlists_has_tracks');
        Schema::dropIfExists('playlists_has_users');
        Schema::dropIfExists('playlists');
    }
}
