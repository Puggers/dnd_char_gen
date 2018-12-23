<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DND_class_feature extends Model
{
    protected $table = 'DND_class_features';
    protected $fillable = [
        'name', 'base_class'
    ];
}
