<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateApproveDetailsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('approve_details', function (Blueprint $table) {
            $table->id();
            $table->dateTime('approved_at')->nullable();
            $table->boolean('is_verified')->nullable();
            $table->boolean('id_banned')->nullable();
            $table->text('ban_reason')->nullable();
            $table->timestamps();
            $table
                ->foreignId('user_admin_id')
                ->references('id')
                ->on('users');
        });

        $this->upApproveDetails('artists');
        $this->upApproveDetails('albums');
        $this->upApproveDetails('tracks');
    }

    private function upApproveDetails($table)
    {
        Schema::table($table, function (Blueprint $table) {
            $table
                ->foreignId('approve_detail_id')
                ->references('id')
                ->on('approve_details');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('approve_details');
    }
}
