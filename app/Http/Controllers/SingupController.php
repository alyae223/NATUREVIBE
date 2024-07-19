<?php

namespace App\Http\Controllers;

use App\Models\Singup;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class SingupController extends Controller
{
    
    public function insert(Request $request)
{
    // Validate incoming request data
    $validator = Validator::make($request->all(), [
        'name' => 'required|string',
        'email' => 'required|email|unique:singups,email',
        'password' => 'required|min:6',
    ]);

    if ($validator->fails()) {
        return response()->json(['errors' => $validator->errors()], 422);
    }

    // Create a new Singup instance
    $singup = new Singup;
    $singup->name = $request->name;
    $singup->email = $request->email;
    $singup->password = bcrypt($request->password); // Hash the password
    $singup->save();

    // Return the created user data
    return response()->json($singup, 201);
}



    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Singup $singup)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Singup $singup)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Singup $singup)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Singup $singup)
    {
        //
    }
}
