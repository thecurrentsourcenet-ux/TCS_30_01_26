import { loadStripe, Stripe } from '@stripe/stripe-js';

const stripePublishableKey = import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY;

let stripePromise: Promise<Stripe | null> | null = null;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = stripePublishableKey && typeof stripePublishableKey === 'string'
      ? loadStripe(stripePublishableKey)
      : Promise.resolve(null);
  }
  return stripePromise;
};

export const SUBSCRIPTION_PRICES = {
  monthly: {
    id: import.meta.env.VITE_STRIPE_MONTHLY_PRICE_ID,
    price: 49,
    name: 'Monthly Premium',
    features: [
      'Full access to hydrogen energy news',
      'Detailed market data',
      'Historical data for the past year',
      'Advanced charting and analysis tools',
      'Basic API access'
    ]
  },
  quarterly: {
    id: import.meta.env.VITE_STRIPE_QUARTERLY_PRICE_ID,
    price: 129,
    name: 'Quarterly Premium',
    features: [
      'All features of monthly plan',
      'Historical data for past three years',
      'Enhanced API access',
      'Weekly market reports and insights',
      '12% discount compared to monthly'
    ]
  },
  annual: {
    id: import.meta.env.VITE_STRIPE_ANNUAL_PRICE_ID,
    price: 468,
    name: 'Annual Premium',
    features: [
      'All features of quarterly plan',
      'Full historical data access',
      'Priority customer support',
      'Monthly in-depth market analysis',
      'Exclusive webinars and expert Q&A',
      '20% discount compared to monthly'
    ]
  }
};

export async function createCheckoutSession(priceId: string, customerId?: string) {
  try {
    const stripe = await getStripe();
    
    if (!stripe) {
      throw new Error('Stripe is not configured. Please check your environment variables.');
    }
    
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId, customerId }),
    });

    const { sessionId } = await response.json();
    
    const { error } = await stripe.redirectToCheckout({ sessionId });
    
    if (error) throw error;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

export async function createPortalSession(customerId: string) {
  try {
    const stripe = await getStripe();
    
    if (!stripe) {
      throw new Error('Stripe is not configured. Please check your environment variables.');
    }
    
    const response = await fetch('/api/create-portal-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ customerId }),
    });

    const { url } = await response.json();
    window.location.href = url;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}