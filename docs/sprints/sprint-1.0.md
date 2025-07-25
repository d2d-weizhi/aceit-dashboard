# Sprint 1.0: Setting Up New Showcase Project

**(23rd July 2025, Wednesday)**

## Context/Scope

Initiated development of AceIt - a student assignment dashboard showcase project to demonstrate full-stack development capabilities. The goal is to transform a thoroughly tested static HTML mockup (approved by lecturers) into a dynamic Next.js application with Supabase integration. This project serves as both a portfolio piece and practical application of lessons learned from previous PageBuilder project.

## What was Accomplished?

### Project Foundation

- ✅ Created new Next.js project structure with TypeScript
- ✅ Integrated Supabase for future database operations
- ✅ Set up development environment with proper tooling
- ✅ Established Git repository and version control workflow

### Architecture Planning

- ✅ Analyzed existing HTML mockup for component breakdown
- ✅ Designed component hierarchy:
  - `/assignments/page.tsx` - Main page layout
  - `sections/` - Page-level sections (assignments-listing, milestones-listing, feedbacks-listing)
  - `shared/` - Reusable components (assignment-card, milestone-item, feedback-item)
- ✅ Planned Supabase client integration strategy (client.ts focus for Phase 1)

### Database Design

- ✅ Created SQL query foundation for assignment data:

  ```sql
  SELECT a.assignment_id, a.title, sa.status, sa.grade,
        m.module_code, m.module_title, a.description, 
        a.created_at, a.due_date, a.is_group
  FROM assignments AS "a"
  INNER JOIN student_assignments AS "sa" ON a.assignment_id = sa.assignment_id
  INNER JOIN modules AS "m" ON m.module_id = a.module_id
  WHERE sa.student_id = 'std_001'
  ORDER BY sa.status;
  ```
### Initial Setup Files

- ✅ Added Supabase configuration files (.env.local, utils/supabase/)
- ✅ Established project structure and naming conventions
- ✅ Set up development workflow with proper TypeScript strictness


## Observations/Lessons

### Architecture Insights

- **Component-First Approach:** Breaking down the mockup into logical components before coding prevented over-engineering
- **Database-Driven Design:** Starting with SQL query design helped clarify exactly what data relationships were needed
- **Phase-Based Development:** Deciding to focus on client-side demo first (no server.ts/middleware.ts) simplified initial scope

### Development Workflow

- **Mockup Fidelity:** Having lecturer-approved mockup provides clear design constraints and prevents scope creep
- **Incremental Setup:** Taking time to properly configure Supabase and project structure upfront pays dividends later


### Technical Decisions

- **Supabase Three-Client Pattern:** Understanding client.ts vs server.ts vs middleware.ts early prevents architectural mistakes
- **TypeScript Strictness:** Maintaining strong typing from project start creates better development experience