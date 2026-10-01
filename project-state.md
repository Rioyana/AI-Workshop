# Project state
Last updated: 2026-10-01

## Works
- Next.js site (App Router, TypeScript, plain CSS) is deployed on Vercel.
- A Supabase project exists and is linked to the repo.
- GitHub repo: Rioyana/AI-Workshop.

## In review
- Slice 1 (sign up and log in): built in the pull request "Slice 1: sign up and log in". Not merged yet. Check the done-criteria on the preview link before merging.

## Broken or flaky
- Nothing known to be broken.
- `npm audit` reports a critical security advisory in next 16.3.5 (in next/og image generation, which this site does not use). A fix exists in next 16.3.8. Not fixed yet; needs its own small pull request.

## Environment notes
- Slice 1 adds two dependencies: @supabase/supabase-js and @supabase/ssr (approved by the owner).
- NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY are set in Vercel (owner confirmed). Not confirmed: whether they are enabled for Preview as well as Production.
- Email confirmation is turned off in Supabase Auth, so new accounts can sign in straight away.
- No database tables yet. Auth only.
- The public site address is not recorded yet. https://vercel.com/rio-yanagisawa is the Vercel dashboard, not the live site. Find the address ending in .vercel.app under the project's Domains in Vercel and add it here.
- Assumed, not confirmed: merging to main triggers a new Vercel deploy.

## Next session
- Check Slice 1 on the preview link, then merge.
- Record the live site address in this file.
- Start Slice 2: tagged tasks that stay put.
