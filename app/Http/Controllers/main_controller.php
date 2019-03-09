<?php

namespace App\Http\Controllers;

use App\DND_background;
use App\DND_class;
use App\DND_class_feature;
use App\DND_race;
use Illuminate\Http\Request;

class main_controller extends Controller
{
    function index()
    {

        $race = DND_race::orderByRaw("RAND()")->first();
        $class = DND_class::orderByRaw("RAND()")->first();
        $class_feature = DND_class_feature::select('*')->where('base_class', '=', $class->name)->inRandomOrder()->first();
        $background = DND_background::orderByRaw("RAND()")->first();

        return view('char_roller', compact('race', 'class', 'background', 'class_feature'));

    }

    function collage(){

        return view('collage');

    }
}
