<?php

namespace App\Http\Requests\Album;

use Illuminate\Foundation\Http\FormRequest;

class AlbumStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'title' => 'required',
            'release_year' => 'numeric',
            'type' => '',
            'artists_id.*' => 'numeric|exists:artists,id',
            'avatar' => 'mimes:jpg,gif,png',
            'cover' => 'mimes:jpg,gif,png',
        ];
    }
}
