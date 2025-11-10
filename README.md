# 📋 Listium - Project Management Application

A full-stack project management application built with **React**, **Firebase**, and **Firestore**. This application was made to learn React basic development skills including state management, component composition, authentication, and real-time database integration.

## 🎯 Overview

Listium is a web-based project management tool that allows users to create, organize, and manage projects with custom tags.

**Live Demo:** [listium.web.app](https://listium.web.app)

## 📦 Project Structure

```
listium/
├── frontend/                    # React application
│   ├── public/
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── common/         # Header, Footer
│   │   │   ├── projects/       # Project management components
│   │   │   └── tags/           # Tag management components
│   │   ├── context/            # Context API state management
│   │   ├── hooks/              # Custom React hooks
│   │   ├── pages/              # Page components (Login, Dashboard, etc.)
│   │   ├── styles/             # CSS stylesheets
│   │   ├── firebase/           # Firebase configuration
│   │   └── App.js              # Main app component
│   └── package.json
├── backend/                    # Firebase configuration
│   ├── firestore.rules         # Database security rules
│   ├── storage.rules           # Storage security rules
│   └── functions/              # Cloud functions (if needed)
└── firebase.json               # Firebase project config
```
