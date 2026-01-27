import React, { useState } from 'react';
import { Factory, FlaskRound as Flask, Box, BookOpen, ChevronRight, Zap, Truck } from 'lucide-react';

export default function IndustrialApplications() {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const sections = [
    {
      id: 'hydrogen',
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: 'Hydrogen Applications',
      color: 'blue'
    },
    {
      id: 'ammonia',
      icon: <Flask className="h-6 w-6 text-purple-600" />,
      title: 'Ammonia Applications',
      color: 'purple'
    },
    {
      id: 'efuels',
      icon: <Box className="h-6 w-6 text-emerald-600" />,
      title: 'E-Fuels Applications',
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
            <h3 className="font-semibold text-gray-800 mb-3">U.S. Department of Energy</h3>
            <p className="text-gray-600 mb-4">H2@Scale Initiative</p>
            <a 
              href="https://www.energy.gov/eere/fuelcells/h2scale"
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
            <p className="text-gray-600 mb-4">Hydrogen and Fuel Cell Technologies Office</p>
            <a 
              href="https://www.energy.gov/eere/fuelcells/hydrogen-and-fuel-cell-technologies-office"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              View Resources
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-semibold text-gray-800 mb-3">Office of Energy Efficiency & Renewable Energy</h3>
            <p className="text-gray-600 mb-4">Industrial Applications Research</p>
            <a 
              href="https://www.energy.gov/eere/office-energy-efficiency-renewable-energy"
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 group"
            >
              Explore Research
              <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <div className="space-y-16">
        {/* Hydrogen Applications Section */}
        <section id="hydrogen" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
              <Zap className="h-6 w-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Hydrogen Applications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Refining</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Process</h4>
                  <p className="text-gray-600">Hydrocracking and desulfurization of petroleum products</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Potential</h4>
                  <p className="text-gray-600">Increasing use of green hydrogen to reduce emissions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Chemical Production</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Applications</h4>
                  <p className="text-gray-600">Manufacturing ammonia, methanol, and other chemicals</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Advantage</h4>
                  <p className="text-gray-600">Potential for carbon-neutral chemical production</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Metallurgy</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Use</h4>
                  <p className="text-gray-600">As a reducing agent in steel production</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Potential</h4>
                  <p className="text-gray-600">Decarbonizing steel manufacturing</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fuel Cells</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Generating electricity for various applications</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Sectors</h4>
                  <p className="text-gray-600">Transportation, backup power, and portable power</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Transportation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Use</h4>
                  <p className="text-gray-600">Powering fuel cell vehicles</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Types</h4>
                  <p className="text-gray-600">Cars, buses, trucks, and potentially aircraft</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ammonia Applications Section */}
        <section id="ammonia" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
              <Flask className="h-6 w-6 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">Ammonia Applications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Fertilizer Production</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Primary use</h4>
                  <p className="text-gray-600">In agriculture for crop nutrients</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Potential</h4>
                  <p className="text-gray-600">Green ammonia for sustainable farming</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Refrigeration</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Use</h4>
                  <p className="text-gray-600">As a cooling agent in industrial refrigeration systems</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Advantage</h4>
                  <p className="text-gray-600">Efficient cooling properties</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Water Treatment</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">For chloramine disinfection in water treatment plants</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Benefit</h4>
                  <p className="text-gray-600">Improving water quality and safety</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Emissions Control</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Use</h4>
                  <p className="text-gray-600">Reducing NOx emissions in power plants</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Method</h4>
                  <p className="text-gray-600">Selective Catalytic Reduction (SCR) systems</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Potential Fuel</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">As a carbon-free fuel for shipping and power generation</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Advantage</h4>
                  <p className="text-gray-600">High energy density and existing infrastructure</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E-Fuels Applications Section */}
        <section id="efuels" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
              <Box className="h-6 w-6 text-emerald-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">E-Fuels Applications</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Aviation</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Use</h4>
                  <p className="text-gray-600">E-kerosene as a sustainable aviation fuel</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Advantage</h4>
                  <p className="text-gray-600">Drop-in replacement for conventional jet fuel</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Shipping</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Applications</h4>
                  <p className="text-gray-600">E-methanol and e-ammonia for maritime transport</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Benefit</h4>
                  <p className="text-gray-600">Reducing emissions in hard-to-electrify sector</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Road Transport</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Use</h4>
                  <p className="text-gray-600">As drop-in fuels for existing vehicle fleets</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Advantage</h4>
                  <p className="text-gray-600">Utilizing current infrastructure</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Industrial Processes</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Application</h4>
                  <p className="text-gray-600">Replacing fossil fuels in high-temperature processes</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Sectors</h4>
                  <p className="text-gray-600">Glass, cement, and chemical industries</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Energy Storage</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Use</h4>
                  <p className="text-gray-600">Long-term storage of renewable energy</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Advantage</h4>
                  <p className="text-gray-600">Seasonal energy balancing</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}