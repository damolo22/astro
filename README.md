# SmoothieSocial: Astro + Laravel Simulation

Welcome to the **SmoothieSocial** simulation! This project demonstrates how to build a scalable, modern web application by decoupling the frontend and backend, using **Astro** for the static UI, **React** for interactive elements, and **Laravel** as the data API.

## 🚀 The Architecture

### 1. The React Interactivity (`Your Contribution`)
We use React for highly interactive, state-driven components:
- **Like Button (`LikeButton.jsx`)**: Instantly updates likes with animations. 
- **Comment Section (`CommentSection.jsx`)**: Fetches initial comments from the API, and allows users to instantly type and post new comments to the feed natively. 

These React components are injected into the static Astro cards using the **Islands Architecture** (`client:visible` and `client:load`), which means the heavy JS *only* loads exactly when needed.

### 2. The Astro Layout and Routes (`Mates' Contribution`)
Astro provides the static, fast-loading HTML/CSS structure handed off by the design team:
- **The Feed (`index.astro`)**: Fetches all smoothies from the API at build-time and maps them to pure HTML `SmoothieCard.astro` elements.
- **Dynamic Profile Pages (`[username].astro`)**: Shows how Astro's dynamic routing creates custom URLs. Clicking an author's name automatically builds a beautiful, dedicated profile page, fetching *only* that user's smoothies from the backend. 
- **The Layout (`SocialLayout.astro`)**: Defines the global CSS, Navigation Bar, and the feed wrapper.

### 3. The API (`laravel-api`)
The Laravel Backend defines our data layer, returning JSON endpoints containing:
- Smoothie title, description, and images.
- The author and their avatar.
- An array of associated comments on the post.

## 📂 Project Structure

- `/Astro-test`: The Astro frontend application containing the UI and React components.
- `/laravel-api`: The Laravel backend API providing the mock social feed data.

## 🛠️ Getting Started

1. **Start the API**:
   Open a terminal, navigate to `/laravel-api`, and run:
   ```bash
   php artisan serve
   ```
   *(This starts the backend on port 8000)*

2. **Start the Frontend**:
   Open a second terminal, navigate to `/Astro-test`, and run:
   ```bash
   npm run dev
   ```
   *(This starts the frontend on port 4321)*

3. **View the App**:
   Open your browser to `http://localhost:4321` to see the SmoothieSocial feed in action!
