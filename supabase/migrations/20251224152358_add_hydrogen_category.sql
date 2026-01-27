/*
  # Add Hydrogen Category

  1. Changes
    - Update the category constraint on articles table to include 'hydrogen'
    - This allows articles to be categorized under hydrogen content
  
  2. Security
    - No changes to RLS policies
*/

-- Drop the existing constraint
ALTER TABLE articles DROP CONSTRAINT IF EXISTS articles_category_check;

-- Add the new constraint with hydrogen included
ALTER TABLE articles ADD CONSTRAINT articles_category_check 
  CHECK (category = ANY (ARRAY['solar'::text, 'wind'::text, 'hydrogen'::text, 'policy'::text, 'markets'::text, 'technology'::text]));