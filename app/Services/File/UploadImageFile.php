<?php

namespace App\Services\File;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManagerStatic as Image;
use Ramsey\Uuid\Uuid;

class UploadImageFile
{
    /**
     * disk
     *
     * @var string
     */
    protected $disk = 'public';

    /**
     * fileSystem
     *
     * @var \Illuminate\Contracts\Filesystem\Filesystem
     */
    protected $fileSystem;


    /**
     * fileOrUrl
     *
     * @var UploadedFile|string
     */
    protected $fileOrUrl;


    /**
     * image
     *
     * @var \Intervention\Image\Image
     */
    protected $image;

    /**
     * extension
     *
     * @var string
     */
    protected $extension;

    public function __construct()
    {
        $this->setDisk('public');
    }

    /**
     * setDisk
     *
     * @param  string $disk
     * @return UploadImageFile
     */
    public function setDisk($disk)
    {
        $this->disk = $disk;
        $this->fileSystem = Storage::disk($this->disk);
    }

    /**
     * setImage
     *
     * @param  UploadedFile|string $image
     * @return UploadImageFile
     */
    public function setImage($image)
    {
        $this->fileOrUrl = $image;
        $this->image = Image::make($image);
    }

    /**
     * setExtension
     *
     * @param  string|null $extension
     * @return UploadImageFile
     */
    public function setExtension($extension = null)
    {
        if ($extension) {
            $this->extension = $extension;

            return $this;
        }
        if ($this->fileOrUrl instanceof UploadedFile) {
            $this->extension = $this->fileOrUrl->guessClientExtension();
        } else {
            $this->extension = 'jpg';
        }

        return $this;
    }

    protected function getFileName()
    {
        return Uuid::uuid4() . '.' . $this->extension;
    }

    /**
     * run
     *
     * Execute the image upload
     *
     * @param  UploadedFile|string $image
     * @param  string $directory
     * @return string
     */
    public function run($image, $directory, $disk = 'public')
    {
        $this->setDisk($disk);
        $this->setImage($image);
        $this->setExtension('webp');
        $this->fileSystem->makeDirectory($directory);

        $path = $directory . '/' . $this->getFileName();
        $fullPath = $this->fileSystem->path($path);

        $this->image->save($fullPath, 100, $this->extension);

        return $path;
    }
}
