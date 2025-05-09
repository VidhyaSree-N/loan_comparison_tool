# React vs. Hotwire – Migration Comparison Guide

This project was created as a hands-on effort to deeply understand how a React frontend maps to Hotwire + Stimulus in a Ruby on Rails application. As part of my journey to explore full-stack Rails development and simplify modern frontend stacks, I built this to compare both approaches side-by-side — not in theory, but in real working code.

---

## 🎯 Purpose

The goal is to offer developers a **clear visual and code-level comparison** between building an app using React versus Hotwire. It's not just about syntax — it’s about mindset, architecture, and developer experience.

---

## 🏗️ Project Structure

- **Backend**: Ruby on Rails (monolith)  
  - Exposes an API (`/api/loan_offers`) to return mock loan offer data  
  - Handles server-side views and Hotwire interaction

- **Frontend A**: React (Vite + Tailwind)  
  - Form with state hooks  
  - Fetches offers via API and renders results

- **Frontend B**: Hotwire + Stimulus (Rails view + JS controller)  
  - Uses Turbo + Stimulus for DOM updates  
  - Submits form, fetches API, updates view

- **Static Guide Page**: A standalone HTML page comparing React and Hotwire side-by-side  
  - Split layout  
  - Code examples  
  - Tooling, routing, state, rendering, interactivity

---

## 🧠 What You'll Learn

- How to migrate forms, routes, components, and logic from React to Hotwire  
- Key differences in rendering, tooling, and state management  
- When to use client-side rendering vs. server-side HTML  
- How Stimulus replaces JS-based interactivity

---

## 🔗 Live Comparison Page

Hosted via GitHub Pages:  
📄 [React vs. Hotwire Guide](https://yourusername.github.io/your-repo-name/)

---

## 📦 Tech Stack

- Ruby on Rails 7  
- TailwindCSS (via CDN and build tools)  
- React + Vite frontend  
- Stimulus controllers  
- Turbo + importmap  
- GitHub Pages for static deployment

---

## 👤 Author

Built by **Vidhya Sree**  
[🔗 GitHub](https://github.com/VidhyaSree-N) · [🔗 LinkedIn](https://linkedin.com/in/vidhyasree)

This project was part of my effort to build confidence in Hotwire, deepen my understanding of Rails 7 features, and prepare for roles involving full-stack development.

---

## 💡 How to Use This Repo

```bash
# Setup Rails backend
bundle install
rails db:setup
rails server

# Run React frontend
cd react-loan-ui
npm install
npm run dev

# Open the static comparison
open docs/index.html or visit GitHub Pages
