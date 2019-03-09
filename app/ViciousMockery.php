<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ViciousMockery extends Model
{
    protected $table = 'vicious_mockery';
    protected $fillable = [
        'text'
    ];
}
