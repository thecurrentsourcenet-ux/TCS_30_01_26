import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Zap, Database, Truck, Shield, Factory, ArrowRight } from 'lucide-react';

interface TechnicalSection {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  path: string;
  color: string;
  highlights: string[];
}

const technicalSections: TechnicalSection[] = [
  {
    id: 'production',
    name: 'Clean Energy Production',
    description: 'Comprehensive guide to methods for producing hydrogen, e-fuels, and other renewable energy sources.',
    icon: <Zap className="h-8 w-8" />,
    path: '/category/technical/production',
    color: 'blue',
    highlights: [
      'Electrolysis methods (PEM, Alkaline, SOEC)',
      'Steam Methane Reforming with CCS',
      'Biomass gasification processes',
      'Solar-driven production methods',
      'E-fuels and ammonia synthesis'
    ]
  },
  {
    id: 'storage',
    name: 'Energy Storage Solutions',
    description: 'Technologies and methods for storing hydrogen, ammonia, and other energy carriers safely and efficiently.',
    icon: <Database className="h-8 w-8" />,
    path: '/category/technical/storage',
    color: 'purple',
    highlights: [
      'Compressed gas storage systems',
      'Liquid hydrogen cryogenic storage',
      'Metal hydride storage solutions',
      'Underground storage in salt caverns',
      'Ammonia storage technologies'
    ]
  },
  {
    id: 'transport',
    name: 'Transportation & Distribution',
    description: 'Infrastructure and methods for transporting clean energy carriers from production to end-use.',
    icon: <Truck className="h-8 w-8" />,
    path: '/category/technical/transport',
    color: 'emerald',
    highlights: [
      'Pipeline infrastructure and requirements',
      'Tube trailer transportation',
      'Cryogenic liquid transport',
      'Carrier molecule solutions',
      'Maritime shipping methods'
    ]
  },
  {
    id: 'safety',
    name: 'Safety Standards',
    description: 'Safety protocols and best practices for handling various energy carriers in different applications.',
    icon: <Shield className="h-8 w-8" />,
    path: '/category/technical/safety',
    color: 'amber',
    highlights: [
      'Leak detection systems',
      'Ventilation requirements',
      'Material compatibility standards',
      'Emergency response procedures',
      'Training and certification programs'
    ]
  },
  {
    id: 'applications',
    name: 'Industrial Applications',
    description: 'Real-world applications of hydrogen, e-fuels, and other low-carbon solutions across industries.',
    icon: <Factory className="h-8 w-8" />,
    path: '/category/technical/applications',
    color: 'indigo',
    highlights: [
      'Steel and metallurgy applications',
      'Chemical industry processes',
      'Transportation fuel cells',
      'Power generation systems',
      'Refining and petrochemicals'
    ]
  }
];

export default function TechnicalCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % technicalSections.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + technicalSections.length) % technicalSections.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentSection = technicalSections[currentIndex];

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Technical Knowledge Base
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore comprehensive guides covering all aspects of clean energy technology, 
          from production methods to safety standards and industrial applications.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="relative bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
        {/* Main Content */}
        <div className="grid md:grid-cols-2 min-h-[400px]">
          {/* Left Side - Content */}
          <div className="p-8 flex flex-col justify-center">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-${currentSection.color}-100`}>
              <div className={`text-${currentSection.color}-600`}>
                {currentSection.icon}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              {currentSection.name}
            </h3>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {currentSection.description}
            </p>

            <div className="mb-6">
              <h4 className="font-semibold text-gray-800 mb-3">Key Topics Covered:</h4>
              <ul className="space-y-2">
                {currentSection.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-600">
                    <span className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-${currentSection.color}-400`}></span>
                    <span className="text-sm">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to={currentSection.path}
              className={`inline-flex items-center gap-2 bg-${currentSection.color}-600 text-white px-6 py-3 rounded-lg hover:bg-${currentSection.color}-700 transition-colors font-medium group w-fit`}
            >
              Explore {currentSection.name}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Side - Visual */}
          <div className={`bg-gradient-to-br from-${currentSection.color}-50 to-${currentSection.color}-100 p-8 flex items-center justify-center`}>
            <div className="text-center">
              <div className={`inline-flex items-center justify-center w-32 h-32 rounded-full bg-white shadow-lg mb-6`}>
                <div className={`text-${currentSection.color}-600`}>
                  {React.cloneElement(currentSection.icon as React.ReactElement, { 
                    className: 'h-16 w-16' 
                  })}
                </div>
              </div>
              <div className={`text-${currentSection.color}-700 font-medium`}>
                {currentSection.highlights.length} Key Areas
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <button
            onClick={prevSlide}
            className="ml-4 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-gray-800"
            aria-label="Previous section"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        </div>

        <div className="absolute inset-y-0 right-0 flex items-center">
          <button
            onClick={nextSlide}
            className="mr-4 p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all text-gray-600 hover:text-gray-800"
            aria-label="Next section"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-2">
            {technicalSections.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-electric scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to section ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {technicalSections.map((section, index) => (
          <Link
            key={section.id}
            to={section.path}
            className={`group p-4 rounded-lg border-2 transition-all hover:shadow-md ${
              index === currentIndex
                ? `border-${section.color}-200 bg-${section.color}-50`
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className={`text-${section.color}-600 mb-3 group-hover:scale-110 transition-transform`}>
              {React.cloneElement(section.icon as React.ReactElement, { 
                className: 'h-6 w-6 mx-auto' 
              })}
            </div>
            <h4 className="font-medium text-gray-800 text-sm text-center group-hover:text-gray-900">
              {section.name}
            </h4>
          </Link>
        ))}
      </div>
    </div>
  );
}