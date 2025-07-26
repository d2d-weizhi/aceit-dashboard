# Sprint 2.0: Assignments Page Development

**Date: (25th July 2025 to TBD)**

**Duration: TBD**

## Scope/Context:

- The main focus at this point is to convert the current live mock-up assignments page into a dynamic and functioning assignments page within this Next.js project.
- This scope doesn't include the other miscellaneous features like the Group Chat as seen in the live mock-up.

---

# Sprint 2.2: Assignments Module, Update DB, State Management

## Scope/Context:

- I want to focus on getting the Assignments page of AceIt! Dashboard implemented.
- I want to add in the missing `tags` table and then `assignment_tags` and `task_tags`.
- Populate the tables with relevant data.
- Start building those state interfaces and the state managers.
- If there is time today, link up the UI with Supabase backend.

## What is Accomplished Today?

- ✅ Added `tags`, `assignment_tags` and `task_tags` tables.
- ✅ Populated the `tags` and `assignment_tags` tables with sample data.

## Observations, Known Issues and Lessons

## Dev Logs

- Updated the `max_points` column in `assignments` table to `max_credits`.
- Removed the `status` column from `assignments` because actual progress status will be tracked inside `student_assignments`.

### Key Dev Decisions:

- **Data Modeling:**
  - Decided to model the data as interface that contains arrays of other interfaces.
  - This allows us to opt out on some fields that may be unnecessary at runtime, this improving performance slightly.
  - More testing will reveal if we can improve this further.
  - For example, instead of having a `IAssignmentsTags` interface, which feels redundant, we just add an array of `tags: ITag[]` to the 
    `IAssignment` interface.
  - Another example: I have chosen to add `tasks: ITask[]` to `IStudentAssignment` interface because it can be associated to the assignment and student through object association, i.e. student has many assignments, and each assignment has many tasks.

---

# Sprint 2.1: Laying the Foundation, Doing Things Right From the Start

## Scope/Context:

- Start the project slow, taking the lessons from PageBuilder and do it right.
- Focus on the most essential files and code and my way outwards to the other related code.

## What is Accomplished Today?

### Creating necessary page layout & sections

- ✅ Added `/assignments/page.tsx`
- ✅ Added `/components/ui/sections/assignments-listing.tsx`
- ✅ Added `/components/ui/sections/assignment-details.tsx`
- ✅ Added `/components/ui/sections/milestones-listing.tsx`
- ✅ Added `/components/ui/sections/feedbacks-listing.tsx`

### Setting up MobX Store (`AceItStore`)

- ✅ Added `/stores/aceit-store.ts`
- ✅ Added `/src/app/providers.tsx`
- ✅ Updated `layout.tsx` with the `<StoreProvider>`.

## Observations, Known Issues and Lessons

- When using MobX in Next.js project, the store has to be initialized as a singleton.

## Dev Logs:

- It is tempting to want to set up all the individual reusable components right now.
- But wisdom and experiences reminds me to pause, and focus on setting up the store state objects.
- Right now, my goal is to do everything right, and do it well once. I've already learned that it is possible while working on the PageBuilder project, so this is something I can do again.
- For the first time in a long time, I feel like I have finally embraced my own technical genius. I gave it/him a voice and recognized him for everything that he has been doing. But more importantly, I told him that I see him now. I really see him now.