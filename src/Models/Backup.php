<?php

namespace Fusion\Models;

use Fusion\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Backup extends Model
{
    /**
     * The attributes that are fillable via mass assignment.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'disk',
        'size',
        'location',
    ];

    /**
     * Physical backup file exists?
     *
     * @return bool
     */
    public function exists()
    {
        return $this->backup()->exists();
    }

    /**
     * Get full path to backup.
     *
     * @return string
     */
    public function getFullPathAttribute()
    {
        return Storage::disk($this->disk)->path($this->location);
    }

    /**
     * Get Spatie\Backup\BackupDestination\Backup.
     *
     * @return \Spatie\Backup\BackupDestination\Backup
     */
    public function backup()
    {
        return new \Spatie\Backup\BackupDestination\Backup(
            Storage::disk($this->disk),
            $this->location
        );
    }
}
