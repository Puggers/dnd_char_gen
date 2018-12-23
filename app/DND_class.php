<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DND_class extends Model
{
    protected $table = 'DND_classes';
    protected $fillable = [
        'name'
    ];
}
