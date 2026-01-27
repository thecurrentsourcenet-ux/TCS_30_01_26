import React from 'react';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import EmailSignup from '../components/EmailSignup';

const archiveItems = [
  {
    id: 1,
    startDate: new Date(2024, 2, 10),
    endDate: new Date(2024, 2, 16),
    title: "Breakthrough in Hydrogen Production Efficiency",
    summary: "Major developments in catalyst technology and EU funding initiatives."
  },
  {
    id: 2,
    startDate: new Date(2024, 2, 3),
    endDate: new Date(2024, 2, 9),
    title: "Global Hydrogen Infrastructure Expansion",
    summary: "New projects announced in Asia and North America, policy updates."
  },
  // Add more archive items as needed
];

export default function Archives() {
  return (
    <>
      <Helmet>
        <title>Archives - HydrogenTalk</title>
        <meta name="description" content="Browse our archive of weekly hydrogen energy news digests." />
      </Helmet>

      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Archives</h1>
        
        <div className="space-y-6">
          {archiveItems.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                <a href="#" className="hover:text-blue-600">
                  Week of {format(item.startDate, 'MMMM d')}-{format(item.endDate, 'MMMM d, yyyy')}
                </a>
              </h2>
              <h3 className="text-lg text-gray-700 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.summary}</p>
            </article>
          ))}
        </div>

        <EmailSignup />
      </div>
    </>
  );
}