<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SmoothieController extends Controller
{
    public function index()
    {
        return response()->json([
            [
                'id' => 1,
                'author' => 'SarahFitness',
                'avatar' => 'https://api.dicebear.com/7.x/notionists/svg?seed=SarahFitness',
                'title' => 'Berry Blast Morning Smoothie 🍓✨',
                'description' => 'My go-to morning smoothie! Just blend frozen mixed berries, half a banana, spinach, almond milk, and a scoop of vanilla protein. Keeps me full until lunch!',
                'image' => 'https://images.unsplash.com/photo-1553530666-ba11a7ddc520?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'likes' => 124,
                'time_ago' => '2 hours ago',
                'comments' => [
                    ['id' => 101, 'author' => 'GymBro', 'text' => 'Looks amazing! What protein powder do you use?'],
                    ['id' => 102, 'author' => 'HealthyEats', 'text' => 'Can I substitute almond milk with oat milk?']
                ]
            ],
            [
                'id' => 2,
                'author' => 'GreenGuru',
                'avatar' => 'https://api.dicebear.com/7.x/notionists/svg?seed=GreenGuru',
                'title' => 'The Ultimate Detox Green 🥬🍏',
                'description' => 'Feeling sluggish? This green monster will wake you up. Kale, green apple, celery, cucumber, lemon juice, and plenty of ginger.',
                'image' => 'https://images.unsplash.com/photo-1628557044797-f21a177c37ec?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'likes' => 89,
                'time_ago' => '5 hours ago',
                'comments' => [
                    ['id' => 201, 'author' => 'MorningPerson', 'text' => 'The ginger kick is the best part! 🔥']
                ]
            ],
            [
                'id' => 3,
                'author' => 'TropicalVibes',
                'avatar' => 'https://api.dicebear.com/7.x/notionists/svg?seed=TropicalVibes',
                'title' => 'Mango Passion Sunset 🥭🌅',
                'description' => 'Missing the beach! Frozen mango, passionfruit puree, coconut water, and a splash of lime. Tastes like a vacation.',
                'image' => 'https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
                'likes' => 342,
                'time_ago' => '1 day ago',
                'comments' => [
                    ['id' => 301, 'author' => 'BeachBum', 'text' => 'I need this right now 😭'],
                    ['id' => 302, 'author' => 'SmoothieLover', 'text' => 'Try adding a little bit of mint next time!'],
                    ['id' => 303, 'author' => 'SarahFitness', 'text' => 'Oooo passionate fruit is my favorite.']
                ]
            ]
        ]);
    }
}
