import React, { useState } from 'react';
import { Database, Thermometer, Cuboid as Cube, Mountain, FlaskRound as Flask, Box, BookOpen, ChevronRight } from 'lucide-react';

export default function StorageSolutions() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'hydrogen',
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: 'Hydrogen Storage',
      color: 'blue'
    },
    {
      id: 'ammonia',
      icon: <Flask className="h-6 w-6 text-purple-600" />,
      title: 'Ammonia Storage',
      color: 'purple'
    },
    {
      id: 'efuels',
      icon: <Box className="h-6 w-6 text-emerald-600" />,
      title: 'E-Fuels Storage',
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
            <h3 className="font-semibold text-gray-800 mb-3">U.S. Department of Energy</h3>
            <p className="text-gray-600 mb-4">"Potential Roles of Ammonia in a Hydrogen Economy"</p>
            <a 
              href="https://www.energy.gov/eere/fuelcells/hydrogen-storage"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              Learn More
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-3">Ørsted</h3>
            <p className="text-gray-600 mb-4">Power-to-X and Green Hydrogen Research</p>
            <a 
              href="https://orsted.com/en/our-business/power-to-x"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              Power-to-X Technology
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <div className="space-y-16">
        {/* Hydrogen Storage Section */}
        <section id="hydrogen" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Database className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Hydrogen Storage</h2>
          </div>

          <div className="space-y-8">
            {/* Compressed Gas Storage */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Compressed Gas Storage</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                    <p className="text-gray-600">Storing hydrogen under high pressure (350-700 bar) in tanks</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                    <p className="text-gray-600">Common for vehicle and stationary storage</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-medium text-amber-800 mb-2">Challenge</h4>
                    <p className="text-amber-600">Requires strong, specialized tanks</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Liquid Hydrogen Storage</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                    <p className="text-gray-600">Cryogenic storage at -253°C</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h4 className="font-medium text-emerald-800 mb-2">Advantage</h4>
                    <p className="text-emerald-600">Higher energy density than compressed gas</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-medium text-amber-800 mb-2">Challenge</h4>
                    <p className="text-amber-600">Energy-intensive liquefaction process and boil-off issues</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Metal Hydrides</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                    <p className="text-gray-600">Absorbing hydrogen into metal alloys</p>
                  </div>
                  <div className="bg-emerald-50 rounded-lg p-4">
                    <h4 className="font-medium text-emerald-800 mb-2">Advantage</h4>
                    <p className="text-emerald-600">Safer storage at lower pressures</p>
                  </div>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <h4 className="font-medium text-amber-800 mb-2">Challenge</h4>
                    <p className="text-amber-600">Weight and cost of metal alloys</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Underground Storage */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Underground Storage</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">Using salt caverns or depleted gas fields</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 mb-2">Advantage</h4>
                  <p className="text-emerald-600">Large-scale, long-term storage capability</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Seasonal energy storage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ammonia Storage Section */}
        <section id="ammonia" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Flask className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Ammonia Storage</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Pressurized Tanks</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">Storing liquid ammonia under moderate pressure</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 mb-2">Advantage</h4>
                  <p className="text-emerald-600">Well-established technology</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Refrigerated Storage</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">Keeping ammonia at -33°C at atmospheric pressure</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Large-scale industrial storage</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Underground Storage</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">Similar to natural gas storage in salt caverns</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 mb-2">Advantage</h4>
                  <p className="text-emerald-600">Potential for large-scale, long-term storage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-Fuels Storage Section */}
        <section id="efuels" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Box className="h-6 w-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">E-Fuels Storage</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Conventional Fuel Tanks</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">Storing e-fuels like e-methanol in standard liquid fuel tanks</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 mb-2">Advantage</h4>
                  <p className="text-emerald-600">Utilizes existing infrastructure</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Cryogenic Storage</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">For e-fuels requiring very low temperatures</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Example</h4>
                  <p className="text-gray-600">Liquid e-methane storage</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}