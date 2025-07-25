# Sprint 2.0: Assignments Page Development

**Date: (25th July 2025 to TBD)**
**Duration: TBD**

## Scope/Context:

- The main focus at this point is to convert the current live mock-up assignments page into a dynamic and functioning assignments page within this Next.js project.
- This scope doesn't include the other miscellaneous features like the Group Chat as seen in the live mock-up.

---

# Sprint 2.1: Laying the Foundation, Doing Things Right From the Start

## What is Accomplished Today?

### Creating necessary page layout & sections

- Added `/assignments/page.tsx`
- Added `/components/ui/sections/assignments-listing.tsx`
- Added `/components/ui/sections/assignment-details.tsx`
- Added `/components/ui/sections/milestones-listing.tsx`
- Added `/components/ui/sections/feedbacks-listing.tsx`

### Setting up MobX Store (`AceItStore`)

- Added `/stores/aceit-store.ts`
- Added `/src/app/providers.tsx`
- Updated `layout.tsx` with the `<StoreProvider>`.

## Observations, Known Issues and Lessons

- When using MobX in Next.js project, the store has to be initialized as a singleton.

## Dev Logs:

- It is tempting to want to set up all the individual reusable components right now.
- But wisdom and experiences reminds me to pause, and focus on setting up the store state objects.
- Right now, my goal is to do everything right, and do it well once. I've already learned that it is possible while working on the PageBuilder project, so this is something I can do again.
- For the first time in a long time, I feel like I have finally embraced my own technical genius. I gave it/him a voice and recognized him for everything that he has been doing. But more importantly, I told him that I see him now. I really see him now.