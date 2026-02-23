# SmoothieSocial: Astro + Laravel Simulation

Welcome to the **SmoothieSocial** simulation! This project demonstrates how to build a scalable, modern web application by decoupling the frontend and backend, using **Astro** for the static UI, **React** for interactive elements, and **Laravel** as the data API.

## 🚀 The Architecture

This project is a small-scale simulation of a real-world team workflow:
1. **The API (`laravel-api`)**: The data layer. It provides the backend endpoints (e.g., fetching a list of smoothie posts).
2. **The Layout (`Mates' Contribution`)**: The HTML/CSS structure built with Astro components (`SocialLayout.astro`, `SmoothieCard.astro`). This represents the static, fast-loading UI handed off by a design team.
3. **The Interactivity (`Your Contribution`)**: The highly interactive React components (like `LikeButton.jsx`) injected into the static Astro cards using the **Islands Architecture**.

### Why This Stack?

- **Astro (The 90%)**: Astro renders the HTML on the server. The feed, the images, and the text are shipped to the browser with **Zero JavaScript**. This makes the initial page load blazing fast.
- **React (The 10%)**: For complex interactions (like a Like button that updates state immediately and animates), we drop in a React component (`<LikeButton client:visible />`). The JS for this component *only* loads when the user scrolls it into view.

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
