import React, { useState } from 'react';
import { BaselineIcon as PipelineIcon, Truck, Ship, FlaskRound as Flask, Box, BookOpen, ChevronRight } from 'lucide-react';

export default function TransportationMethods() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'hydrogen',
      icon: <PipelineIcon className="h-6 w-6 text-blue-600" />,
      title: 'Hydrogen Transportation',
      color: 'blue'
    },
    {
      id: 'ammonia',
      icon: <Flask className="h-6 w-6 text-purple-600" />,
      title: 'Ammonia Transportation',
      color: 'purple'
    },
    {
      id: 'efuels',
      icon: <Box className="h-6 w-6 text-emerald-600" />,
      title: 'E-Fuels Transportation',
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
            <h3 className="font-semibold text-gray-800 mb-3">MDPI</h3>
            <p className="text-gray-600 mb-4">"Sustainable E-Fuels: Green Hydrogen, Methanol and Ammonia for Carbon-Neutral Transportation"</p>
            <a 
              href="https://www.mdpi.com/journal/sustainability"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              View Research
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-3">The Royal Society</h3>
            <p className="text-gray-600 mb-4">"The role of hydrogen and ammonia in meeting the net zero challenge"</p>
            <a 
              href="https://royalsociety.org/topics-policy/projects/low-carbon-energy-programme/green-ammonia/"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              View Report
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-3">ARPA-E</h3>
            <p className="text-gray-600 mb-4">REFUEL Program</p>
            <a 
              href="https://arpa-e.energy.gov/technologies/programs/refuel"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              Program Details
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <div className="space-y-16">
        {/* Hydrogen Transportation Section */}
        <section id="hydrogen" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <PipelineIcon className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Hydrogen Transportation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pipeline</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">For large-scale, long-distance transport</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-medium text-amber-800 mb-2">Challenge</h4>
                  <p className="text-amber-600">Requires specialized materials to prevent hydrogen embrittlement</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Potential</h4>
                  <p className="text-gray-600">Repurposing existing natural gas pipelines</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Tube Trailers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">Compressed gas cylinders on trucks for shorter distances</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Common for smaller-scale distribution</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cryogenic Liquid Tankers</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">For long-distance transport of liquid hydrogen</p>
                </div>
                <div className="bg-amber-50 rounded-lg p-4">
                  <h4 className="font-medium text-amber-800 mb-2">Challenge</h4>
                  <p className="text-amber-600">Maintaining extremely low temperatures</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Carrier Molecules</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">Using ammonia or liquid organic hydrogen carriers (LOHC) for transport</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 mb-2">Advantage</h4>
                  <p className="text-emerald-600">Higher energy density and easier handling than pure hydrogen</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ammonia Transportation Section */}
        <section id="ammonia" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Flask className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Ammonia Transportation</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pipelines</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">Using existing infrastructure for long-distance transport</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 mb-2">Advantage</h4>
                  <p className="text-emerald-600">Well-established technology and infrastructure</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Rail Cars and Trucks</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">For shorter distances and smaller quantities</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Flexible distribution to various end-users</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ships</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">For international transport of large quantities</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Potential</h4>
                  <p className="text-gray-600">As a marine fuel itself</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-Fuels Transportation Section */}
        <section id="efuels" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Box className="h-6 w-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">E-Fuels Transportation</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Conventional Fuel Infrastructure</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">Using existing pipelines, tanker trucks, and ships</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 mb-2">Advantage</h4>
                  <p className="text-emerald-600">Minimal new infrastructure required</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Blending Facilities</h3>
              <div className="space-y-4">
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">For mixing e-fuels with conventional fuels</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Gradual introduction into existing fuel systems</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}