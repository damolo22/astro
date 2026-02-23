<?php

namespace Database\Seeders;

use App\Models\Post;
use Illuminate\Database\Seeder;

class PostSeeder extends Seeder
{
    public function run(): void
    {
        Post::truncate();

        $body1 = <<<'MD'
# Island Architecture

Astro introduced a revolutionary concept called **Island Architecture**. The idea is simple: ship zero JavaScript to the browser unless a specific component actually needs it.

## How it works

A traditional React or Vue app bundles the entire application into one giant JavaScript file. The browser must parse, compile, and execute all of it before the page becomes interactive.

Astro flips this: it renders everything to static HTML at build time. If a component needs client interactivity (a dropdown, a counter, a carousel), it becomes an **island** — an isolated bubble of JavaScript surrounded by static HTML.

## The result

Lighthouse scores in the high 90s out of the box. Pages load instantly because there's no JavaScript to parse. Only the interactive bits hydrate.

## Directives

You control hydration with directives:
- `client:load` — hydrate on page load
- `client:idle` — hydrate when the browser is idle
- `client:visible` — hydrate when the element enters the viewport

This granular control is what makes Astro sites so fast.
MD;

        $body2 = <<<'MD'
# REST APIs with Laravel 11

Laravel makes building APIs feel effortless. With a handful of artisan commands you can scaffold a full CRUD API in minutes.

## Route Model Binding

One of Laravel's most powerful features for APIs is **Route Model Binding**. Instead of manually fetching:

```php
$post = Post::findOrFail($id);
```

You declare the type in the method signature and Laravel injects the resolved model automatically:

```php
public function show(Post $post): JsonResponse
{
    return response()->json(['data' => $post]);
}
```

## API Resources

Transformation layers (`php artisan make:resource PostResource`) let you control exactly what JSON shape your clients receive, keeping your database schema private.

## CORS

Configure `config/cors.php` to allow your frontend origin. Laravel ships with CORS support built in since Laravel 7.
MD;

        $body3 = <<<'MD'
# CSS Custom Properties

CSS Custom Properties (a.k.a. CSS variables) have been around since 2017 but most developers only scratch the surface.

## The Basics

```css
:root {
  --color-accent: #7c3aed;
  --spacing-md: 1rem;
}

.button {
  background: var(--color-accent);
  padding: var(--spacing-md);
}
```

## Component APIs

You can expose a component's internal variables as a public API. Consumers override just that one variable: `.special-card { --card-bg: hotpink; }`.

## Responsive Tokens

Combine with `clamp()` for fluid typography:

```css
:root {
  --text-xl: clamp(1.5rem, 4vw, 2.5rem);
}
```

This replaces dozens of media query breakpoints for font sizes.
MD;

        $body4 = <<<'MD'
# TypeScript in 2026

TypeScript continues to evolve rapidly. Here are some of the most impactful features.

## The `satisfies` Operator

The `satisfies` operator validates that a value matches a type without changing the inferred type:

```ts
const palette = {
  red: [255, 0, 0],
  green: '#00ff00',
} satisfies Record<string, string | number[]>;

// palette.red is still number[], not string | number[]
```

## Using Declarations

Inspired by C#'s `using`, TypeScript now supports explicit resource management:

```ts
{
  using db = getDatabase();
  // db.dispose() is called automatically at block exit
}
```

## Template Literal Types

Build string types programmatically for powerful type-level string manipulation and type-safe event names, CSS properties, and more.
MD;

        $body5 = <<<'MD'
# Deploying with Docker

Docker Compose makes running multi-service apps as simple as `docker compose up`.

## Project Structure

```
project/
├── astro-frontend/
│   └── Dockerfile
├── laravel-api/
│   └── Dockerfile
└── docker-compose.yml
```

## Astro Dockerfile

```dockerfile
FROM node:20-alpine AS builder
WORKDIR /app
COPY . .
RUN npm ci && npm run build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
```

## Nginx Reverse Proxy

Point both services behind a single Nginx proxy so the frontend calls `/api/*` and the proxy routes to the Laravel container — no CORS issues in production.
MD;

        $body6 = <<<'MD'
# Content Collections

Content Collections are Astro's answer to the question: "how do I manage a blog without a CMS?"

## Defining a Collection

```ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title:       z.string(),
    author:      z.string(),
    publishedAt: z.date(),
    tags:        z.array(z.string()),
  }),
});

export const collections = { blog };
```

## Querying

```ts
import { getCollection } from 'astro:content';
const posts = await getCollection('blog');
```

Posts are fully typed — your editor autocompletes every frontmatter field and TypeScript catches mismatches at build time.

## MDX Support

Content Collections also work with `.mdx`, enabling you to embed Astro/React/Vue components directly inside your Markdown articles.
MD;

        $posts = [
            [
                'title'        => 'Getting Started with Astro: The Island Architecture',
                'author'       => 'María García',
                'category'     => 'Astro',
                'cover_emoji'  => '🚀',
                'excerpt'      => 'Learn how Astro ships zero JavaScript by default and only hydrates the components that truly need interactivity.',
                'body'         => $body1,
                'read_minutes' => 5,
            ],
            [
                'title'        => 'Building REST APIs with Laravel 11',
                'author'       => 'David Llorente',
                'category'     => 'Laravel',
                'cover_emoji'  => '⚡',
                'excerpt'      => 'A complete walkthrough of building a modern JSON API with Laravel 11, API resources, and route model binding.',
                'body'         => $body2,
                'read_minutes' => 7,
            ],
            [
                'title'        => 'CSS Custom Properties: The Modern Way',
                'author'       => 'Sophie Martin',
                'category'     => 'CSS',
                'cover_emoji'  => '🎨',
                'excerpt'      => "CSS variables aren't just for theming. Learn advanced patterns like responsive tokens, component APIs, and runtime overrides.",
                'body'         => $body3,
                'read_minutes' => 6,
            ],
            [
                'title'        => "TypeScript in 2026: What's New",
                'author'       => 'James Wilson',
                'category'     => 'JavaScript',
                'cover_emoji'  => '🔷',
                'excerpt'      => 'A tour of the most impactful TypeScript features and how they change the way you write front-end and back-end code.',
                'body'         => $body4,
                'read_minutes' => 8,
            ],
            [
                'title'        => 'Deploying Astro + Laravel with Docker',
                'author'       => 'Ana Rodríguez',
                'category'     => 'DevOps',
                'cover_emoji'  => '🐳',
                'excerpt'      => 'Step-by-step guide to containerizing your Astro frontend and Laravel API, and orchestrating them with Docker Compose.',
                'body'         => $body5,
                'read_minutes' => 10,
            ],
            [
                'title'        => 'Astro Content Collections: Type-Safe Markdown',
                'author'       => 'María García',
                'category'     => 'Astro',
                'cover_emoji'  => '📚',
                'excerpt'      => 'Content Collections give you a Zod-validated, fully-typed API for all your Markdown and MDX files. No more schema mismatches.',
                'body'         => $body6,
                'read_minutes' => 6,
            ],
        ];

        foreach ($posts as $post) {
            Post::create($post);
        }
    }
}
