import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useAuth } from '../components/AuthProvider';
import { supabase } from '../lib/supabase';
import { createPortalSession } from '../lib/stripe';
import { SUBSCRIPTION_PRICES } from '../lib/stripe';

export default function Profile() {
  const { user, subscription, signOut } = useAuth();
  const [fullName, setFullName] = useState(user?.full_name || '');
  const [company, setCompany] = useState(user?.company || '');
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage('');

    try {
      const { error } = await supabase
        .from('profiles')
        .update({
          full_name: fullName,
          company,
        })
        .eq('id', user!.id);

      if (error) throw error;
      setMessage('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('Error updating profile. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const handleManageSubscription = async () => {
    if (!subscription?.stripe_customer_id) return;
    try {
      await createPortalSession(subscription.stripe_customer_id);
    } catch (error) {
      console.error('Error opening customer portal:', error);
    }
  };

  return (
    <>
      <Helmet>
        <title>Profile - EnergyInsights</title>
        <meta name="description" content="Manage your profile and subscription settings." />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile Settings</h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={user?.email}
                disabled
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50 text-gray-500"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700">
                Company
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {message && (
              <p className={`text-sm ${message.includes('Error') ? 'text-red-600' : 'text-green-600'}`}>
                {message}
              </p>
            )}

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={signOut}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
              >
                Sign Out
              </button>
              <button
                type="submit"
                disabled={saving}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>

        {subscription && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Subscription</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {SUBSCRIPTION_PRICES[subscription.plan].name}
                </h3>
                <p className="text-gray-600">
                  Status: <span className="capitalize">{subscription.status}</span>
                </p>
                <p className="text-gray-600">
                  Next billing date: {new Date(subscription.current_period_end).toLocaleDateString()}
                </p>
              </div>

              <button
                onClick={handleManageSubscription}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              >
                Manage Subscription
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}