# 💡 IdeaVault – Startup Idea Sharing Platform

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwindcss)
![Status](https://img.shields.io/badge/Project-Completed-success)
![License](https://img.shields.io/badge/License-MIT-green)

🔗 Live Site: https://ideavault.vercel.app  
🔗 GitHub Repo: https://github.com/abdul-korim-web/ideavault

---

## 📌 Project Overview

**IdeaVault** is a modern startup idea sharing platform built with **Next.js (App Router)**.

Users can:
- 💡 Share startup ideas
- 🔍 Explore trending ideas
- 💬 Comment on ideas
- 🧾 Manage personal ideas
- 👤 View interactions & comments
- 🔐 Secure authentication system

---

## ✨ Features

- 💡 Create & manage startup ideas
- 📄 Dynamic idea details page
- 💬 Comment system (CRUD support)
- 🔐 Authentication (login/register/logout)
- 👤 User profile integration
- 🚀 Trending ideas section
- 🧠 Server Actions + API integration
- ⚡ Optimized caching (revalidateTag)
- 📱 Fully responsive UI (mobile + desktop)
- 🎨 Dark / Light mode support
- 🧭 Active route navigation

---

## 🛠️ Technologies Used

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=nextdotjs)
![React](https://img.shields.io/badge/React-18-blue?logo=react)
![Tailwind](https://img.shields.io/badge/TailwindCSS-3.0-38B2AC?logo=tailwindcss)
![HeroUI](https://img.shields.io/badge/HeroUI-Component%20Library-purple)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?logo=mongodb)
![Better Auth](https://img.shields.io/badge/BetterAuth-Authentication-orange)

---

## 🚀 How to Run This Project

```bash
# Clone repository
git clone https://github.com/abdul-korim-web/ideavault

# Go to project folder
cd ideavault

# Install dependencies
npm install

# Run development server
npm run dev
```
## Open in browser:
```

http://localhost:3000
```
## 📂 Project Structure
```
src/
│
├── action/
│   ├── createProduct.js
│   ├── deleteProductAction.js
│
├── app/
│   ├── layout.js
│   ├── page.js
│   ├── loading.jsx
│   ├── not-found.jsx
│   │
│   ├── add-idea/
│   ├── ideas/
│   │    └── [id]/
│   ├── interactions/
│   ├── my-ideas/
│   ├── login/
│   ├── register/
│   ├── api/auth/[...all]/
│
├── Components/
│   ├── Footer.jsx
│   ├── Navbar.jsx
│   ├── IdeaCard.jsx
│   ├── TrendingIdeas.jsx
│   ├── HomeBannerSlider.jsx
│   ├── HowItWorks.jsx
│   ├── WhyIdeaVault.jsx
│   │
│   └── client/
│       ├── CommentFrom.jsx
│       ├── CommentDelete.jsx
│       ├── CreateProductFrom.jsx
│       ├── UpdateModal.jsx
│       ├── UpdateComment.jsx
│       ├── deleteProduct.jsx
│
├── lib/
│   ├── auth.js
│   ├── auth-client.js
│
├── images/
│   ├── banner-image1.png
│   ├── banner-image2.png
│   ├── banner-image3.png
│
└── proxy.js
 ```
  ## ⚡ Performance Features
  
 - 🚀 Server Components (App Router)
- 🧠 Server Actions for mutations
- 🔄 Smart caching with revalidateTag
- 🖼️ Next/Image optimization
- ⚡ Fast navigation system
- 📦 Minimal client-side JS usage

  ## 🔐 Authentication System

- 🔑 Google login support
- 🛡️ Secure session handling
- 🚫 Protected routes (middleware ready)
- 👤 User-based ownership system
- 🧑‍💼 Profile integration
## 💬 Comment System

- ✍️ Create comments on ideas
- ✏️ Edit own comments
- 🗑️ Delete own comments
- 🖼️ User avatar + timestamp
- 📭 Empty state handling
## 🎨 UI/UX Highlights

- 🌙 Dark / Light mode support
- 🎯 Clean SaaS-style UI design
- 📱 Fully responsive mobile-first layout
- 🧭 Active route navigation highlighting
- ✨ Smooth hover & transition animations
- 🧩 Modular and reusable component structure
## 📜 License & Copyright

This project is **open-source and free to use** under the **MIT License**.  

You can freely:
- ✅ View, modify, and use the source code  
- ✅ Distribute or include it in your own projects  
- ✅ Use it for personal or commercial purposes  

Just make sure to keep the original author credit:

**© 2026 Abdul Korim**

## For collaboration or inquiries, contact:  
📧 Email: abdulkorimwebdeveloper@gmail.com <br> 
👉 GitHub: [abdul-korim-web](https://github.com/abdul-korim-web) <br>
👉 Facebook: [abdul-korim-web](https://www.facebook.com/abdulkorimweb) <br>
👉 LinkedIn: [abdul-korim-web](https://linkedin.com/in/abdul-korim-webdeveloper) <br>