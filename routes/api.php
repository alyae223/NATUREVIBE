<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\SingupController ;
use App\Http\Controllers\LoginContoller;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/product', [ProductController::class, 'index']);
Route::get('/products', [ProductController::class, 'show']);
Route::post('/signup', [SingupController::class, 'insert']); 
Route::post('/login', [LoginController::class, 'login']);
Route::get('/products/category/{category}', [ProductController::class, 'getProductsByCategory']);
