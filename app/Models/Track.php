<?php

namespace App\Models;

use App\Models\Files\ItemImage;
use App\Services\Traits\HasApproveDetail;
use App\Services\Traits\HasItemImage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;
use YourAppRocks\EloquentUuid\Traits\HasUuid;

class Track extends Model
{
    use HasFactory, HasUuid, HasApproveDetail, HasItemImage;

    protected $fillable = [
        'title',
        'path_track',
        'user_id',
        'album_id',
        'item_image_avatar_id',
        'approve_detail_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function album()
    {
        return $this->belongsTo(Album::class, 'album_id');
    }

    public function avatar()
    {
        return $this->belongsTo(ItemImage::class, 'item_image_avatar_id')->with('images');
    }

    public function approveDetail()
    {
        return $this->belongsTo(ApproveDetail::class, 'approve_detail_id');
    }

    /**
     * setTrack
     *
     * @param  \Illuminate\Http\UploadedFile $track
     * @return Track
     */
    public function setTrack($track, $disk = 'public')
    {
        $extension = $track->guessClientExtension() ?? $track->guessExtension() ?? 'mp3';
        $path = 'tracks/' . $this->id . '_track.' . $extension;
        Storage::disk($disk)->put($path, $track);
        $this->path_track = $path;

        return $this;
    }

    /**
     * setAvatar
     *
     * @param  \Illuminate\Http\UploadedFile|string $image
     * @return void
     */
    public function setAvatar($image)
    {
        $this->setItemImage('item_image_avatar_id', $image, [
            [500],
            [1000],
            [2000],
        ]);
    }
}
