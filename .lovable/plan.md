# Save & Share Room Designs

## What we're building
Let users sign in, save multiple room designs to the cloud, and share any design via a public link that opens a read-only view.

## Database
Create a single `room_designs` table:
- `id` (uuid), `user_id` (references auth.users), `name` (text), `slug` (unique, for share links)
- `width`, `length`, `wall_color` (room settings)
- `items` (JSONB array of placed furniture)
- `is_public` (boolean, default false)
- `created_at`, `updated_at`

RLS policies:
- Owners can CRUD their own designs.
- Anyone can read designs where `is_public = true` (for share links).

## Auth setup
- Enable email/password + Google sign-in via Lovable Cloud.
- No profiles table needed; use auth user email/ID only.
- Add `/auth` route with sign-in/sign-up forms and Google button.
- Add `/_authenticated` layout gate so saved-design pages require login.

## Server functions
- `saveDesign` — authenticated: upsert a design with name/slug/public flag.
- `listMyDesigns` — authenticated: list current user's designs.
- `loadDesign` — public or owner: fetch by slug or ID.
- `deleteDesign` — authenticated: delete own design.
- `togglePublic` — authenticated: flip `is_public` and return the share URL.

## UI changes
- Header: add sign-in / account menu (email + sign-out).
- Step 3 summary: add "Save design" button and "Share" button that copies the public link.
- New `/_authenticated/my-designs` page: list, rename, delete, and open saved designs.
- New public `/share/$slug` route: read-only render of a shared design.

## Share flow
- Public share links look like `/share/<slug>`.
- Only designs with `is_public = true` are viewable; private designs show a 404-style message.

## Technical notes
- Use `createServerFn` for all backend logic.
- Public share route uses a server publishable client with a narrow `TO anon` SELECT policy.
- Slugs generated from a short random string, not the design name, to keep URLs stable and unguessable-ish.

## Out of scope (can add later)
- Collaborators / permissions beyond public/private.
- Version history.
- Thumbnail images for shared previews.