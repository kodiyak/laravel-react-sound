<?php

namespace App\Services\Traits;

use App\Services\File\UploadImageFile;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;

trait HasImage
{
    /**
     * setImage
     *
     * @param  string $fieldName
     * @param  string|UploadedFile $image
     * @return void
     */
    public function setImage($fieldName, $image)
    {
        $fieldValue = $this->getRawOriginal('avatar');

        $this->{$fieldName} = app(UploadImageFile::class)->run(
            $image,
            $this->getTable() . '/' . $this->id
        );

        if ($fieldValue) {
            try {
                Storage::disk('public')->delete($fieldValue);
            } catch (\Exception $e) {
            }
        }
    }
}
