<?php

namespace App\Models\Files;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ItemImage extends Model
{
    use HasFactory;

    protected $fillable = [
        'folder',
    ];

    public function images()
    {
        return $this->hasMany(FileImage::class, 'item_image_id');
    }

    public function getDirectory()
    {
        return 'item-image/' . $this->id;
    }
}
