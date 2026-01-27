/*
  # Create news aggregator schema

  1. New Tables
    - `articles`
      - `id` (uuid, primary key)
      - `title` (text)
      - `content` (text)
      - `summary` (text)
      - `source_url` (text)
      - `image_url` (text)
      - `category` (text)
      - `region` (text)
      - `published_at` (timestamptz)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `user_preferences`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `categories` (text[])
      - `regions` (text[])
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

    - `comments`
      - `id` (uuid, primary key)
      - `article_id` (uuid, references articles)
      - `user_id` (uuid, references profiles)
      - `content` (text)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add policies for public article access

  3. Triggers
    - Add updated_at triggers
*/

-- Create articles table
CREATE TABLE IF NOT EXISTS articles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  content text NOT NULL,
  summary text NOT NULL,
  source_url text NOT NULL,
  image_url text,
  category text NOT NULL,
  region text NOT NULL,
  published_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  CHECK (category IN ('solar', 'wind', 'hydrogen', 'policy', 'markets', 'technology')),
  CHECK (region IN ('global', 'north_america', 'europe', 'asia_pacific', 'middle_east'))
);

-- Create user_preferences table
CREATE TABLE IF NOT EXISTS user_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  categories text[] NOT NULL DEFAULT '{}',
  regions text[] NOT NULL DEFAULT '{}',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create comments table
CREATE TABLE IF NOT EXISTS comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;

-- Articles policies
CREATE POLICY "Articles are readable by everyone"
  ON articles
  FOR SELECT
  TO public
  USING (true);

-- User preferences policies
CREATE POLICY "Users can manage own preferences"
  ON user_preferences
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Comments policies
CREATE POLICY "Comments are readable by everyone"
  ON comments
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create comments"
  ON comments
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own comments"
  ON comments
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own comments"
  ON comments
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

-- Add updated_at triggers
CREATE TRIGGER update_articles_updated_at
  BEFORE UPDATE ON articles
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_user_preferences_updated_at
  BEFORE UPDATE ON user_preferences
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_comments_updated_at
  BEFORE UPDATE ON comments
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Create indexes for better performance
CREATE INDEX articles_category_idx ON articles(category);
CREATE INDEX articles_region_idx ON articles(region);
CREATE INDEX articles_published_at_idx ON articles(published_at DESC);
CREATE INDEX comments_article_id_idx ON comments(article_id);
CREATE INDEX comments_user_id_idx ON comments(user_id);