<?php

namespace App\Http\Controllers;
use App\ViciousMockery;

class main_controller extends Controller
{
    function index()
    {

        $mockery = ViciousMockery::orderByRaw("RAND()")->first();
        return view('vicious_mockery', compact('mockery'));

    }
}
