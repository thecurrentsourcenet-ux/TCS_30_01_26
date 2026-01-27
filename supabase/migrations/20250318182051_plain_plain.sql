/*
  # Create email subscriptions table

  1. New Tables
    - `subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `created_at` (timestamp)
      - `status` (text) - For managing subscription status (active/unsubscribed)

  2. Security
    - Enable RLS on `subscriptions` table
    - Add policy for inserting new subscriptions
    - Add policy for reading own subscription data
*/

CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text NOT NULL DEFAULT 'active'
);

ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe"
  ON subscriptions
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Users can read own subscription"
  ON subscriptions
  FOR SELECT
  TO public
  USING (email = current_setting('request.jwt.claims')::json->>'email');