<?php

namespace App\Models;

use App\Models\Files\ItemImage;
use App\Services\Traits\HasApproveDetail;
use App\Services\Traits\HasItemImage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use YourAppRocks\EloquentUuid\Traits\HasUuid;

class Artist extends Model
{
    use HasFactory, HasUuid, HasItemImage, HasApproveDetail;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'real_name',
        'artistic_name',
        'description',
        'user_id',
        'item_image_avatar_id',
        'item_image_cover_id',
        'approve_detail_id',
    ];

    public function avatar()
    {
        return $this->belongsTo(ItemImage::class, 'item_image_avatar_id')->with('images');
    }

    public function cover()
    {
        return $this->belongsTo(ItemImage::class, 'item_image_cover_id')->with('images');
    }

    public function approveDetail()
    {
        return $this->belongsTo(ApproveDetail::class, 'approve_detail_id');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    /**
     * setCover
     *
     * @param  \Illuminate\Http\UploadedFile|string $image
     * @return This
     */
    public function setCover($image)
    {
        $this->setItemImage('item_image_cover_id', $image, [
            [500],
            [1000],
            [2000],
        ]);
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
