<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'author',
        'category',
        'cover_emoji',
        'excerpt',
        'body',
        'read_minutes',
    ];
}
