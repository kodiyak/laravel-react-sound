<?php

namespace App\Services\File;

use App\Models\Files\ItemImage;
use Illuminate\Http\UploadedFile;
use Ramsey\Uuid\Uuid;
use Intervention\Image\ImageManagerStatic as Image;

class UploadImageItemFile extends UploadImageFile
{
    /**
     * upload
     *
     * @param  UploadedFile|string $image
     * @param  string $disk
     * @param  array $sizes
     * @return ItemImage
     */
    public function upload($image, $disk = 'public', $sizes = [])
    {
        $directory = Uuid::uuid4();

        $this->setDisk($disk);
        $this->setExtension('webp');

        $itemImage = ItemImage::create([
            'folder' => $directory->toString(),
        ]);

        foreach ($sizes as $size) {
            $width = $size[0] ?? null;
            $height = $size[1] ?? null;

            $this->resizeAndUpload($image, $itemImage, $width, $height);
        }

        return $itemImage;
    }

    /**
     * resizeAndUpload
     *
     * @param  ItemImage $itemImage
     * @param  UploadedFile|Image|string $width
     * @param  integer|null $width
     * @param  integer|null $height
     * @return string
     */
    private function resizeAndUpload($image, $itemImage, $width = null, $height = null)
    {
        $image = Image::make($image)->resize($width, $height, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        $path = $this->run($image, $itemImage->getDirectory(), $this->disk);

        return $itemImage->images()->create([
            'path' => $path,
            'size' => $image->filesize(),
            'metadata' => [
                'width' => $image->width(),
                'height' => $image->height(),
            ]
        ]);
    }
}
