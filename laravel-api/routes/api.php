<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\PostController;
use App\Http\Controllers\SmoothieController;
use Illuminate\Support\Facades\Route;

// ── Public endpoints ─────────────────────────────────────────────────────────
Route::get('/posts',        [PostController::class,  'index']);
Route::get('/posts/{post}', [PostController::class,  'show']);
Route::get('/smoothies',    [SmoothieController::class, 'index']);

// ── Auth (no token needed) ───────────────────────────────────────────────────
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login',    [AuthController::class, 'login']);

// ── Protected (token required) ───────────────────────────────────────────────
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/me',      [AuthController::class, 'me']);
});
