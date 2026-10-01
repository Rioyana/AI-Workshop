# Project state
Last updated: 2026-10-01

## Works
- Next.js site (App Router, TypeScript, plain CSS) deploys on Vercel. Fixed 2026-10-01: every deploy since the Next.js site was added had failed because the Vercel project's Framework Preset was "Other". It is now set to Next.js, and the Slice 1 preview builds.
- A Supabase project exists and is linked to the repo.
- GitHub repo: Rioyana/AI-Workshop.
- On the live site, a person can create an account with an email address and a password.
- They can log in with that email and password, and they see "Signed in as" followed by their email.
- If they type the wrong password, they see an error message and stay on the login form.
- They can log out. After logging out, going straight to the tasks page sends them back to the login form.

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
- Live site address: https://ai-workshop-rio-yanagisawa.vercel.app (it shows the old README-only version until the next successful deploy of main).
- Preview links (one per pull request) are behind Vercel Authentication: you must be logged in to Vercel to open them.
- Assumed, not confirmed: merging to main triggers a new Vercel deploy.

## Next session
- Check Slice 1 on the preview link, then merge.
- Start Slice 2: tagged tasks that stay put.
