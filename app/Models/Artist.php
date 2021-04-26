<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Artist extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'real_name',
        'artistic_name',
        'description',
        'user_id',
        'album_id',
        'item_image_avatar_id',
        'item_image_cover_id',
        'approve_detail_id',
    ];
}
