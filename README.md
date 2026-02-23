# Astro + Laravel API Integration

Welcome to the **Astro + Laravel API Integration** project! This repository demonstrates how to build a modern, fast web application by decoupling the frontend and backend, using **Astro** for the user interface and **Laravel** as a RESTful API.

## 🚀 What is Astro?

Astro is a next-generation web framework optimized for speed. Its core philosophy revolves around shipping **Zero JavaScript by default**. 

### Key Functionalities

- **Component-Based Architecture**: Build UI components using `.astro` files, or bring your favorite frameworks like React, Vue, or Svelte.
- **Islands Architecture**: Only load JavaScript for specific interactive components (Islands) while leaving the rest of the page as fast, static HTML.
- **File-Based Routing**: Simply drop files into `src/pages/` to automatically generate routes.
- **Props & Slots**: Highly composeable UI elements. Pass data seamlessly and inject HTML into component slots.
- **Performance First**: Since Astro renders HTML on the server, the site loads instantly.

## 🔗 How It Connects to the API

This project uses a decoupled architecture:

### 1. The Backend (`laravel-api`)
A robust backend built with Laravel exposing a REST API. It handles the database, business logic, and routing for data. 
- **Key Endpoints**: 
  - `GET /api/posts`: Fetches a list of all available blog posts.
  - `GET /api/posts/{post}`: Fetches the details of a specific blog post.

### 2. The Frontend (`Astro-test`)
The Astro frontend consumes this API. 
Because Astro can run code at build time (or via Server-Side Rendering), it fetches data from the Laravel API endpoints directly in the `---` frontmatter of the `.astro` files. This means:
- **Fast Build Times**: Astro fetches the JSON payload from Laravel and bakes it into the static HTML.
- **Security**: The API communication happens server-to-server. Sensitive API keys or backend URLs aren't exposed to the client.

## 📂 Project Structure

- `/Astro-test`: The Astro frontend application.
- `/laravel-api`: The Laravel backend API application.

## 🛠️ Getting Started

1. Set up and run the Laravel API backend first (check `laravel-api` for its environment and setup instructions).
2. Set up and run the Astro frontend dev server (`Astro-test`).
3. Access the Astro site to see the API integration in action!
