alter table if exists public.room_designs
add column if not exists openings jsonb not null default '[]'::jsonb;
