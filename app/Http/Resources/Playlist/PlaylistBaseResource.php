<?php

namespace App\Http\Resources\Playlist;

use Illuminate\Http\Resources\Json\JsonResource;

class PlaylistBaseResource extends JsonResource
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
            'followers' => $this->followers,
        ];

        return array_merge(
            $data,
            $relationships
        );
    }
}
