<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use YourAppRocks\EloquentUuid\Traits\HasUuid;

class Track extends Model
{
    use HasFactory, HasUuid;

    protected $fillable = [
        'title',
        'path_track',
        'user_id',
        'approve_detail_id',
    ];
}