<?php

namespace App\Helpers;

use Illuminate\Support\Facades\DB;

class CheckConnection
{
    public static function check($name = null)
    {
        try {
            DB::connection($name)->getPdo();

            return true;
        } catch (\Exception $e) {
            return false;
        }
    }
}
