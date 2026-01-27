import React from 'react';
import SEOHead from '../components/SEOHead';
import { Shield, Lock, Eye, Database, Bell, Trash2 } from 'lucide-react';
import EmailSignup from '../components/EmailSignup';
import BreadcrumbNavigation from '../components/BreadcrumbNavigation';

export default function Privacy() {
  const pageTitle = "Privacy Policy - TheCurrentSource";
  const pageDescription = "Learn about how TheCurrentSource collects, uses, and protects your personal information. Our commitment to privacy and data protection.";
  const canonicalUrl = "https://thecurrentsource.net/privacy";

  const breadcrumbItems = [
    { name: 'Privacy Policy', href: '/privacy' }
  ];

  return (
    <>
      <SEOHead
        title={pageTitle}
        description={pageDescription}
        keywords="privacy policy, data protection, personal information, cookies, GDPR, data security"
        canonicalUrl={canonicalUrl}
        ogType="website"
      />

      <div className="max-w-4xl mx-auto space-y-8">
        <BreadcrumbNavigation items={breadcrumbItems} />
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>
            <p className="text-gray-600 mb-4">
              Last updated: January 19, 2025
            </p>
            <p className="text-gray-600">
              At TheCurrentSource, we are committed to protecting your privacy and ensuring 
              the security of your personal information. This Privacy Policy explains how we 
              collect, use, and safeguard your data.
            </p>
          </header>

          <div className="space-y-8">
            {/* Introduction */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Introduction</h2>
              </div>
              <p className="text-gray-600">
                TheCurrentSource ("we," "our," or "us") is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you use our website and services. Please read this privacy policy 
                carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Information We Collect</h2>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Email address (for newsletter subscriptions)</li>
                  <li>Full name (when provided voluntarily)</li>
                  <li>Company name (when provided voluntarily)</li>
                </ul>

                <h3 className="text-lg font-medium text-gray-800">Usage Information</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Log data (IP address, browser type, pages visited)</li>
                  <li>Device information</li>
                  <li>Content interaction data</li>
                  <li>Analytics data to improve our services</li>
                  <li>Data collected through cookies, web beacons, and similar tracking technologies</li>
                </ul>
              </div>
            </section>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-800">How We Use Your Information</h2>
              </div>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>To provide and maintain our newsletter service</li>
                <li>To send you weekly energy news digests</li>
                <li>To respond to your inquiries and support requests</li>
                <li>To improve our website and services</li>
                <li>To analyze usage patterns and trends</li>
                <li>To ensure the security of our platform</li>
              </ul>
              
              <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">Third-Party Advertising</h3>
                <p className="text-blue-700 mb-3">
                  Third-party vendors, including Google, use cookies to serve ads based on your prior visits 
                  to our website or other websites. Google's use of advertising cookies enables it and its 
                  partners to serve ads to you based on your visit to our site and/or other sites on the Internet.
                </p>
                <p className="text-blue-700 mb-3">
                  For more information about how Google uses data when you use our website, please visit:{' '}
                  <a 
                    href="https://policies.google.com/technologies/partner-sites" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    How Google uses information from sites or apps that use our services
                  </a>
                </p>
                <p className="text-blue-700">
                  You may opt out of personalized advertising by visiting{' '}
                  <a 
                    href="https://www.google.com/settings/ads" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    Google Ads Settings
                  </a>
                  {' '}or by visiting{' '}
                  <a 
                    href="http://www.aboutads.info/choices/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    www.aboutads.info
                  </a>
                  .
                </p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Data Security</h2>
              </div>
              <p className="text-gray-600">
                We implement appropriate technical and organizational security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or 
                destruction. However, please note that no method of transmission over the Internet 
                or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Communications */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Bell className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Communications</h2>
              </div>
              <p className="text-gray-600">
                By subscribing to our newsletter, you agree to receive periodic emails from us 
                containing energy news and insights. You can opt out of these communications at 
                any time by clicking the "unsubscribe" link in our emails or contacting us directly.
              </p>
            </section>

            {/* Data Retention */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Trash2 className="h-6 w-6 text-blue-600" />
                <h2 className="text-2xl font-semibold text-gray-800">Data Retention</h2>
              </div>
              <p className="text-gray-600">
                We retain your personal information for as long as necessary to provide you with 
                our services and as required by law. If you request deletion of your subscription, 
                we will remove your email address from our mailing list, except where we must 
                retain it for legitimate business or legal purposes.
              </p>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
              <p className="text-gray-600 mb-4">
                Depending on your location, you may have certain rights regarding your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>The right to access your personal information</li>
                <li>The right to correct inaccurate information</li>
                <li>The right to delete your personal information</li>
                <li>The right to unsubscribe from our communications</li>
                <li>The right to data portability</li>
              </ul>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about this Privacy Policy or our data practices, 
                please contact us at:{' '}
                <a href="mailto:thecurrentsource.net@gmail.com" className="text-blue-600 hover:text-blue-800">
                  thecurrentsource.net@gmail.com
                </a>
              </p>
            </section>
          </div>
        </div>

        <EmailSignup />
      </div>
    </>
  );
}