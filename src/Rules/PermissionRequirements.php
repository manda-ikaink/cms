<?php

namespace Fusion\Rules;

use Fusion\Console\Actions\CheckServerRequirements;
use Illuminate\Contracts\Validation\Rule;

class PermissionRequirements implements Rule
{
    /**
     * Determine if the validation rule passes.
     *
     * @param string $attribute
     * @param mixed  $value
     *
     * @return bool
     */
    public function passes($attribute, $value)
    {
        return CheckServerRequirements::verifyFolderPermissions();
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Directory permissions do not meet requirements.';
    }
}
