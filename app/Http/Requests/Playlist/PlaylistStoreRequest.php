<?php

namespace App\Http\Requests\Playlist;

use Illuminate\Foundation\Http\FormRequest;

class PlaylistStoreRequest extends FormRequest
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
            'description' => '',
            'avatar' => 'mimes:jpg,gif,png'
        ];
    }
}
