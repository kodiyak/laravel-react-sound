<?php

namespace App\Http\Resources\Auth;

use App\Http\Resources\Playlist\PlaylistTracksResource;
use Illuminate\Http\Resources\Json\JsonResource;

class AuthBaseResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        $data = parent::toArray($request);

        $relationships = [
            'playlists' => PlaylistTracksResource::collection($this->playlists),
        ];

        return array_merge(
            $data,
            $relationships
        );
    }
}
