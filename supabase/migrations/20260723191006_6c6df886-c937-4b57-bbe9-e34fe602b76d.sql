CREATE TABLE public.room_designs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  width numeric(4,1) NOT NULL,
  length numeric(4,1) NOT NULL,
  wall_color text NOT NULL,
  items jsonb NOT NULL DEFAULT '[]'::jsonb,
  is_public boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON public.room_designs TO authenticated;
GRANT ALL ON public.room_designs TO service_role;

ALTER TABLE public.room_designs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Owners can manage their own room designs"
ON public.room_designs
FOR ALL
TO authenticated
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Public room designs are readable by anyone"
ON public.room_designs
FOR SELECT
TO anon
USING (is_public = true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER update_room_designs_updated_at
BEFORE UPDATE ON public.room_designs
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();