<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Artist;
use App\Services\File\UploadImageItemFile;
use Illuminate\Http\Request;

class ArtistController extends Controller
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
    public function store(Request $request)
    {
        $artist = new Artist();
        $artist->real_name = $request->get('real_name');
        $artist->artistic_name = $request->get('artistic_name');
        $artist->user_id = $request->user()->id;

        if ($request->hasFile('avatar')) {
            $artist->setItemImage('item_image_avatar_id', $request->file('avatar'), [
                [500],
                [1000],
                [2000],
            ]);
        }

        if ($request->hasFile('cover')) {
            $artist->setItemImage('item_image_cover_id', $request->file('cover'), [
                [500],
                [1000],
                [2000],
            ]);
        }

        $artist->load('avatar', 'cover');
        dd($artist->toArray());

        $artist->save();
        dd($artist);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Artist  $artist
     * @return \Illuminate\Http\Response
     */
    public function show(Artist $artist)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Artist  $artist
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Artist $artist)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Artist  $artist
     * @return \Illuminate\Http\Response
     */
    public function destroy(Artist $artist)
    {
        //
    }
}
