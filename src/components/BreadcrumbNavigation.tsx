import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  href: string;
}

interface BreadcrumbNavigationProps {
  items: BreadcrumbItem[];
  className?: string;
}

export default function BreadcrumbNavigation({ items, className = '' }: BreadcrumbNavigationProps) {
  const allItems = [
    { name: 'Home', href: '/' },
    ...items
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": allItems.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://thecurrentsource.net${item.href}`
    }))
  };

  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      <nav 
        className={`flex items-center space-x-2 text-sm text-gray-600 mb-6 ${className}`}
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-2" itemScope itemType="https://schema.org/BreadcrumbList">
          {allItems.map((item, index) => (
            <li 
              key={item.href} 
              className="flex items-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight className="h-4 w-4 text-gray-400 mx-2" aria-hidden="true" />
              )}
              
              {index === allItems.length - 1 ? (
                <span 
                  className="text-gray-900 font-medium"
                  itemProp="name"
                  aria-current="page"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1 inline" aria-hidden="true" />}
                  {item.name}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-gray-600 hover:text-electric transition-colors flex items-center"
                  itemProp="item"
                >
                  {index === 0 && <Home className="h-4 w-4 mr-1" aria-hidden="true" />}
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              
              <meta itemProp="position" content={String(index + 1)} />
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}