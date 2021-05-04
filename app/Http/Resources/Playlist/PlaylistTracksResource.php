<?php

namespace App\Http\Resources\Playlist;

use App\Http\Resources\Track\TrackAlbumResource;
use Illuminate\Http\Resources\Json\JsonResource;

class PlaylistTracksResource extends JsonResource
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
            'tracks' => TrackAlbumResource::collection($this->tracks),
        ];

        return array_merge(
            $data,
            $relationships
        );
    }
}
