<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use YourAppRocks\EloquentUuid\Traits\HasUuid;

class Album extends Model
{
    use HasFactory, HasUuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'release_year',
        'user_id',
        'approve_detail_id',
        'item_image_avatar_id',
        'item_image_cover_id',
    ];
}
