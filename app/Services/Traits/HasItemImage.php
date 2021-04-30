<?php

namespace App\Services\Traits;

use App\Models\Files\ItemImage;
use App\Services\File\UploadImageItemFile;
use Illuminate\Http\UploadedFile;
use Intervention\Image\ImageManagerStatic as Image;

trait HasItemImage
{
    /**
     * setItemImage
     *
     * @param  string $fieldName
     * @param  UploadedFile|Image|string $image
     * @param  array $sizes
     * @return ItemImage
     */
    public function setItemImage($fieldName, $image, $sizes)
    {
        $itemImage = app(UploadImageItemFile::class)->upload($image, 'public', $sizes);

        $this->{$fieldName} = $itemImage->id;

        return $itemImage;
    }
}
