<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateItemImagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('item_images', function (Blueprint $table) {
            $table->id();
            $table->string('folder');
            $table->timestamps();
        });

        $this->upImages('albums', [
            'item_image_avatar_id',
            'item_image_cover_id',
        ]);

        $this->upImages('artists', [
            'item_image_avatar_id',
            'item_image_cover_id',
        ]);

        $this->upImages('tracks', [
            'item_image_avatar_id',
        ]);
    }

    private function upImages($table, $columns = [])
    {
        Schema::table($table, function (Blueprint $table) use ($columns) {
            foreach ($columns as $column) {
                $table
                    ->foreignId($column)
                    ->references('id')
                    ->on('item_images');
            }
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('item_images');
    }
}
