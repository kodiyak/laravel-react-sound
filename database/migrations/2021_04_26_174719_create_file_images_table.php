<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateFileImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('file_images', function (Blueprint $table) {
            $table->id();
            $table->string('path');
            $table->string('size');
            $table->timestamps();

            $table
                ->foreignId('item_image_id')
                ->references('id')
                ->on('item_images');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('file_images');
    }
}
