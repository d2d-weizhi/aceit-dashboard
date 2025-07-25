# AceIt - Student Assignment Dashboard

> **🚧 Work in Progress** - A dynamic student assignment management system showcasing modern full-stack development practices.

## Project Overview

AceIt is an interactive student assignment dashboard that transforms a static HTML prototype into a fully dynamic web application. This project demonstrates the evolution from concept to production-ready software, showcasing both technical depth and practical user experience design.

**What makes this more than just a mockup:**
- 🎯 **Real-world Application**: Based on actual student workflow requirements and lecturer feedback
- 🏗️ **Production Architecture**: Scalable component structure with proper state management
- 🔄 **Dynamic Data Flow**: Live filtering, sorting, and real-time updates
- 📱 **Responsive Design**: Mobile-first approach with seamless cross-device experience
- 🛡️ **Type Safety**: Full TypeScript implementation with strict typing
- 🚀 **Performance Optimized**: Modern React patterns with efficient re-rendering

## Showcase Technology Stack

| Technology | Purpose | Why This Choice |
|------------|---------|-----------------|
| **Next.js 14** | React Framework | App Router, SSR capabilities, optimal performance |
| **React 19** | UI Library | Latest features, concurrent rendering, improved UX |
| **TypeScript** | Type System | Runtime safety, better DX, maintainable codebase |
| **Tailwind CSS** | Styling Framework | Rapid prototyping, consistent design system |
| **Supabase** | Backend-as-a-Service | Real-time database, authentication, edge functions |
| **MobX** | State Management | Lightweight, reactive state with proven track record |
| **Vercel** | Deployment Platform | Seamless Next.js integration, edge optimization |

## Features in Development

### 🎯 Core Functionality
- [ ] **Assignment Management**: View, filter, and track assignment progress
- [ ] **Real-time Updates**: Live status changes and notifications
- [ ] **Module Integration**: Organized by academic modules and courses
- [ ] **Progress Tracking**: Visual indicators for assignment completion
- [ ] **Deadline Management**: Smart sorting and priority highlighting

### 🔧 Technical Features
- [ ] **Dynamic Filtering**: Multi-criteria assignment filtering
- [ ] **Advanced Search**: Full-text search across assignments and modules
- [ ] **Responsive Layout**: Mobile-optimized interface
- [ ] **Data Persistence**: Supabase integration for real data
- [ ] **Authentication**: Student login and profile management
- [ ] **Performance**: Optimized loading and caching strategies

## Project Structure

```
src/
├── app/
│   ├── assignments/         # Assignment dashboard pages
│   └── layout.tsx          # Root layout with providers
├── components/ui/
│   ├── sections/           # Page-level components
│   │   ├── assignments-listing.tsx
│   │   ├── milestones-listing.tsx
│   │   └── feedbacks-listing.tsx
│   └── shared/             # Reusable UI components
│       ├── assignment-card.tsx
│       ├── milestone-item.tsx
│       └── feedback-item.tsx
├── store/                  # MobX state management
│   ├── aceItStore.ts
│   ├── assignments-manager.ts
│   └── state-interfaces.ts
└── utils/
    └── supabase/           # Database configuration
```

## Development Philosophy

This project emphasizes **deliberate development** - building systematically with attention to:

- 🎨 **Design Fidelity**: Maintaining approved UX patterns
- 🏗️ **Scalable Architecture**: Component reusability and maintainability  
- 🔍 **Type Safety**: Comprehensive TypeScript coverage
- ⚡ **Performance**: Optimized rendering and data fetching
- 📚 **Documentation**: Clear code organization and commenting

## Current Sprint

**Sprint 1.0: Foundation & Architecture** *(In Progress)*
- ✅ Project setup and configuration
- ✅ Component architecture planning
- ✅ Database schema design
- 🔄 MobX store implementation
- 🔄 Core UI components development

## Getting Started

```bash
# Clone the repository
git clone https://github.com/d2d-weizhi/aceit-dashboard
```