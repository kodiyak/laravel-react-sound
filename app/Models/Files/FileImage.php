<?php

namespace App\Models\Files;

use App\Casts\JsonCast;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FileImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'path',
        'size',
        'item_image_id',
        'metadata',
    ];

    protected $casts = [
        'metadata' => JsonCast::class,
    ];
}
