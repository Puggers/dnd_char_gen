<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DND_race extends Model
{
    protected $table = 'DND_races';
    protected $fillable = [
        'name'
    ];
}
