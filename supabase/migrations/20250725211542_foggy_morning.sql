/*
  # Remove category constraint from articles table

  1. Changes
    - Drop the existing CHECK constraint on the category column
    - This allows any string value to be used as a category when creating articles

  2. Purpose
    - Enable flexible category creation without predefined restrictions
    - Allow dynamic category assignment based on content needs
*/

-- Remove the category constraint from articles table
ALTER TABLE articles DROP CONSTRAINT IF EXISTS articles_category_check;