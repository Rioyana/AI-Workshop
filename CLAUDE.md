# CLAUDE.md

## Stack
- Next.js with the App Router, TypeScript, plain CSS
- Supabase for sign-in and the database
- Hosted on Vercel; code on GitHub at Rioyana/AI-Workshop
- The owner has no coding background. Explain every change in plain language, defining technical terms the first time they appear.

## Commands
- `npm install` installs dependencies.
- `npm run dev` runs the site locally at http://localhost:3000
- `npm run build` checks the site builds. Run it before opening any pull request.
- If package.json shows different scripts, or the repo uses a lockfile other than package-lock.json, use those instead and say so.

## Never
- Add a dependency without asking first.
- Edit .env, .env.local, or any environment variable. If one is needed, say which variable and which file, and let the owner add it.
- Change auth configuration without saying what is changing and why.
- Create new top-level folders.
- Put real personal data in the app, seed data, or tests. Fake names and fake content only.
- Put passwords, API keys, or connection strings in code, commits, or chat.
- Work on anything outside the ACTIVE slice.

## Conventions
- Pages and routes go in the app folder the repo already uses.
- Styling is plain CSS. No Tailwind or CSS libraries.
- The six skill tags are fixed: Listening, Speaking, Reading, Writing, Vocabulary, Grammar.
- Keep changes small. One slice or less per pull request.
- Before committing, show the owner what changed and why, in plain language.
- When something ships, breaks, or gets ruled out, update project-state.md.

## Current focus
See roadmap.md. Work only on the slice marked ACTIVE.
