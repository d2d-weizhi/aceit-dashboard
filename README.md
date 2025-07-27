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

## Development Manifesto

### 1. Build It "Slow"

- Ever since my recent freelance work on the [Satori PageBuilder](https://dev.to/d2d_weizhi/from-user-to-builder-how-i-built-a-pagebuilder-in-5-weeks-2oif), I have discovered that by being deliberate, precise may seem slow at first, but over time, I also discovered that I have ZERO reworks. And in many cases, I only have to do something just once.
- Doing something slow also means taking the time to understand the problem, and then breaking it down into smaller parts and tackling them with absolutely clarity.

> "Building something fast doesn’t make you the best. Building it once and building it well almost guarantees you’ll be faster than the next guy, who’s stuck redoing their work again and again to get it right."

### 2. Patterns are your friend, but not your prison.

- What is amazing about having worked on the PageBuilder project before this is that I now have a proven, successful pattern I can replicate.
- With a proven working pattern for my dev workflow, I don't have to crack my head on trying to figure something out from scratch.
- Sure, in some aspects of this showcase-worthy project, I may need to adopt a slightly different pattern & workflow to suit the needs of this project (or whatever it is I am working on at that present moment).
- Most important point: See the patterns and don't be afraid to stick with what works best.

### 3. Reflect Often (Why I Actually Maintain a Meticulous Dev Log)

- Now that I have experienced just how powerful and invaluable these dev logs are, I can't never go back to the way things were before.
- It might seem like overkill for some folks, reading and seeing all of this details on my thought-processes and strategies, ideation and occasional rantings.
- But for me, this is a roadmap, maybe even a track record, a history of everything that I have done. Recorded in real-time.
- It also helps to keep me honest.

## Development Philosophy

This project emphasizes **deliberate development** - building systematically with attention to:

- 🎨 **Design Fidelity**: Maintaining approved UX patterns
- 🏗️ **Scalable Architecture**: Component reusability and maintainability  
- 🔍 **Type Safety**: Comprehensive TypeScript coverage
- ⚡ **Performance**: Optimized rendering and data fetching
- 📚 **Documentation**: Clear code organization and commenting

## Current Sprint

**Sprint 2.3: Assignments Module (Dynamic UI Magic Starts Today)** *(In-Progress)*
- ⏳ Integrate the Assignments Tags retrieval.
- ⏳ How to retrieve data once on loading.
- ⏳ Begin building out the dynamic UI sections.
  - Copy the UI code from mock-up.
  - Ensure each component has the necessary props interfaces.
  - Add in the mapping.
- ⏳ Ensure proper JSDocs have been added and are clearly written.

## Getting Started

```bash
# Clone the repository
git clone https://github.com/d2d-weizhi/aceit-dashboard
```
