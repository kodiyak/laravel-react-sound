<?php

namespace App\Models;

use App\Casts\AsFileUrl;
use App\Services\Traits\HasImage;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use YourAppRocks\EloquentUuid\Traits\HasUuid;

class Playlist extends Model
{
    use HasFactory, HasImage, HasUuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'title',
        'description',
        'avatar',
        'user_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'avatar' => AsFileUrl::class,
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id');
    }

    public function followers()
    {
        return $this->belongsToMany(User::class, 'playlists_has_users');
    }

    public function tracks()
    {
        return $this->belongsToMany(Track::class, 'playlists_has_tracks');
    }

    /**
     * addTrack
     *
     * @param  Track $track
     * @return void
     */
    public function addTrack($track)
    {
        $this->tracks()->detach([$track->id]);
        $this->tracks()->attach([$track->id]);
    }

    /**
     * removeTrack
     *
     * @param  Track $track
     * @return void
     */
    public function removeTrack($track)
    {
        $this->tracks()->detach([$track->id]);
    }
}
