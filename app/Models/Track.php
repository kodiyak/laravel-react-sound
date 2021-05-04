<?php

namespace App\Models;

use App\Casts\AsFileUrl;
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

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'path_track',
        'user_id',
        'album_id',
        'item_image_avatar_id',
        'approve_detail_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'path_track' => AsFileUrl::class,
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
        $path = 'tracks/' . $this->id;

        $this->path_track = Storage::disk($disk)->put($path, $track);

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
