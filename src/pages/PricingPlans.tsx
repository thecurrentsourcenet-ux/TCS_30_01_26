@@ .. @@
 import React, { useState } from 'react';
-import { Helmet } from 'react-helmet-async';
+import SEOHead from '../components/SEOHead';
 import { Link } from 'react-router-dom';
@@ .. @@
 export default function PricingPlans() {
 }
+  const pageTitle = "Subscribe to Newsletter - TheCurrentSource";
+  const pageDescription = "Subscribe to TheCurrentSource monthly newsletter for comprehensive energy news from all sectors. Free, organized, and delivered to your inbox.";
+  const canonicalUrl = "https://thecurrentsource.net/newsletter";
+
   return (
     <>
-      <Helmet>
-        <title>Subscribe to Newsletter - TheCurrentSource</title>
-        <meta name="description" content="Subscribe to TheCurrentSource weekly newsletter for comprehensive energy news from all sectors. Free, organized, and delivered to your inbox." />
-        <meta name="keywords" content="energy newsletter, subscribe, weekly digest, energy news, renewable energy updates" />
-        <link rel="canonical" href="https://thecurrentsource.net/newsletter" />
-        
-        {/* Open Graph */}
-        <meta property="og:title" content="Subscribe to Newsletter - TheCurrentSource" />
-        <meta property="og:description" content="Get weekly energy news from all sectors delivered to your inbox. Free forever." />
-        <meta property="og:url" content="https://thecurrentsource.net/newsletter" />
-        <meta property="og:type" content="website" />
-        
-        {/* Twitter */}
-        <meta name="twitter:title" content="Subscribe to Newsletter - TheCurrentSource" />
-        <meta name="twitter:description" content="Get weekly energy news from all sectors delivered to your inbox. Free forever." />
-      </Helmet>
+      <SEOHead
   )
+        title={pageTitle}
+        description={pageDescription}
+        keywords="energy newsletter, subscribe, monthly digest, energy news, renewable energy updates"
+        canonicalUrl={canonicalUrl}
+        ogType="website"
+      />

       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">