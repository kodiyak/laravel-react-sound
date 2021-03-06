<?php

namespace App\Models;

use App\Casts\AsFileUrl;
use App\Services\Traits\HasImage;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use YourAppRocks\EloquentUuid\Traits\HasUuid;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasUuid, HasImage;

    public const ADMIN = 1;
    public const USER = 0;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'username',
        'avatar',
        'first_name',
        'last_name',
        'email',
        'password',
        'is_banned',
        'ban_reason',
        'role',
        'is_contributor',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'avatar' => AsFileUrl::class,
    ];

    public function playlists()
    {
        return $this->hasMany(Playlist::class, 'user_id');
    }

    public function playlistsFollowing()
    {
        return $this->belongsToMany(Playlist::class, 'playlists_has_users');
    }
}
