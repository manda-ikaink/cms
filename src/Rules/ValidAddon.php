<?php

namespace Fusion\Rules;

use Illuminate\Contracts\Validation\Rule;
use ZipArchive;

class ValidAddon implements Rule
{
    /**
     * @var \ZipArchive
     */
    protected $zipArchive;

    /**
     * @var array
     */
    protected $requiredFiles;

    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(ZipArchive $zipArchive)
    {
        $this->zipArchive    = $zipArchive;
        $this->requiredFiles = ['addon.json'];
    }

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
        $canUnzip = $this->zipArchive->open($value);
        $isValid  = $canUnzip === true;

        if ($canUnzip) {
            foreach ($this->requiredFiles as $requiredFile) {
                if ($this->zipArchive->locateName($requiredFile, ZipArchive::FL_NODIR) === false) {
                    $isValid = false;
                }
            }

            $this->zipArchive->close();
        }

        return $isValid;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'An addon requires the following files: '.implode(', ', $this->requiredFiles).'.';
    }
}
