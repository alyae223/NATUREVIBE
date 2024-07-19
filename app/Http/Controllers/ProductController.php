<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // Get all products
    public function index()
    {
        return  Product::where('created_at','>','2024-05-04 20:19:16')->get();
        
        
        
    }
    public function show(){
        return  Product::all();
    }
    public function getProductsByCategory($category)
    {
        $products = Product::where('category', $category)->get();
        return response()->json($products);
    }
}