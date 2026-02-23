<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\JsonResponse;

class PostController extends Controller
{
    /**
     * GET /api/posts
     * Return all posts (most recent first), without the heavy `body` column.
     */
    public function index(): JsonResponse
    {
        $posts = Post::select('id', 'title', 'author', 'category', 'cover_emoji', 'excerpt', 'read_minutes', 'created_at')
            ->latest()
            ->get();

        return response()->json([
            'data'  => $posts,
            'total' => $posts->count(),
        ]);
    }

    /**
     * GET /api/posts/{post}
     * Return a single post including the full body.
     */
    public function show(Post $post): JsonResponse
    {
        return response()->json([
            'data' => $post,
        ]);
    }
}
