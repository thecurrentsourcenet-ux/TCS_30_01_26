@@ .. @@
 -- Drop existing policies if they exist
 DROP POLICY IF EXISTS "Articles are readable by everyone" ON articles;
+DROP POLICY IF EXISTS "Authenticated users can insert articles" ON articles;
 DROP POLICY IF EXISTS "Users can manage own preferences" ON user_preferences;
@@ .. @@
 -- Articles policies
 CREATE POLICY "Articles are readable by everyone"
   ON articles
   FOR SELECT
   TO public
   USING (true);

+CREATE POLICY "Authenticated users can insert articles"
+  ON articles
+  FOR INSERT
+  TO authenticated
+  WITH CHECK (true);
+
 -- User preferences policies