<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

class PostFactory extends Factory
{
    public function definition(): array
    {
        $categories = ['Astro', 'Laravel', 'JavaScript', 'CSS', 'PHP', 'DevOps'];
        $emojis     = ['🚀', '⚡', '🎯', '🔥', '🌐', '🛠️', '💡', '🧩'];

        return [
            'title'        => $this->faker->sentence(6, true),
            'author'       => $this->faker->name(),
            'category'     => $this->faker->randomElement($categories),
            'cover_emoji'  => $this->faker->randomElement($emojis),
            'excerpt'      => $this->faker->paragraph(2),
            'body'         => implode("\n\n", $this->faker->paragraphs(5)),
            'read_minutes' => $this->faker->numberBetween(2, 12),
        ];
    }
}
