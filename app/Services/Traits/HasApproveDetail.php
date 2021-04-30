<?php

namespace App\Services\Traits;

use App\Models\ApproveDetail;

trait HasApproveDetail
{
    /**
     * setApproveDetail
     *
     * @param  array $attributes
     * @return ApproveDetail
     */
    public function setApproveDetail($attributes = [])
    {
        if ($this->approve_detail_id) {
            $approveDetail = ApproveDetail::find($this->approve_detail_id);
            $approveDetail->fill($attributes);
        } else {
            $approveDetail = new ApproveDetail($attributes);
        }

        $approveDetail->save();

        $this->approve_detail_id = $approveDetail->id;

        return $approveDetail;
    }
}
