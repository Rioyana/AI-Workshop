# Project state
Last updated: 2026-09-23

## Works
- Next.js site (App Router, TypeScript, plain CSS) is deployed on Vercel.
- A Supabase project exists and is linked to the repo.
- GitHub repo: Rioyana/AI-Workshop.

## Broken or flaky
- Nothing known to be broken.
- Not yet checked: whether the Supabase environment variables are set in Vercel.

## Environment notes
- The site does not use Supabase yet. No tables, no auth.
- The public site address is not recorded yet. https://vercel.com/rio-yanagisawa is the Vercel dashboard, not the live site. Find the address ending in .vercel.app under the project's Domains in Vercel and add it here.
- Assumed, not confirmed: merging to main triggers a new Vercel deploy.
- Decision pending: turn off email confirmation in Supabase Auth so testers can sign up with fake addresses. Recommended: off.

## Next session
- Record the live site address in this file.
- Decide on email confirmation.
- Start Slice 1: sign up and log in.
