<?php

namespace App\Http\Resources\Track;

use Illuminate\Http\Resources\Json\JsonResource;

class TrackAlbumResource extends JsonResource
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

        $this->load('album', 'album.avatar', 'album.cover');

        $relationships = [
            'album' => $this->album,
        ];

        return array_merge(
            $data,
            $relationships,
        );
    }
}
