<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Homecontroller;
use App\Http\Controllers\paypalController;

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/
Route::middleware('language')->group(function () {
    

Route::get('/', [Homecontroller::class,'home'])->name('home');
Route::get('/com', [Homecontroller::class,'com']);
Route::get('/eur', [Homecontroller::class,'eur']);
Route::get('/afr', [Homecontroller::class,'afr']);
Route::get('/asia', [Homecontroller::class,'asia']);

Route::get('lang/{lang}', [Homecontroller::class,'changeLang'])->name('changeLang');
});



Route::get('/dashboard',[Homecontroller::class,'dashboard'])->middleware(['auth', 'verified'])->name('dashboard');
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
