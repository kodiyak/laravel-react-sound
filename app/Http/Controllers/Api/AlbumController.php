<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Album\AlbumStoreRequest;
use App\Models\Album;
use Illuminate\Http\Request;

class AlbumController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AlbumStoreRequest $request)
    {
        $album = new Album();
        $album->title = $request->get('title');
        $album->release_year = (int) $request->get('release_year');
        $album->type = $request->get('type');
        $album->setApproveDetail([]);
        $album->user()->associate($request->user());

        if ($request->hasFile('cover')) {
            $album->setCover($request->file('cover'));
        }
        if ($request->hasFile('avatar')) {
            $album->setAvatar($request->file('avatar'));
        }

        $album->save();

        $album->setArtistsByIds($request->get('artists_id'));

        $album->load('avatar', 'cover', 'approveDetail', 'artists');

        return $album;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function show(Album $album)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Album $album)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Album  $album
     * @return \Illuminate\Http\Response
     */
    public function destroy(Album $album)
    {
        //
    }
}
