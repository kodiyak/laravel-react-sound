<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\Artist\ArtistStoreRequest;
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
        return Artist::query()->paginate();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ArtistStoreRequest $request)
    {
        $artist = new Artist();
        $artist->real_name = $request->get('real_name');
        $artist->artistic_name = $request->get('artistic_name');
        $artist->user()->associate($request->user());

        // dd($request->validated());

        if ($request->hasFile('avatar')) {
            $artist->setAvatar($request->file('avatar'));
        }

        if ($request->hasFile('cover')) {
            $artist->setCover($request->file('cover'));
        }

        $artist->setApproveDetail([
            'approved_at' => now(),
        ]);

        $artist->load('avatar', 'cover', 'approveDetail');

        $artist->save();

        return $artist;
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
