# 🧩 Form Builder (Frontend)

A powerful and flexible Form Builder built with **React** and **Tailwind CSS**. This project allows users to dynamically create, configure, and preview multi-step forms in real-time with drag-and-drop functionality.

## ✨ Features

- 🔧 Drag-and-drop form field creation
- ⚙️ Field configuration panel (label, required, placeholder, etc.)
- 👀 Real-time live preview (Desktop / Tablet / Mobile)
- 📑 Multi-step form support with validation
- 💾 Save/load form templates via `localStorage`
- 📤 Export form schema to JSON
- 🔗 Shareable public form view (filler mode)
- 🔄 Reorder fields using drag handles
- ✅ Supports input types like: text, textarea, number, email, checkbox, date, dropdown, etc.
- ♿ Accessible and responsive design

## 📁 Folder Structure

form-builder/
├── public/
├── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Main views like Builder, Filler, etc.
│ ├── utils/ # Utility functions and constants
│ ├── styles/ # Tailwind CSS setup and base styles
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
