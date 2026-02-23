# How Astro Works: The Folder System

Astro is incredibly intuitive because **your folders dictate your website**. Instead of writing complex JavaScript to control what page the user sees, you simply build a folder.

This document easily explains what goes in each folder and how to change what is displayed on the screen!

---

## 1. The `src/pages/` Folder

This is the most important folder in Astro. **It controls exactly what is displayed.**
Every file you put in this directory automatically becomes a new page on your website! 

* **`index.astro`**: This is your homepage. If you visit your site at `http://localhost:4321/`, Astro renders whatever is inside this file.
  * **How to change the homepage:** Open `index.astro` and change the HTML/Components inside it!
* **`about.astro`**: This will create an About page. If you visit `http://localhost:4321/about`, you'll see it.
* **`contact.md`**: Yes, even Markdown files in `src/pages/` automatically become pages (`http://localhost:4321/contact`)!

### Dynamic Routing (e.g., `/blog/[id].astro`)
If a file has brackets `[]` in the name, it's dynamic. 
- You don't have to create a new file for every single blog post. 
- You create ONE file called `[id].astro`. 
- Astro will use that single file to display `/blog/1`, `/blog/2`, `/blog/100`, etc. The logic inside tells Astro which post to grab from your API!

---

## 2. The `src/components/` Folder

This is where you store your **reusable UI building blocks**.

Instead of writing the same HTML 10 times, you write it once here.
- Example: `SmoothieCard.astro`, `Navbar.astro`, `Footer.astro`.
- These files are *not* accessible via a URL. You will never visit `http://localhost:4321/SmoothieCard`.
- Instead, you **import** these components into files in your `src/pages/` folder to piece together a full webpage.

This folder is also where you put your React components, like `LikeButton.jsx`.

---

## 3. The `src/layouts/` Folder

A Layout is just a special type of component used to wrap pages.

Usually, every page on a website shares the exact same `<head>`, navigation bar, and footer. 
Instead of copying and pasting the Navbar into `index.astro`, `about.astro`, and `contact.astro`, you create a Layout (like `SocialLayout.astro`).
- You define your global CSS here.
- You place a special `<slot />` tag where the unique page content should go.
- Then, in your pages, you just wrap everything in your Layout component.

---

## Summary

* Want to build the **structure** surrounding the page? Edit `src/layouts/`.
* Want to build a small **reusable UI element**? Edit `src/components/`.
* Want to create a **new page** or edit what the user actually **sees**? Edit `src/pages/`.
