<?php

namespace App\Http\Requests\User;

use Illuminate\Foundation\Http\FormRequest;

class UserUpdateRequest extends FormRequest
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
            // 'avatar' => ['mimes:jpg,gif,png'],
            'avatar' => '',
            'first_name' => 'required',
            'last_name' => '',
            'username' => 'required',
            'email' => 'required',
        ];
    }

    public function messages()
    {
        return [];
    }
}
