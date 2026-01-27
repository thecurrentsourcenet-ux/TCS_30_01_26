import React, { useState } from 'react';
import { Shield, AlertTriangle, Wind, PenTool as Tool, BookOpen, ChevronRight, FlaskRound as Flask, Box } from 'lucide-react';

export default function SafetyStandards() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'hydrogen',
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: 'Hydrogen Safety',
      color: 'blue'
    },
    {
      id: 'ammonia',
      icon: <Flask className="h-6 w-6 text-purple-600" />,
      title: 'Ammonia Safety',
      color: 'purple'
    },
    {
      id: 'efuels',
      icon: <Box className="h-6 w-6 text-emerald-600" />,
      title: 'E-Fuels Safety',
      color: 'emerald'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Quick Navigation */}
      <nav className="mb-8 sticky top-0 bg-white z-10 border-b border-gray-100 py-4">
        <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => {
                const element = document.getElementById(section.id);
                if (element) {
                  const offset = element.offsetTop - 100;
                  window.scrollTo({ top: offset, behavior: 'smooth' });
                  setActiveSection(section.id);
                }
              }}
              className={`flex items-center space-x-2 px-4 py-2 rounded-full whitespace-nowrap transition-all
                ${activeSection === section.id 
                  ? `bg-${section.color}-100 text-${section.color}-700` 
                  : 'hover:bg-gray-100'}`}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* Sources Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl shadow-sm border border-blue-100 p-8 mb-12">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-8 w-8 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-800">Information Sources</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-3">U.S. Department of Transportation</h3>
            <p className="text-gray-600 mb-4">Federal Motor Vehicle Safety Standards</p>
            <a 
              href="https://www.nhtsa.gov/laws-regulations/fmvss"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              View Standards
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-3">Clean Air Task Force</h3>
            <p className="text-gray-600 mb-4">"Regulatory Framework for Hydrogen in the U.S."</p>
            <a 
              href="https://www.catf.us/work/carbon-capture/hydrogen"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              Learn More
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-3">U.S. Department of Energy</h3>
            <p className="text-gray-600 mb-4">"Overview of the DOE Hydrogen Safety, Codes and Standards Program"</p>
            <a 
              href="https://www.energy.gov/eere/fuelcells/safety-codes-and-standards"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              Safety Program Details
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <div className="space-y-16">
        {/* Hydrogen Safety Section */}
        <section id="hydrogen" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Hydrogen Safety</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Leak Detection</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Requirement</h4>
                  <p className="text-gray-600">Advanced sensors and monitoring systems</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Purpose</h4>
                  <p className="text-gray-600">Early detection of hydrogen leaks</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ventilation Requirements</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Standard</h4>
                  <p className="text-gray-600">Ensuring proper air flow in enclosed spaces</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Preventing dangerous accumulation of hydrogen</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Material Compatibility</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Requirement</h4>
                  <p className="text-gray-600">Using hydrogen-compatible materials</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Purpose</h4>
                  <p className="text-gray-600">Preventing embrittlement and leaks</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Shutdown Systems</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Standard</h4>
                  <p className="text-gray-600">Rapid response to potential hazards</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Automatic isolation of hydrogen systems in case of leaks</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Training Programs</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Requirement</h4>
                  <p className="text-gray-600">Specialized training for handling and emergency response</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Purpose</h4>
                  <p className="text-gray-600">Ensuring safe operation and maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ammonia Safety Section */}
        <section id="ammonia" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Flask className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Ammonia Safety</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Toxicity Management</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Standard</h4>
                  <p className="text-gray-600">Protocols for handling toxic ammonia</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Requirement</h4>
                  <p className="text-gray-600">Personal Protective Equipment (PPE) for workers</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Leak Detection and Mitigation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Technology</h4>
                  <p className="text-gray-600">Specialized sensors and containment systems</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Purpose</h4>
                  <p className="text-gray-600">Rapid response to ammonia leaks</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Emergency Response Plans</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Requirement</h4>
                  <p className="text-gray-600">Specific procedures for ammonia-related incidents</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Regular drills and updates to response plans</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-Fuels Safety Section */}
        <section id="efuels" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Box className="h-6 w-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">E-Fuels Safety</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fire Safety</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Standard</h4>
                  <p className="text-gray-600">Similar to conventional fuel handling</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Requirement</h4>
                  <p className="text-gray-600">Specialized firefighting equipment and procedures</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Spill Containment</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Procedure</h4>
                  <p className="text-gray-600">Specific methods for containing and cleaning spills</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Preventing environmental contamination</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Storage Regulations</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Standard</h4>
                  <p className="text-gray-600">Following established fuel storage guidelines</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Purpose</h4>
                  <p className="text-gray-600">Ensuring safe long-term storage of e-fuels</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Transportation Safety</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Regulation</h4>
                  <p className="text-gray-600">Adhering to hazardous materials transport regulations</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Specialized training for transporters</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}