import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, ArrowRight, Loader2 } from 'lucide-react';

interface SimplifiedEmailFormProps {
  prefilledEmail?: string;
  onSuccess?: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'default' | 'compact' | 'inline';
  className?: string;
}

export default function SimplifiedEmailForm({
  prefilledEmail = '',
  onSuccess,
  size = 'medium',
  variant = 'default',
  className = ''
}: SimplifiedEmailFormProps) {
  const navigate = useNavigate();
  const [email, setEmail] = useState(prefilledEmail);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (prefilledEmail) {
      setEmail(prefilledEmail);
    }
  }, [prefilledEmail]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || isSubmitting) return;

    setIsSubmitting(true);

    try {
      // Create form data for Mailchimp
      const formData = new FormData();
      formData.append('EMAIL', email);
      formData.append('b_a655408a1d3c6b2169d9ee551_0cc545a8de', ''); // Bot field

      // Submit to Mailchimp
      const response = await fetch(
        'https://gmail.us22.list-manage.com/subscribe/post-json?u=a655408a1d3c6b2169d9ee551&id=0cc545a8de&c=?',
        {
          method: 'POST',
          body: formData,
          mode: 'no-cors' // Required for Mailchimp
        }
      );

      // Since we can't read the response due to CORS, assume success
      if (onSuccess) {
        onSuccess();
      }

      // Redirect to thank you page
      navigate('/thank-you');

    } catch (error) {
      console.error('Newsletter signup error:', error);
      // Still redirect to thank you page since we can't verify due to CORS
      navigate('/thank-you');
    } finally {
      setIsSubmitting(false);
    }
  };

  const sizeClasses = {
    small: {
      container: 'text-base',
      input: 'px-4 py-3 text-base',
      button: 'px-5 py-3 text-base'
    },
    medium: {
      container: 'text-lg',
      input: 'px-5 py-4 text-lg',
      button: 'px-7 py-4 text-lg'
    },
    large: {
      container: 'text-xl',
      input: 'px-6 py-5 text-xl',
      button: 'px-9 py-5 text-xl'
    }
  };

  const currentSize = sizeClasses[size];

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className={`flex-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric ${currentSize.input}`}
          required
          disabled={isSubmitting}
        />
        <button
          type="submit"
          disabled={!email.trim() || isSubmitting}
          className={`bg-electric text-white rounded-lg hover:bg-electric-600 transition-colors font-bold disabled:opacity-50 flex items-center justify-center gap-2 ${currentSize.button} w-full sm:w-auto`}
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <Mail className="h-5 w-5" />
              Subscribe
            </>
          )}
        </button>
      </form>
    );
  }

  if (variant === 'compact') {
    return (
      <div className={`bg-white rounded-lg border border-gray-200 p-6 ${className}`}>
        <h4 className="font-bold text-gray-800 mb-3 text-lg">Free Newsletter</h4>
        <p className="text-gray-600 text-base mb-4">
          The best energy news every week
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            className={`w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric ${currentSize.input}`}
            required
            disabled={isSubmitting}
          />
          <button
            type="submit"
            disabled={!email.trim() || isSubmitting}
            className={`w-full bg-electric text-white rounded-lg hover:bg-electric-600 transition-colors font-bold disabled:opacity-50 flex items-center justify-center gap-3 ${currentSize.button}`}
          >
            {isSubmitting ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <>
                <Mail className="h-5 w-5" />
                Subscribe Free
                <ArrowRight className="h-5 w-5" />
              </>
            )}
          </button>
        </form>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`bg-gradient-to-br from-electric-50 to-teal-50 rounded-lg border border-electric-100 p-6 sm:p-6 ${className}`}>
      <div className="text-center mb-6">
        <h4 className="font-bold text-gray-800 mb-3 text-xl">
          Stay in touch
        </h4>
        <p className="text-gray-600 text-base">
          Energy, policy and innovation every week in your inbox
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email"
          className={`w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-electric focus:border-electric ${currentSize.input}`}
          required
          disabled={isSubmitting}
        />
        
        <button
          type="submit"
          disabled={!email.trim() || isSubmitting}
          className={`w-full bg-electric text-white rounded-lg hover:bg-electric-600 transition-colors font-bold disabled:opacity-50 flex items-center justify-center gap-3 ${currentSize.button}`}
        >
          {isSubmitting ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <>
              <Mail className="h-5 w-5" />
              Subscribe Free
              <ArrowRight className="h-5 w-5" />
            </>
          )}
        </button>
      </form>

      <p className="text-sm text-gray-500 text-center mt-4">
        ✓ No spam ✓ Easy unsubscribe
      </p>
    </div>
  );
}