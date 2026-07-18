-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Contacts table for contact form submissions
create table if not exists public.contacts (
  id uuid default uuid_generate_v4() primary key,
  full_name text not null,
  email text not null,
  subject text not null,
  message text not null,
  consent boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Projects table for portfolio/projects
create table if not exists public.projects (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  category text not null,
  description text not null,
  image_url text,
  stat text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Testimonials table
create table if not exists public.testimonials (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  role text not null,
  company text not null,
  quote text not null,
  avatar_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Metrics table for success metrics
create table if not exists public.metrics (
  id uuid default uuid_generate_v4() primary key,
  value text not null,
  label text not null,
  sub text,
  sort_order integer default 0
);

-- Services table for services offered
create table if not exists public.services (
  id uuid default uuid_generate_v4() primary key,
  title text not null,
  description text not null,
  icon text,
  sort_order integer default 0
);

-- Row Level Security policies
alter table public.contacts enable row level security;
alter table public.projects enable row level security;
alter table public.testimonials enable row level security;
alter table public.metrics enable row level security;
alter table public.services enable row level security;

-- Contacts: allow public insert, authenticated read
create policy "Allow public insert contacts" on public.contacts for insert to public with check (true);
create policy "Allow authenticated read contacts" on public.contacts for select to authenticated using (true);

-- Projects: public read
create policy "Allow public read projects" on public.projects for select to public using (true);

-- Testimonials: public read
create policy "Allow public read testimonials" on public.testimonials for select to public using (true);

-- Metrics: public read
create policy "Allow public read metrics" on public.metrics for select to public using (true);

-- Services: public read
create policy "Allow public read services" on public.services for select to public using (true);
