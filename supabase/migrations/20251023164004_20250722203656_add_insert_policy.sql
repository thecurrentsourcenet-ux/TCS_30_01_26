/*
  # Add insert policy for articles

  1. Security
    - Add policy for authenticated users to insert articles
*/

-- Drop existing policy if it exists
DROP POLICY IF EXISTS "Authenticated users can insert articles" ON articles;

-- Articles insert policy
CREATE POLICY "Authenticated users can insert articles"
  ON articles
  FOR INSERT
  TO authenticated
  WITH CHECK (true);