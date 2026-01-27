/*
  # Create news aggregation tables

  1. New Tables
    - `articles`
      - Core news article data
      - AI-generated summaries
      - Engagement metrics
    - `user_preferences`
      - User topic and region preferences
      - Email notification settings
    - `comments`
      - Nested comment support
      - Like counts
    - `article_likes`
      - Track user likes
    - `article_views`
      - Anonymous and authenticated view tracking

  2. Security
    - Enable RLS on all tables
    - Public read access for articles
    - Authenticated user policies for interactions
*/

-- Drop existing tables if they exist
DROP TABLE IF EXISTS article_views CASCADE;
DROP TABLE IF EXISTS article_likes CASCADE;
DROP TABLE IF EXISTS comments CASCADE;
DROP TABLE IF EXISTS user_preferences CASCADE;
DROP TABLE IF EXISTS articles CASCADE;

-- Create articles table
CREATE TABLE articles (
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
  ai_summary text,
  source_name text NOT NULL,
  author text,
  read_time integer DEFAULT 5,
  likes_count integer DEFAULT 0,
  views_count integer DEFAULT 0,
  is_premium boolean DEFAULT false,
  tags text[] DEFAULT '{}',
  CHECK (category IN ('solar', 'wind', 'policy', 'markets', 'technology')),
  CHECK (region IN ('global', 'north_america', 'europe', 'asia_pacific', 'middle_east'))
);

-- Create user_preferences table
CREATE TABLE user_preferences (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  categories text[] NOT NULL DEFAULT '{}',
  regions text[] NOT NULL DEFAULT '{}',
  followed_topics text[] DEFAULT '{}',
  email_frequency text NOT NULL DEFAULT 'weekly',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  UNIQUE(user_id),
  CHECK (email_frequency IN ('daily', 'weekly', 'never'))
);

-- Create comments table
CREATE TABLE comments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  content text NOT NULL,
  parent_id uuid REFERENCES comments(id) ON DELETE CASCADE,
  likes_count integer DEFAULT 0,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create article_likes table
CREATE TABLE article_likes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE NOT NULL,
  created_at timestamptz DEFAULT now(),
  UNIQUE(article_id, user_id)
);

-- Create article_views table
CREATE TABLE article_views (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  article_id uuid REFERENCES articles(id) ON DELETE CASCADE NOT NULL,
  user_id uuid REFERENCES profiles(id) ON DELETE CASCADE,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_preferences ENABLE ROW LEVEL SECURITY;
ALTER TABLE comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_likes ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_views ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Articles are readable by everyone" ON articles;
DROP POLICY IF EXISTS "Users can manage own preferences" ON user_preferences;
DROP POLICY IF EXISTS "Comments are readable by everyone" ON comments;
DROP POLICY IF EXISTS "Authenticated users can create comments" ON comments;
DROP POLICY IF EXISTS "Users can update own comments" ON comments;
DROP POLICY IF EXISTS "Users can delete own comments" ON comments;
DROP POLICY IF EXISTS "Article likes are readable by everyone" ON article_likes;
DROP POLICY IF EXISTS "Authenticated users can manage likes" ON article_likes;
DROP POLICY IF EXISTS "Article views are readable by everyone" ON article_views;
DROP POLICY IF EXISTS "Anyone can create article views" ON article_views;

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

-- Article likes policies
CREATE POLICY "Article likes are readable by everyone"
  ON article_likes
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can manage likes"
  ON article_likes
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Article views policies
CREATE POLICY "Article views are readable by everyone"
  ON article_views
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Anyone can create article views"
  ON article_views
  FOR INSERT
  TO public
  WITH CHECK (true);

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
CREATE INDEX articles_tags_idx ON articles USING gin(tags);
CREATE INDEX comments_article_id_idx ON comments(article_id);
CREATE INDEX comments_user_id_idx ON comments(user_id);
CREATE INDEX article_likes_article_id_idx ON article_likes(article_id);
CREATE INDEX article_views_article_id_idx ON article_views(article_id);