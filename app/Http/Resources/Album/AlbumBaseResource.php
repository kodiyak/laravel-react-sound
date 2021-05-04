<?php

namespace App\Http\Resources\Album;

use Illuminate\Http\Resources\Json\JsonResource;

class AlbumBaseResource extends JsonResource
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
            'artists' => $this->artists,
        ];

        return array_merge(
            $data,
            $relationships
        );
    }
}
