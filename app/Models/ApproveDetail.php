<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ApproveDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_admin_id',
        'approved_at',
        'is_verified',
        'is_banned',
        'ban_reason',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'approved_at' => 'datetime',
    ];
}
