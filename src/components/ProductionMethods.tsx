import React, { useState } from 'react';
import { Zap, Flame, Leaf, Sun, Factory, FlaskRound as Flask, Beaker, BookOpen, ChevronRight } from 'lucide-react';

export default function ProductionMethods() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'electrolysis',
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: 'Electrolysis',
      color: 'blue'
    },
    {
      id: 'smr',
      icon: <Flame className="h-6 w-6 text-orange-600" />,
      title: 'Steam Methane Reforming (SMR)',
      color: 'orange'
    },
    {
      id: 'biomass',
      icon: <Leaf className="h-6 w-6 text-green-600" />,
      title: 'Biomass Gasification',
      color: 'green'
    },
    {
      id: 'solar',
      icon: <Sun className="h-6 w-6 text-yellow-600" />,
      title: 'Solar-Driven Processes',
      color: 'yellow'
    },
    {
      id: 'efuels',
      icon: <Factory className="h-6 w-6 text-purple-600" />,
      title: 'E-Fuels Production',
      color: 'purple'
    },
    {
      id: 'ammonia',
      icon: <Flask className="h-6 w-6 text-indigo-600" />,
      title: 'Ammonia Production',
      color: 'indigo'
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
            <h3 className="font-semibold text-gray-800 mb-3">U.S. Department of Energy</h3>
            <p className="text-gray-600 mb-4">Office of Energy Efficiency & Renewable Energy</p>
            <a 
              href="https://www.energy.gov/eere/fuelcells/hydrogen-production" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              Hydrogen Production Overview
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
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-3">ARPA-E REFUEL Program</h3>
            <p className="text-gray-600 mb-4">U.S. Department of Energy</p>
            <a 
              href="https://arpa-e.energy.gov/technologies/programs/refuel" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              Renewable Energy to Fuels Research
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <div className="space-y-16">
        {/* Electrolysis Section */}
        <section id="electrolysis" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Electrolysis</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-gray-800 mb-3">Process</h3>
                <p className="text-gray-600">Using electricity to split water into hydrogen and oxygen</p>
              </div>
              <div className="bg-emerald-50 rounded-xl p-6">
                <h3 className="font-semibold text-emerald-800 mb-3">Key Advantage</h3>
                <p className="text-emerald-600">Can use renewable electricity for green hydrogen production</p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-4">Types</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-400 mr-3" />
                  <span className="text-gray-600">Polymer Electrolyte Membrane (PEM)</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-400 mr-3" />
                  <span className="text-gray-600">Alkaline</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-blue-400 mr-3" />
                  <span className="text-gray-600">Solid Oxide Electrolyzers</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Steam Methane Reforming Section */}
        <section id="smr" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <Flame className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Steam Methane Reforming (SMR)</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-3">Process</h3>
              <p className="text-gray-600">Reacting natural gas with high-temperature steam</p>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="font-semibold text-amber-800 mb-3">Important Note</h3>
              <p className="text-amber-600">Currently the most common method, but produces CO2 as a byproduct</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-3">Variation</h3>
              <p className="text-gray-600">SMR with Carbon Capture and Storage (CCS) for blue hydrogen</p>
            </div>
          </div>
        </section>

        {/* Biomass Gasification Section */}
        <section id="biomass" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
              <Leaf className="h-6 w-6 text-green-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Biomass Gasification</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-3">Process</h3>
              <p className="text-gray-600">Converting biomass into hydrogen-rich gas</p>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-800 mb-3">Key Advantage</h3>
              <p className="text-emerald-600">Can use waste materials as feedstock</p>
            </div>
          </div>
        </section>

        {/* Solar-Driven Processes Section */}
        <section id="solar" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
              <Sun className="h-6 w-6 text-yellow-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Solar-Driven Processes</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-gray-800 mb-4">Types</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-yellow-400 mr-3" />
                  <span className="text-gray-600">Photobiological</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-yellow-400 mr-3" />
                  <span className="text-gray-600">Photoelectrochemical</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-yellow-400 mr-3" />
                  <span className="text-gray-600">Solar thermochemical methods</span>
                </li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-xl p-6">
              <h3 className="font-semibold text-emerald-800 mb-3">Key Advantage</h3>
              <p className="text-emerald-600">Direct use of solar energy for hydrogen production</p>
            </div>
          </div>
        </section>

        {/* E-Fuels Production Section */}
        <section id="efuels" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Factory className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">E-Fuels Production</h2>
          </div>
          <div className="space-y-8">
            {/* Power-to-X Subsection */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Power-to-X (P2X)</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Process</h4>
                    <p className="text-gray-600">Converting renewable electricity into liquid or gaseous fuels</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Examples</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-purple-400 mr-3" />
                        <span className="text-gray-600">e-methanol</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-purple-400 mr-3" />
                        <span className="text-gray-600">e-kerosene</span>
                      </li>
                      <li className="flex items-start">
                        <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-purple-400 mr-3" />
                        <span className="text-gray-600">e-diesel</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="space-y-8">
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">E-Methanol Production</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Process</h4>
                      <p className="text-gray-600">Combining green hydrogen with captured CO2</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <h4 className="font-medium text-emerald-800 mb-2">Application</h4>
                      <p className="text-emerald-600">Potential replacement for conventional methanol in industry and transport</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">E-Kerosene Production</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-800 mb-2">Process</h4>
                      <p className="text-gray-600">Synthesizing jet fuel from green hydrogen and CO2</p>
                    </div>
                    <div className="bg-emerald-50 rounded-lg p-4">
                      <h4 className="font-medium text-emerald-800 mb-2">Key Advantage</h4>
                      <p className="text-emerald-600">Drop-in replacement for conventional jet fuel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ammonia Production Section */}
        <section id="ammonia" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Flask className="h-6 w-6 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Ammonia Production</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Haber-Bosch Process with Green Hydrogen</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Process</h4>
                  <p className="text-gray-600">Combining nitrogen from the air with green hydrogen</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 mb-2">Key Advantage</h4>
                  <p className="text-emerald-600">Uses existing infrastructure with renewable hydrogen input</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Solid State Ammonia Synthesis</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Process</h4>
                  <p className="text-gray-600">Using electricity to produce ammonia from air and water</p>
                </div>
                <div className="bg-emerald-50 rounded-lg p-4">
                  <h4 className="font-medium text-emerald-800 mb-2">Key Advantage</h4>
                  <p className="text-emerald-600">Potential for decentralized, smaller-scale production</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}