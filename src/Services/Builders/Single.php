<?php

namespace Fusion\Services\Builders;

use Fusion\Contracts\Builder as BuilderContract;
use Fusion\Models\Matrix;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

class Single extends Builder implements BuilderContract
{
    /**
     * @var string
     */
    protected $matrix;

    /**
     * @var string
     */
    protected $namespace = 'Fusion\Models\Matrix';

    protected $model;

    /**
     * Create a new Single instance.
     *
     * @param string $matrix
     */
    public function __construct($matrix)
    {
        parent::__construct();

        $this->matrix = Matrix::where('handle', $matrix)->firstOrFail();
        $this->model  = $this->make();
    }

    /**
     * Make a new matrix model instance.
     */
    public function make()
    {
        $className = Str::studly($this->matrix->handle);
        $traits    = [];
        $fillable  = ['name', 'slug', 'matrix_id', 'status'];
        $casts     = [];

        if ($this->matrix->blueprint) {
            $fields = $this->matrix->blueprint->fields->reject(function ($field) {
                $fieldtype = fieldtypes()->get($field->type);

                if ($fieldtype->hasRelationship()) {
                    $this->addRelationship($field, $fieldtype);
                }

                return is_null($fieldtype->column);
            });

            foreach ($fields as $field) {
                $fieldtype  = fieldtypes()->get($field->type);
                $fillable[] = $field->handle;
                $casts[]    = $field->handle.'\' => \''.$fieldtype->cast;
            }
        }

        $path = fusion_path('/src/Models/Singles/'.$className.'.php');
        $stub = File::get(fusion_path('/stubs/matrices/single.stub'));

        $contents = strtr($stub, [
            '{class}'         => $className,
            '{slug}'          => $this->matrix->slug,
            '{handle}'        => $this->matrix->handle,
            '{fillable}'      => '[\''.implode('\', \'', $fillable).'\']',
            '{casts}'         => '[\''.implode('\', \'', $casts).'\']',
            '{with}'          => '[\''.implode('\', \'', $this->getWith()).'\']',
            '{dates}'         => '[\''.implode('\', \'', $this->getDates()).'\']',
            '{trait_classes}' => $this->getTraitImportStatements($traits),
            '{traits}'        => $this->getTraitUseStatements($traits),
            '{matrix_id}'     => $this->matrix->id,
            '{relationships}' => $this->generateRelationships(),
        ]);

        File::put($path, $contents);

        return app()->make('Fusion\Models\Singles\\'.$className);
    }
}
