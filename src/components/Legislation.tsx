import React, { useState, useEffect } from 'react';
import { Scale, Globe, FileText, ExternalLink, ChevronRight, Play, Youtube, Linkedin, ArrowRight, Clock, TrendingUp, Target, DollarSign, Zap } from 'lucide-react';
import { countries } from '../data/categories';
import EmailSignup from './EmailSignup';

interface LegislationProps {
  countryId?: string;
}

const EnergyPolicyAd = () => {
  useEffect(() => {
    try {
      if (window.adsbygoogle) {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('AdSense error:', err);
    }
  }, []);

  return (
    <div className="my-8">
      <ins className="adsbygoogle"
           style={{ display: 'block' }}
           data-ad-client="ca-pub-4468932841277540"
           data-ad-slot="4957397959"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
    </div>
  );
};

export default function Legislation({ countryId }: LegislationProps) {
  const [selectedCountry, setSelectedCountry] = useState(countryId || 'us');

  const country = countries.find(c => c.id === selectedCountry);
  const countryName = country?.name || 'Unknown Country';

  useEffect(() => {
    if (countryId) {
      setSelectedCountry(countryId);
    }
  }, [countryId]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedCountry]);

  // China-specific legislation content
  if (selectedCountry === 'cn') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-8 border border-red-100">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <Scale className="h-8 w-8 text-red-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">China Energy Policy & Regulation</h1>
                <p className="text-gray-600 mt-2">Comprehensive coverage of China's hydrogen legislation and carbon neutrality commitments</p>
              </div>
            </div>
            {/* Mobile: Show compact country selector */}
            <div className="md:hidden relative flex-shrink-0">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-3 py-2 border-2 border-red-400 rounded-lg bg-white text-gray-800 font-medium appearance-none pr-8 cursor-pointer hover:bg-red-50 transition-colors text-sm"
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              <ChevronRight className="h-4 w-4 text-red-600 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="cn" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Production Standards</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Requirements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Low-carbon hydrogen focus (renewables + CCS)</li>
                    <li>Integration of wind, solar, hydro, nuclear</li>
                    <li>Hydrogen reclassified as energy (2025 Energy Law)</li>
                    <li>National standards &amp; certification under development</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Support Mechanisms</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Direct Subsidies</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Central &amp; local grants, tax breaks, FCEV demo clusters</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">CfD / CCfD</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>No CfDs or CCfDs; support via subsidies &amp; carbon market</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Tenders / Projects</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Pilot city clusters &amp; provincial hydrogen hubs</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">International Cooperation</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Joint ventures with global firms (e.g., BASF–Envision)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Policies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Strategic Initiatives</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Hydrogen Industry Development Plan (2021–2035)</li>
                    <li>Carbon neutrality by 2060; peak emissions before 2030</li>
                    <li>14th Five-Year Plan: &gt;1,200 GW wind/solar by 2030</li>
                    <li>Regional hydrogen hubs (Inner Mongolia, Sichuan, Guangdong)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.ndrc.gov.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    NDRC – National Hydrogen Industry Development Plan (2021–2035)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.nea.gov.cn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    NEA – 14th Five-Year Plan for Renewable Energy
                  </a>
                </li>
                <li>
                  <a
                    href="https://english.www.gov.cn/policies/latestreleases/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    State Council – Carbon Neutrality &amp; Energy Policies
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // Australia-specific legislation content
  if (selectedCountry === 'au') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-8 border border-green-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-green-100 p-3 rounded-lg">
              <Scale className="h-8 w-8 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Australia Energy Policy & Regulation</h1>
              <p className="text-gray-600 mt-2">Comprehensive coverage of Australia's hydrogen strategy and renewable energy transition</p>
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="au" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Production Standards</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Requirements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Clean hydrogen includes renewable (green) and low-carbon (fossil with CCS)</li>
                    <li>National Guarantee of Origin scheme tracks lifecycle CO₂ intensity</li>
                    <li>Technology-neutral approach; carbon intensity defines eligibility</li>
                    <li>Alignment with emerging international certification systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Support Mechanisms</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Direct Subsidies</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>A$4b Hydrogen Headstart program; ARENA &amp; CEFC project funding</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">CfD / CCfD</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Hydrogen Headstart uses 10-year revenue support (CfD-style contracts)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Tenders / Projects</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Regional hydrogen hubs (Pilbara, Gladstone, Hunter Valley, Bell Bay)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">International Cooperation</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Export partnerships with Japan, Korea, EU on hydrogen &amp; ammonia</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Policies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Strategic Initiatives</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>National Hydrogen Strategy (2019; updated 2024)</li>
                    <li>Net zero by 2050; 43% emissions cut by 2030</li>
                    <li>82% renewable electricity target by 2030</li>
                    <li>Rewiring the Nation grid program &amp; Capacity Investment Scheme</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.dcceew.gov.au/energy/hydrogen"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    DCCEEW – National Hydrogen Strategy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dcceew.gov.au/energy/renewables/hydrogen/headstart"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    DCCEEW – Hydrogen Headstart Program
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.dcceew.gov.au/energy/renewables/guarantee-origin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    DCCEEW – Guarantee of Origin Scheme
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // South Korea-specific legislation content
  if (selectedCountry === 'kr') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-red-50 to-blue-50 rounded-xl p-8 border border-blue-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Scale className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">South Korea Energy Policy & Regulation</h1>
              <p className="text-gray-600 mt-2">Comprehensive coverage of South Korea's hydrogen legislation and carbon neutrality commitments</p>
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="kr" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Production Standards</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Requirements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Clean hydrogen defined as renewable (green) and low-carbon (fossil with CCS)</li>
                    <li>Certification scheme with lifecycle CO₂ threshold ≤4&nbsp;kg CO₂e/kg H₂</li>
                    <li>Lifecycle emissions include imports ("well-to-port")</li>
                    <li>Participation in international clean hydrogen certification alignment</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Support Mechanisms</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Direct Subsidies</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Grants, tax breaks, and consumer incentives for FCEVs and stations</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">CfD / CCfD</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Clean Hydrogen Portfolio Standard (CHPS) with 15-year power contracts</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Tenders / Projects</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Hydrogen power auctions; hydrogen cities and industrial clusters</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">International Cooperation</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Agreements with Australia, U.S., Saudi Arabia on hydrogen supply chains</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Policies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Strategic Initiatives</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Hydrogen Economy Roadmap (2019); Hydrogen Act (2020)</li>
                    <li>Carbon neutrality by 2050; 40% GHG cut by 2030</li>
                    <li>Power mix 2030: ~21.6% renewables, 2% hydrogen/ammonia</li>
                    <li>Hydrogen hubs &amp; industrial decarbonization (steel, ammonia, power)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://english.motie.go.kr/eng/article/EATCLdfa319ada/1619/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    MOTIE – Clean Hydrogen Ecosystem Transition (2023)
                  </a>
                </li>
                <li>
                  <a
                    href="https://english.motie.go.kr/eng/article/EATCLdfa319ada/1120/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    MOTIE – Hydrogen Industry Policy Updates (2022)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.trade.gov/country-commercial-guides/south-korea-energy-carbon-neutrality-initiatives"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    U.S. Trade.gov – South Korea Energy &amp; Carbon Neutrality
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // India-specific legislation content
  if (selectedCountry === 'in') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-orange-50 to-green-50 rounded-xl p-8 border border-orange-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Scale className="h-8 w-8 text-orange-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">India Energy Policy & Regulation</h1>
              <p className="text-gray-600 mt-2">Comprehensive coverage of India's National Green Hydrogen Mission and renewable energy transition</p>
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="in" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Production Standards</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Requirements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Green hydrogen is defined (Jan 2023) as hydrogen with ≤2 kg CO₂e emissions per kg H₂ (12-month average), produced from renewable energy or biomass</li>
                    <li>Hydrogen from fossil fuels with carbon capture is excluded from the "green" definition (considered low-carbon but not green); current focus is on renewable and biomass pathways</li>
                    <li>A certification and emissions accounting framework is being developed – Bureau of Energy Efficiency (BEE) will accredit verifiers and certify green H₂ production projects</li>
                    <li>Renewable electricity is essential for green H₂ production; policies like 25-year interstate transmission fee waivers and easy open access for renewables are in place to facilitate dedicated RE supply</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Support Mechanisms</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">SIGHT Program</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Strategic Interventions for Green Hydrogen Transition (SIGHT) program (₹17,490 crore) offers financial incentives for domestic electrolyzer manufacturing and green hydrogen production</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Tenders / Projects</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Electrolyzer and H₂ production tenders have been launched: e.g. bids for 450,000 tons/year green hydrogen production and 1.5 GW/year electrolyzer capacity under SIGHT Tranche I</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Viability Gap Funding</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Viability Gap Funding (VGF) is planned to support initial green hydrogen/ammonia projects (especially for export), bridging the cost gap until the industry matures</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">R&amp;D and Innovation</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>R&amp;D and innovation are supported through grants and pilot projects – e.g. green steel, transport and shipping pilots – alongside production-linked incentives to spur new hydrogen technologies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Policies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">National Green Hydrogen Mission (2023)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>₹19,744 crore initiative to make India a global green hydrogen hub, targeting at least 5 MMT annual green H₂ production by 2030</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Net-Zero 2070 &amp; 500 GW by 2030</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>India's pledge to reach net-zero emissions by 2070 and install 500 GW of non-fossil power by 2030 drives massive renewable expansion to enable green hydrogen transition</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen hubs &amp; industrial decarbonization</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Plans to develop at least two green hydrogen hubs; green H₂ is prioritized for decarbonizing key industries like fertilizers (green ammonia), oil refining, and steel production</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Renewable energy infrastructure</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>New solar parks, wind farms, and Green Energy Corridors are being deployed for dedicated renewable supply and grid integration of hydrogen projects, ensuring reliable delivery of green power</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://mnre.gov.in/en/national-green-hydrogen-mission"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Ministry of New &amp; Renewable Energy – National Green Hydrogen Mission (2023)
                  </a>
                </li>
                <li>
                  <a
                    href="https://pib.gov.in/PressReleasePage.aspx?PRID=1950421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Press Information Bureau – India announces definition of Green Hydrogen (19 Aug 2023)
                  </a>
                </li>
                <li>
                  <a
                    href="https://pib.gov.in/PressReleasePage.aspx?PRID=1992732"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Press Information Bureau – Year End Review 2023 – MNRE (03 Jan 2024)
                  </a>
                </li>
                <li>
                  <a
                    href="https://pib.gov.in/PressReleasePage.aspx?PRID=1985572"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Press Information Bureau – Statement on National Green Hydrogen Mission (Rajya Sabha, 12 Dec 2023)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // France-specific legislation content
  if (selectedCountry === 'fr') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-8 border border-blue-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Scale className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">France Energy Policy & Regulation</h1>
              <p className="text-gray-600 mt-2">Comprehensive coverage of France's decarbonised hydrogen strategy and climate neutrality commitments</p>
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="fr" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Production Standards</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Requirements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>France legally distinguishes three categories of hydrogen – renewable, low-carbon and carbon-based – in the Energy Code (Ordonnance n°2021-167). Renewable and low-carbon hydrogen must comply with a greenhouse-gas intensity threshold aligned with EU rules (70% reduction vs fossil), set at ≤3.38 kg CO₂e per kg H₂ (life-cycle basis)</li>
                    <li><strong>Renewable hydrogen</strong> is produced from renewable energy (or certain sustainable biomass routes) and meets the 3.38 kg CO₂e/kg H₂ threshold. <strong>Low-carbon hydrogen</strong> meets the same emissions threshold but uses non-renewable low-carbon power (notably nuclear), or other low-carbon processes that do not qualify as renewable</li>
                    <li>A dual certification system – guarantees of origin (GO) and guarantees of traceability – certifies hydrogen as renewable or low-carbon. GOs/traceability certificates are issued per MWh of H₂, are valid for 12 months, and are managed in a national electronic registry</li>
                    <li>The 1 July 2024 arrêté specifies the detailed emissions threshold and the methodology for accounting life-cycle GHG emissions, ensuring consistency with EU RFNBO and low-carbon hydrogen delegated acts for project certification</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Support Mechanisms</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">National Funding</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>France's national hydrogen strategy (SNH I, updated by SNH II) mobilises roughly €9 billion of public support by 2030, combining the recovery plan and <em>France 2030</em> to develop domestic electrolyzer manufacturing and decarbonised hydrogen production</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">ADEME Programs</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>ADEME operates major funding calls such as <em>Écosystèmes territoriaux hydrogène</em> (local production–use hubs for mobility and industry) and <em>Briques technologiques et démonstrateurs hydrogène</em> to support innovation, pilots and first-of-a-kind industrial projects across the value chain</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Production CfD</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>A dedicated <strong>production support mechanism</strong> for decarbonised hydrogen by electrolysis – based on 15-year Contracts-for-Difference (CfD) – is being rolled out. The first wave (up to 200 MW of electrolysis, projects 5–100 MW) offers support of up to about €4/kg H₂, ultimately targeting around 1 GW of supported capacity for a total budget of ≈€4 billion</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Additional Support</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Additional support is provided via R&amp;D, innovation and industrialisation programmes (electrolyzer gigafactories, components, storage, mobility and industrial uses), skills and training initiatives, and state-aid schemes approved at EU level for clean hydrogen and related infrastructure</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Policies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">National Strategy for Decarbonised Hydrogen (2020, updated 2025)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>France's strategy aims to build a full domestic value chain and deploy 4.5 GW of electrolysis by 2030 (revised from 6.5 GW), with a perspective of 8 GW by 2035. Priority uses are industrial feedstock (refining, chemicals, steel) and hard-to-abate transport segments</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Climate neutrality 2050</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Under the Energy–Climate Law and France's long-term climate strategy, decarbonised hydrogen is identified as a key lever to reach net-zero by 2050, complementing electrification by targeting sectors where direct electrification is difficult</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen hubs and industrial decarbonisation</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Territorial hydrogen ecosystems co-funded by ADEME and France 2030 support clusters around ports, industrial basins and logistics corridors, replacing "grey" hydrogen and fossil fuels in refineries, chemicals, steel, and heavy mobility (trucks, buses, rail, maritime pilots)</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Integration with power system &amp; nuclear fleet</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Policy explicitly promotes "decarbonised" hydrogen from both renewable and nuclear electricity, leveraging the existing nuclear fleet and new renewables, and coordinating with grid planning to connect large electrolysers to low-carbon power</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.ecologie.gouv.fr/sites/default/files/documents/DP%20-%20Strat%C3%A9gie%20nationale%20pour%20le%20d%C3%A9veloppement%20de%20l%27hydrog%C3%A8ne%20d%C3%A9carbon%C3%A9%20en%20France.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Ministère de la Transition écologique – Stratégie nationale pour le développement de l'hydrogène décarboné en France (2020)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.economie.gouv.fr/actualites/hydrogene-un-nouvel-appel-projets-et-175-millions-deuros-supplementaires-pour-developper"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Ministère de l'Économie / Ministère de la Transition énergétique – Appel à projets « Écosystèmes territoriaux hydrogène » &amp; France 2030
                  </a>
                </li>
                <li>
                  <a
                    href="https://agirpourlatransition.ademe.fr/entreprises/aides-financieres/catalogue/aap/briques-technologiques-et-demonstrateurs-hydrogene"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ADEME – Appel à projets « Briques technologiques et démonstrateurs hydrogène »
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ecologie.gouv.fr/presse/lancement-du-mecanisme-soutien-production-dhydrogene-decarbone-0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Ministère de la Transition énergétique – Lancement du mécanisme de soutien à la production d'hydrogène décarboné (2024)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000043148001"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Légifrance – Ordonnance n°2021-167 du 17 février 2021 relative à l'hydrogène
                  </a>
                  {' '}&amp;{' '}
                  <a
                    href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000049870616"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Arrêté du 1er juillet 2024 précisant le seuil d'émissions de GES
                  </a>
                </li>
                <li>
                  <a
                    href="https://observatory.clean-hydrogen.europa.eu/hydrogen-landscape/policies-and-standards/national-strategies/france"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    European Hydrogen Observatory – France – Hydrogen Strategy Overview
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // Germany-specific legislation content
  if (selectedCountry === 'de') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-8 border border-yellow-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-yellow-100 p-3 rounded-lg">
              <Scale className="h-8 w-8 text-yellow-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Germany Energy Policy & Regulation</h1>
              <p className="text-gray-600 mt-2">Comprehensive coverage of Germany's National Hydrogen Strategy and renewable energy transition</p>
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="de" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Production Standards</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Requirements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Germany focuses on <strong>renewable ("green") hydrogen</strong> produced via electrolysis using renewable electricity, aligned with EU rules for renewable fuels of non-biological origin (RFNBOs), which require at least 70% greenhouse-gas savings versus the fossil comparator</li>
                    <li>For electricity used in electrolysers to qualify as "green hydrogen" under German law (e.g. for levy exemptions), the power must meet strict sustainability criteria (renewable origin, temporal and geographical correlation with the electrolyser's consumption, and additionality) that mirror the EU delegated acts under RED II/RED III</li>
                    <li>Section 69b of the Renewable Energies Act (EEG 2021) and related ordinances provide a <strong>full EEG-levy exemption</strong> for electricity used to produce green hydrogen, subject to detailed conditions on plant size, operating hours and compliance verification; similar rules are extended via the Energy Levies Act (EnUG)</li>
                    <li>Germany is aligning its national certification framework with emerging EU-wide schemes (guarantees of origin and RFNBO certification) so that both domestically produced and imported hydrogen can be recognised as renewable or low-carbon for support schemes and RED III targets</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Support Mechanisms</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">National Hydrogen Strategy</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The <strong>National Hydrogen Strategy</strong> (Nationale Wasserstoffstrategie, NWS) – backed by an initial €9 billion package and reinforced in the 2023 update – supports domestic electrolysis deployment, R&amp;D, and industrial use, with a target of at least <strong>10 GW electrolysis capacity by 2030</strong></li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">IPCEI Hydrogen</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Germany participates extensively in <strong>IPCEI Hydrogen</strong>, supporting 60+ large projects across the entire value chain – from electrolyser manufacturing and large-scale production to transport infrastructure and industrial and mobility applications – with more than €8 billion in combined federal and state funding</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">H2Global</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The <strong>H2Global</strong> scheme provides a double-auction mechanism and long-term contracts (around 10 years) to support imports of renewable hydrogen and derivatives; Germany has committed several billion euros to H2Global, with additional joint "funding windows" (e.g. with the Netherlands and other partners) for imports starting in the late 2020s</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Industrial Decarbonisation</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Further funding comes from national and EU programmes for industrial decarbonisation – including <em>Klimaschutzverträge</em> (carbon contracts for difference) and targeted support for hydrogen projects outside Europe – as well as R&amp;D and demonstration calls for technologies such as large-scale electrolysers, hydrogen storage and transport, and hydrogen-enabled industrial processes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Policies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">National Hydrogen Strategy (2020, updated 2023)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Germany's strategy establishes a comprehensive framework for hydrogen development, targeting 10 GW of domestic electrolysis capacity by 2030 and positioning Germany as a leader in hydrogen technologies and markets</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Climate Neutrality 2045</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Under the Federal Climate Change Act (Bundes-Klimaschutzgesetz), Germany aims for climate neutrality by 2045, with hydrogen playing a crucial role in decarbonising industry, transport and power generation where direct electrification is challenging</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen Core Network</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Germany is developing a national hydrogen pipeline network (Wasserstoff-Kernnetz), converting existing natural gas infrastructure and building new pipelines to connect production sites, storage facilities and industrial consumers, with initial operations planned for the late 2020s</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">International Partnerships</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Germany has established hydrogen partnerships with numerous countries (including Australia, Canada, Chile, Morocco, Namibia, Norway, and others) to secure imports of renewable hydrogen and derivatives, supporting both domestic demand and partner countries' hydrogen economies</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.bmwk.de/Redaktion/EN/Publikationen/Energie/the-national-hydrogen-strategy.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Federal Ministry for Economic Affairs and Climate Action – The National Hydrogen Strategy
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bmwk.de/Redaktion/EN/Publikationen/Energie/fortschreibung-der-nationalen-wasserstoffstrategie.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    BMWK – Update of the National Hydrogen Strategy (2023)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bmwk.de/Redaktion/EN/Artikel/Industry/ipcei-hydrogen.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    BMWK – IPCEI Hydrogen
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.h2global-stiftung.com/en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    H2Global Foundation
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gesetze-im-internet.de/eeg_2014/__69b.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Renewable Energies Act (EEG) – Section 69b (Green Hydrogen Levy Exemption)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.bundesnetzagentur.de/DE/Fachthemen/ElektrizitaetundGas/Netzausbau/Wasserstoffnetz/start.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Federal Network Agency – Hydrogen Core Network
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // US-specific legislation content
  if (selectedCountry === 'us') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-8 border border-blue-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Scale className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">United States Energy Policy & Regulation</h1>
              <p className="text-gray-600 mt-2">Comprehensive coverage of U.S. clean hydrogen strategy, IRA tax credits, and regional hydrogen hubs</p>
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="us" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Production Standards</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Key Requirements</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The U.S. Department of Energy (DOE) Clean Hydrogen Production Standard (CHPS) defines "clean hydrogen" as H₂ with ≤4.0 kg CO₂e per kg H₂ (well-to-gate lifecycle basis). This standard is currently guidance — not yet a final rule.</li>
                    <li>Clean hydrogen may be produced via renewables, nuclear, or fossil sources with carbon capture, as long as lifecycle emissions stay below the 4 kg CO₂e/kg threshold.</li>
                    <li>U.S. Treasury finalized lifecycle emissions rules for the 45V tax credit in Jan 2025 — using GREET-based modeling, with emissions tiers tied to tax credit levels.</li>
                    <li>Grid-connected electrolysis must meet new power rules: renewable/nuclear electricity must be demonstrably "deliverable," with annual matching allowed until 2030 and hourly matching required afterward.</li>
                    <li>DOE is developing a national tracking system for clean hydrogen carbon intensity certificates to enable verification for tax credits and offtake agreements.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Support Mechanisms</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Section 45V Tax Credit</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li><strong>Inflation Reduction Act – Section 45V:</strong> Clean hydrogen tax credit for 10 years, worth up to <strong>$3.00/kg</strong> for hydrogen ≤0.45 kg CO₂e/kg H₂, assuming: prevailing wage, apprenticeship, and clean power compliance.</li>
                    <li>
                      45V tiers include:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>≤4 kg CO₂e/kg → base credit (≈$0.60/kg)</li>
                        <li>≤1.5 kg CO₂e/kg → mid-level credit (≈$1.00/kg+)</li>
                        <li>≤0.45 kg CO₂e/kg → full $3/kg credit (if conditions met)</li>
                      </ul>
                    </li>
                    <li>Projects must begin construction by the current deadline — <strong>January 1, 2028</strong> — due to a 2025 Senate adjustment (down from 2033).</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Regional Clean Hydrogen Hubs</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li><strong>$7 billion Regional Clean Hydrogen Hubs (H2Hubs):</strong> 7 hubs selected; now in negotiation phase. Some budget reallocations expected, but hubs remain cornerstone deployments for industrial clusters &amp; infrastructure.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">DOE Loan Programs</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>DOE Loan Programs Office (LPO) offers large-scale financing under Title 17 for hydrogen projects: pipelines, storage caverns, electrolyzers, ammonia, etc.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen Shot</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li><strong>Hydrogen Shot:</strong> National initiative to cut cost to $1/kg by 2031, backed by R&amp;D funding, demonstration grants &amp; accelerated tech commercialization.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Policies</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">National Clean Hydrogen Strategy &amp; Roadmap (2023, updated 2024–25)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>
                      U.S. aims for:
                      <ul className="list-disc pl-5 mt-2 space-y-1">
                        <li>10 million tons/year by 2030</li>
                        <li>20 million by 2040</li>
                        <li>50 million by 2050</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Net-Zero by 2050</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Hydrogen is deployed for hard-to-electrify sectors — industrial heat, steel, chemicals, shipping, long-haul trucks and aviation fuels.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen infrastructure &amp; regulation</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Federal agencies (DOE, DOT, FERC, PHMSA) are developing safety, interstate pipeline, storage &amp; blending rules to enable a national H₂ market.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen hubs</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Deployment centers in heavy-industry regions (Midwest, Gulf Coast, Appalachia, West Coast, etc.) building production, pipelines, ammonia, refueling &amp; export terminals.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Clean power alignment</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Policies incentivize hydrogen from renewables and nuclear — including "24/7 clean power" structures, virtual power purchase agreements and hourly matching pathways.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.energy.gov/eere/fuelcells/clean-hydrogen-production-standard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    U.S. DOE – Clean Hydrogen Production Standard Guidance (2023–24)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.irs.gov/credits-deductions/clean-hydrogen-production-credit"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    U.S. Treasury – Final 45V Clean Hydrogen Tax Credit Rules (Jan 2025)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.federalregister.gov/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Federal Register – 45V Implementation &amp; Lifecycle GHG Methodology
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.energy.gov/eere/fuelcells/national-clean-hydrogen-strategy-roadmap"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    DOE – National Clean Hydrogen Strategy &amp; Roadmap (2023, updates 2024–25)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.energy.gov/oced/regional-clean-hydrogen-hubs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    DOE – Regional Hydrogen Hubs (H2Hubs) Program Overview
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.energy.gov/lpo/title-17-clean-energy-financing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    DOE Loan Programs Office – Title 17 Hydrogen Project Financing
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.energy.gov/eere/fuelcells/hydrogen-shot"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    DOE – Hydrogen Shot "1-1-1" Initiative
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // EU-specific legislation content
  if (selectedCountry === 'eu') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-blue-50 to-yellow-50 rounded-xl p-8 border border-blue-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Scale className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">European Union Energy Policy & Regulation</h1>
              <p className="text-gray-600 mt-2">Comprehensive coverage of EU's Fit for 55 package, RED III, hydrogen strategy and market reforms</p>
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="eu" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Policy Areas</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Renewable Energy Standards (RED III)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The revised Renewable Energy Directive (RED III – Directive (EU) 2023/2413) sets a binding EU-level target of at least <strong>42.5% renewables by 2030</strong> (with a 45% aspirational target), plus sector-specific goals for electricity, heating &amp; cooling, and transport. Member States must transpose most provisions by mid-2025 and implement streamlined permitting for renewables.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Carbon Pricing &amp; Emissions Trading (EU ETS &amp; ETS2)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The reformed EU ETS (Fit for 55 package) tightens the cap and extends coverage to <strong>maritime shipping as of 2024</strong>, with a phased-in obligation to surrender allowances. A separate ETS2 for buildings and road transport is set to start later this decade, alongside the Carbon Border Adjustment Mechanism (CBAM) for carbon-intensive imports.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Grid Modernization &amp; Market Design</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The <strong>Electricity Market Design reform</strong> (Directive (EU) 2024/1711 and Regulation (EU) 2024/1747) entered into force in July 2024. It promotes long-term contracts (PPAs, two-way CfDs), enhances consumer protection, strengthens flexibility (storage, demand response), and updates REMIT rules for market transparency and anti-manipulation.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Energy Efficiency Standards (EED 2023/1791)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The updated Energy Efficiency Directive makes efficiency a binding principle and sets an EU-wide target of <strong>11.7% reduction in energy consumption by 2030</strong> compared with projected use. It introduces stronger annual savings obligations, a 1.9% yearly reduction target for the public sector, and a 3% annual renovation rate for public buildings.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen &amp; Low-Carbon Fuels</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The EU Hydrogen Strategy and REPowerEU aim for up to <strong>10 Mt domestic</strong> and <strong>10 Mt imported renewable hydrogen by 2030</strong>. RFNBO delegated acts define what counts as "renewable hydrogen" (additionality, temporal &amp; geographic correlation), while a low-carbon hydrogen delegated act sets a <strong>70% GHG-savings threshold</strong> for non-renewable but low-carbon hydrogen and fuels.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hydrogen &amp; Clean Fuels Instruments</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">European Hydrogen Bank &amp; Innovation Fund</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The European Hydrogen Bank runs hydrogen auctions via the Innovation Fund. The <strong>second auction (2025)</strong> awarded ~€992 million to 15 renewable hydrogen projects across five countries, targeting about 2.2 Mt of renewable H₂ over 10 years. Some winning projects have since withdrawn, and reserve projects are being invited, highlighting both strong interest and financing challenges.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Upcoming auctions &amp; "Auctions-as-a-Service"</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>A third hydrogen auction and a pilot auction for industrial process heat are planned for 2025, with a combined budget of over €2 billion. Member States can co-fund projects via a national "auction-as-a-service" window under the Hydrogen Bank.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">IPCEIs &amp; national schemes</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Several Important Projects of Common European Interest (Hy2Tech, Hy2Use, etc.) plus national-level CfDs, CAPEX/OPEX support and state-aid frameworks back electrolyser manufacturing, industrial switching, hydrogen infrastructure and synthetic fuels.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Developments</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Electricity Market Design Reform in force (2024–2025)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The new market design rules entered into force on <strong>16 July 2024</strong>, with transposition deadlines in January 2025. They keep marginal pricing in short-term markets but put more emphasis on long-term contracts, flexibility, capacity mechanisms, and consumer-protection tools (such as regulated fixed-price offers and hedging obligations for suppliers).</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Affordable Energy Action Plan (2025)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>As part of the Clean Industrial Deal, the Commission announced an Affordable Energy Action Plan in February 2025, focused on lowering electricity bills, improving hedging and forward markets, accelerating permitting for renewables, and preparing a <strong>"Grid Package" for 2026</strong>, plus an Electrification Action Plan for 2026 covering industry, transport and heating.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Guidance for RED III &amp; Market Design (July 2025)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>To support implementation of RED III and the market design reform, the Commission issued guidance and recommendations in July 2025 (e.g. on innovative renewables, agrisolar, and flexibility solutions) to help Member States transpose and apply the new rules.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">ETS Implementation &amp; Expansion</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Maritime shipping was brought into the ETS from <strong>January 2024</strong>, with a phased-in surrender obligation through 2026. Work continues on ETS2 for buildings and road transport and on integrating ETS revenues into the Innovation Fund and Social Climate Fund.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Market Reforms &amp; Security of Supply</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Following the 2022–2023 energy crisis, reforms now prioritise resilience and flexibility: capacity mechanisms are less "last resort," REMIT II strengthens monitoring of wholesale markets, and transmission-system planning is being updated (e.g. revised ERAA methodology) to reflect higher shares of variable renewables and cross-border interconnection needs.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Regulatory Compliance &amp; Reporting</h3>
              <div className="space-y-4">
                <div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Companies must navigate a layered framework: EU Regulations/Directives (RED III, EED, ETS, CBAM, Electricity Market Design, Hydrogen Acts), national transposition laws, and guidance documents.</li>
                    <li>Compliance involves monitoring evolving implementing acts, delegated acts, auction rulebooks, and national support schemes (CfDs, tenders, premium contracts) that may set additional criteria for "renewable" or "low-carbon" classification.</li>
                    <li>Reporting is increasingly aligned with EU-wide methodologies (lifecycle GHG accounting, guarantee of origin systems, RFNBO certification, and sustainability criteria for bioenergy and fuels).</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://energy.ec.europa.eu/topics/renewable-energy/renewable-energy-directive-targets-and-rules/renewable-energy-directive_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    European Commission – Renewable Energy Directive (RED III – Directive (EU) 2023/2413)
                  </a>
                </li>
                <li>
                  <a
                    href="https://energy.ec.europa.eu/topics/energy-efficiency/energy-efficiency-targets-directive-and-rules/energy-efficiency-directive_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    European Commission – Energy Efficiency Directive 2023/1791 and energy efficiency targets
                  </a>
                </li>
                <li>
                  <a
                    href="https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Fit for 55 package – EU ETS reform, ETS2, and CBAM
                  </a>
                </li>
                <li>
                  <a
                    href="https://energy.ec.europa.eu/topics/markets-and-consumers/market-legislation/electricity-market-design_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Electricity Market Design reform – Directive (EU) 2024/1711 &amp; Regulation (EU) 2024/1747
                  </a>
                </li>
                <li>
                  <a
                    href="https://energy.ec.europa.eu/topics/energy-systems-integration/hydrogen_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    European Hydrogen Strategy, RFNBO delegated acts &amp; low-carbon hydrogen delegated act
                  </a>
                </li>
                <li>
                  <a
                    href="https://climate.ec.europa.eu/eu-action/eu-funding-climate-action/innovation-fund/european-hydrogen-bank_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    European Hydrogen Bank / Innovation Fund – 1st &amp; 2nd hydrogen auctions (2024–2025)
                  </a>
                </li>
                <li>
                  <a
                    href="https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/european-green-deal/clean-industrial-deal_en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Clean Industrial Deal &amp; Affordable Energy Action Plan (2025)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // UK-specific legislation content
  if (selectedCountry === 'uk') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-blue-50 to-red-50 rounded-xl p-8 border border-blue-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Scale className="h-8 w-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">United Kingdom Energy Policy & Regulation</h1>
              <p className="text-gray-600 mt-2">Comprehensive coverage of UK's net-zero targets, hydrogen strategy, and electricity market reforms</p>
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="uk" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Policy Areas</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Net Zero &amp; Climate Targets</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The UK has a legally binding target to reach <strong>net zero greenhouse gas emissions by 2050</strong>, with five-year carbon budgets set under the Climate Change Act. Government plans include a <strong>fully decarbonised power system by 2035</strong> (subject to security of supply) and updated Carbon Budget Delivery / Carbon Budget and Growth Delivery Plans to meet the 4th–6th carbon budgets.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Renewable &amp; Low-Carbon Power</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The <em>British Energy Security Strategy</em> and <em>Powering Up Britain</em> set out ambitions for up to <strong>50 GW of offshore wind by 2030</strong> (including floating wind), major solar expansion, new nuclear (including SMRs), and gas with CCUS, supported primarily by the <strong>Contracts for Difference (CfD)</strong> scheme and the Capacity Market.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Carbon Pricing &amp; UK ETS</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The UK Emissions Trading Scheme (UK ETS) is the main carbon pricing instrument, covering power, industry and aviation, with a declining cap aligned with carbon budgets. Reforms are underway to tighten the cap, extend coverage, and coordinate with wider net-zero policy.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Energy Efficiency &amp; Buildings</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The <strong>Energy Company Obligation (ECO4, 2022–2026)</strong> and related schemes target home retrofits, fuel poverty reduction and emissions cuts through insulation, heating upgrades, and efficiency measures. Minimum energy efficiency standards and boiler/heat pump policies support the shift to low-carbon heating.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Security of Supply &amp; Energy Independence</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The <em>Powering Up Britain – Energy Security Plan</em> balances accelerated deployment of renewables, nuclear and low-carbon hydrogen with the managed role of domestic oil and gas in the transition, aiming for lower consumer bills and reduced exposure to volatile gas prices.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hydrogen &amp; Clean Fuels</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">UK Low Carbon Hydrogen Standard (LCHS)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Defines "low carbon hydrogen" as hydrogen with lifecycle emissions at or below <strong>20 gCO₂e/MJ (LHV)</strong> – roughly 2.4 kgCO₂e per kg H₂ – up to the point of production. Producers must use the UK methodology and tools (e.g. Hydrogen Emissions Calculator) and comply with sustainability, fugitive emissions and reporting requirements.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen Production Business Model &amp; LCHAs</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The UK uses a revenue-support model, with <strong>Low Carbon Hydrogen Agreements (LCHAs)</strong> providing a CfD-style strike price vs reference price for eligible low-carbon hydrogen projects. <strong>Hydrogen Allocation Rounds (HARs)</strong> (HAR1, HAR2, HAR3) award contracts competitively.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen Strategy &amp; Capacity Targets</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The UK Hydrogen Strategy and subsequent updates set an ambition of up to <strong>10 GW of low-carbon hydrogen production capacity by 2030</strong>, with at least half from electrolytic (green) hydrogen. Hydrogen is prioritised for industrial decarbonisation, dispatchable power, heavy transport, and as a feedstock (e.g. ammonia).</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">CCUS &amp; Industrial Clusters</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Hydrogen deployment is closely tied to <strong>CCUS "Track 1" and "Track 2" clusters</strong>, where blue hydrogen (natural gas with CCS) and green hydrogen can serve refineries, chemicals, power, and heavy industry within industrial decarbonisation hubs.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Electricity Market &amp; Grid Reform</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Review of Electricity Market Arrangements (REMA)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>An ongoing, multi-year review of GB power market design to support a highly renewable, flexible and secure system. Options assessed include changes to pricing signals, flexibility markets, capacity mechanisms, and ancillary services – with a focus on investment certainty and consumer protection.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Zonal Pricing Decision</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Following consultation, the government has <strong>dropped proposals for zonal (locational) wholesale pricing</strong>, instead pursuing more incremental reforms (e.g. network charging changes, flexibility markets, storage incentives) to address grid constraints and curtailment.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Grid Modernisation &amp; Connections</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Policy initiatives aim to accelerate grid reinforcement and connections (queue reforms, strategic network planning, anticipatory investment) so that new renewables, storage and large loads (e.g. electrolysers, data centres) can connect faster.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">CfD Scheme for Low-Carbon Power</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The CfD regime remains the main mechanism for large-scale low-carbon generation, with successive allocation rounds (ARs) for offshore wind, onshore wind, solar, geothermal, tidal, and in future possibly CCUS-enabled power and advanced nuclear.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Developments</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Carbon Budget &amp; Growth Delivery Plan (2025)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>A revised cross-economy plan (October 2025) sets out how the UK intends to meet carbon budgets 4–6, with updates on power, buildings, industry, transport and land-use policies, and new funding streams announced in the 2025 Spending Review.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen Allocation Rounds Progress</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>HAR1 contracts were signed in 2024, with further capacity targeted via HAR2 and HAR3 to move toward the 10 GW 2030 ambition. Standard LCHA terms and conditions have been refined based on early rounds.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Emissions Trends</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>UK greenhouse gas emissions continue to fall, with recent data showing further reductions driven by the phase-out of coal, growth in renewables and industrial change. Power sector emissions have dropped particularly quickly as coal is removed and gas use falls.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Net Zero Debate</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>While the statutory 2050 net-zero target remains in place, political debate on timing, costs and policy design has intensified, including over interim targets, EV phase-out dates, and support for low-carbon heating.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Regulatory Compliance &amp; Reporting</h3>
              <div className="space-y-4">
                <div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Energy companies and project developers must navigate overlapping regimes: <strong>UK ETS, CfD and Capacity Market rules, LCHS &amp; LCHA criteria, planning and environmental consents, grid connection codes</strong>, and consumer-facing protections in retail markets.</li>
                    <li>Hydrogen projects seeking support under the Hydrogen Production Business Model or Net Zero Hydrogen Fund must demonstrate compliance with the LCHS, robust lifecycle GHG accounting, and sustainability criteria for feedstocks and electricity use.</li>
                    <li>Reporting requirements increasingly use standardised templates and tools (e.g. emissions calculators, Ofgem guidance, UK ETS monitoring/verification) to assure consistency and comparability across projects and sectors.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://www.gov.uk/government/publications/uk-hydrogen-strategy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    UK Hydrogen Strategy &amp; Hydrogen Strategy Updates to the Market (incl. Dec 2024)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/government/publications/uk-low-carbon-hydrogen-standard"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    UK Low Carbon Hydrogen Standard – guidance, calculator and government response
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/government/collections/hydrogen-production-business-model"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Hydrogen Production Business Model – Low Carbon Hydrogen Agreement &amp; Hydrogen Allocation Rounds
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/government/publications/powering-up-britain"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Powering Up Britain – Energy Security Plan &amp; Net Zero Growth Plan
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/government/collections/contracts-for-difference"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Contracts for Difference (CfD) scheme – DESNZ &amp; LCCC publications
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/government/consultations/review-of-electricity-market-arrangements"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Review of Electricity Market Arrangements (REMA) – Autumn 2024 &amp; Summer 2025 updates
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.gov.uk/government/publications/carbon-budget-delivery-plan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Carbon Budget and Growth Delivery Plan (2025) &amp; UK Net Zero by 2050 briefings
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.ofgem.gov.uk/environmental-and-social-schemes/energy-company-obligation-eco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Energy Company Obligation (ECO4) guidance &amp; Ofgem scheme documents
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // Japan-specific legislation content
  if (selectedCountry === 'jp') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-red-50 to-white rounded-xl p-8 border border-red-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <Scale className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Japan Energy Policy & Regulation</h1>
              <p className="text-gray-600 mt-2">Comprehensive coverage of Japan's carbon neutrality goals, hydrogen strategy, and renewable energy expansion</p>
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="jp" className="scroll-mt-24">
          <div className="space-y-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Policy Areas</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Renewable Energy &amp; Power Mix</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Japan's latest strategic energy plan (Seventh Strategic Energy Plan) sets more ambitious targets: aiming for renewables to become a mainstream power source, with a target share of <strong>~40-50% by FY2040</strong>. At the same time, nuclear is being repositioned and coal usage phased down.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Carbon Pricing &amp; Emissions Reductions</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Japan has reaffirmed its goal of <strong>carbon neutrality by 2050</strong>. It has also adopted new decarbonisation targets: e.g., <strong>~60% reduction by 2035, ~73% by 2040</strong> from 2013 levels.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Grid &amp; Market Reform / Flexibility</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>With increasing variable renewables, Japan is advancing grid modernisation, storage (battery systems), demand-side management, and regulatory changes to support offshore/wind expansion.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Energy Efficiency &amp; Demand-Side Measures</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Japan continues to strengthen regulatory and voluntary frameworks for energy efficiency — e.g., the Energy Conservation Act and promotion of next-gen technologies and buildings under the "GX" (green transformation) agenda.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen &amp; Low-Carbon Fuels</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Hydrogen is a strategic pillar: both green hydrogen (electrolysis + renewables) and low-carbon hydrogen (e.g., from fossil with CCS) are included. Japan's ambition: <strong>3 million tonnes of hydrogen supply by 2030, 12 million by 2040, 20 million by 2050</strong>.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Hydrogen &amp; Clean Fuels Instruments</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Basic Hydrogen Strategy</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Launched 2017 (first of its kind globally) and updated, it lays out a multi-phase approach: expansion of use, scaling supply/chains, and full decarbonised hydrogen supply system by ~2040.</li>
                    <li>Target cost reduction: For example, aiming to reduce hydrogen supply cost to <strong>~¥30 per Nm³ by 2030, and ¥20 per Nm³ by 2050</strong>.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">International hydrogen supply chain</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Japan emphasises import of low-carbon/green hydrogen &amp; ammonia, global partnerships, technology leadership in hydrogen and fuel-cells.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">National deployment targets</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>According to recent data, solar capacity is to grow (e.g., plan to reach <strong>108 GW by 2030</strong>) and offshore wind is growing, supporting hydrogen/electrolysis load.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Recent Developments</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Offshore / EEZ Wind Legislation (June 2025)</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Japan passed the "EEZ Law" amendment allowing offshore wind farms in the Exclusive Economic Zone, opening large-scale potential for floating offshore wind.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Renewables Capacity Push</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>The corporate initiative RE100 called in June 2024 for Japan to triple renewables capacity by 2035 (from ~121 GW in 2022 to ~363 GW), citing current market challenges.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Nuclear Repositioning</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>A draft strategic energy plan (Feb 2025) signals a shift: aiming nuclear share <strong>~20% by 2040</strong>, with renewables 40-50%. This marks a change from previous emphasis on reducing nuclear.</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Regulatory Frameworks for Offshore Renewables</h4>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>In March 2025 the Cabinet approved a bill to amend the Marine Renewable Energy Act to allow EEZ based renewable projects.</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Regulatory Compliance &amp; Reporting</h3>
              <div className="space-y-4">
                <div>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Companies and developers must navigate multiple laws: e.g., the Renewable Energy Act, Electricity Business Act, Marine Renewable Energy Act amendments, Hydrogen Strategy guidelines, and the Basic Hydrogen Strategy's criteria for hydrogen production and supply chains.</li>
                    <li>For hydrogen and ammonia imports/production, attention must be paid to cost reduction targets, supply chain rules, lifecycle emissions and technology standards — especially as Japan aligns with global frameworks.</li>
                    <li>For renewables, developers face connection and grid access challenges, especially large-scale wind/solar projects, and must comply with local permitting, environmental impact assessments, and local stakeholder consultation (recent rules introduced requiring explanatory meetings for locals).</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">References</h3>
              <ul className="list-disc pl-5 space-y-2 text-gray-600">
                <li>
                  <a
                    href="https://iclg.com/practice-areas/renewable-energy-laws-and-regulations/japan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    ICLG – Renewable Energy Laws and Regulations Japan (2026 edition)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.meti.go.jp/english/policy/energy_environment/hydrogen/index.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    METI – Basic Hydrogen Strategy (2023 version)
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.enecho.meti.go.jp/en/category/others/basic_plan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Japan's Seventh Strategic Energy Plan
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.renewable-ei.org/en/activities/reports/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Renewable Energy Institute – Japan hydrogen strategy analysis
                  </a>
                </li>
                <li>
                  <a
                    href="https://apnews.com/article/japan-energy-carbon-emissions-climate-change"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Japan's new carbon reduction &amp; energy plan – AP News Feb 2025
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.reuters.com/sustainability/climate-energy/japans-re100-firms-call-tripling-renewables-capacity-by-2035-2024-06-05/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    RE100 call for tripling renewables capacity in Japan – Reuters June 2024
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.renewable-ei.org/en/activities/column/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Japan offshore wind EEZ law amendment – Renewable Energy Institute
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // Vietnam-specific video content
  if (selectedCountry === 'vn') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-xl p-8 border border-red-100">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-red-100 p-3 rounded-lg">
              <Scale className="h-8 w-8 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Vietnam Energy Policy & Regulation</h1>
              <p className="text-gray-600 mt-2">Comprehensive coverage of Vietnam's energy legislation and net-zero commitments</p>
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        {/* Featured Video Section */}
        <section className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-red-600 to-yellow-600 p-6 text-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-white/20 p-2 rounded-lg">
                <Play className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold">Vietnam's Energy Revolution</h2>
            </div>
            <p className="text-red-100">
              Exclusive analysis of Vietnam's ambitious $2.4 trillion energy transformation and race to net-zero by 2050
            </p>
          </div>

          <div className="p-8">
            {/* Video Embed */}
            <div className="relative aspect-video mb-6 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/qOvKsLqQkpc"
                title="Vietnam's $2.4 Trillion Energy Revolution: Solar, Wind, and the Race to Net-Zero by 2050"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Video Title and Description */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Vietnam's $2.4 Trillion Energy Revolution: Solar, Wind, and the Race to Net-Zero by 2050
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Vietnam, one of Southeast Asia's fastest-growing economies, made a bold commitment at COP26: 
                to achieve net-zero emissions by 2050. This video dives into the massive transformation 
                required to fulfill that climate promise and secure a green future.
              </p>
              <p className="text-gray-600 leading-relaxed">
                To understand how Vietnam can balance the emissions produced (e.g., from fossil fuels) 
                with the emissions removed (e.g., carbon capture or forests), analysts focus on the 
                Net Zero Scenario (NZS), which requires decisive climate action.
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-6 w-6 text-blue-600" />
                  <h4 className="text-xl font-bold text-gray-800">1. The Scale and Strategy</h4>
                </div>
                <p className="text-gray-700 mb-4">
                  To meet the 2050 goal, Vietnam must accelerate its timeline, requiring national emissions 
                  to peak by 2026. The blueprint relies on a three-pronged strategy, or "abatement drivers," 
                  which account for 78% of the necessary emissions reductions:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-5 w-5 text-yellow-600" />
                      <span className="font-semibold text-gray-800">Clean Power (36%)</span>
                    </div>
                    <p className="text-gray-600 text-sm">Massively expanding renewable energy sources, primarily solar and wind</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      <span className="font-semibold text-gray-800">CCS (27%)</span>
                    </div>
                    <p className="text-gray-600 text-sm">Technology that traps CO₂ from heavy industry and power plants</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-blue-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="h-5 w-5 text-purple-600" />
                      <span className="font-semibold text-gray-800">Energy Efficiency (15%)</span>
                    </div>
                    <p className="text-gray-600 text-sm">Using less energy in homes, buildings, and industrial processes</p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                <div className="flex items-center gap-3 mb-4">
                  <DollarSign className="h-6 w-6 text-green-600" />
                  <h4 className="text-xl font-bold text-gray-800">2. The Investment Engine</h4>
                </div>
                <p className="text-gray-700 mb-4">
                  The transition requires a colossal total investment of <strong>$2.4 trillion</strong> between 2024 and 2050. 
                  This funding is split across energy generation (supply) and energy use (demand):
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-3">Energy Supply ($1.4 trillion)</h5>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• 39% for renewable power plants</li>
                      <li>• 23% for power grid upgrades</li>
                      <li>• Remaining for supporting infrastructure</li>
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h5 className="font-semibold text-gray-800 mb-3">Energy Demand ($1.0 trillion)</h5>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• 80% for Electric Vehicles (EVs)</li>
                      <li>• 20% for other demand-side technologies</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                  <h4 className="text-xl font-bold text-gray-800">3. The Crucial Role of Private Capital</h4>
                </div>
                <p className="text-gray-700 mb-4">
                  Public funds alone cannot finance this transformation. The annual investment needed for 
                  the power sector alone is <strong>$26.5 billion</strong>, significantly more than the 
                  $15–$18 billion the government has available for all infrastructure.
                </p>
                <div className="bg-white rounded-lg p-4 border border-purple-200">
                  <h5 className="font-semibold text-gray-800 mb-2">Private Capital Benefits:</h5>
                  <ul className="space-y-1 text-gray-600 text-sm">
                    <li>• Technology transfer and expertise</li>
                    <li>• Enhanced competitiveness</li>
                    <li>• Essential for large-scale projects like offshore wind</li>
                    <li>• Bridges the critical financial gap</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="h-6 w-6 text-amber-600" />
                  <h4 className="text-xl font-bold text-gray-800">4. The Land Challenge</h4>
                </div>
                <p className="text-gray-700 mb-4">
                  One of the greatest non-financial obstacles is the vast land requirement for renewables. 
                  Under the Net Zero Scenario:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Onshore Wind</h5>
                    <p className="text-gray-600 text-sm">Would require <strong>65%</strong> of Vietnam's suitable land</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 border border-amber-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Solar Farms</h5>
                    <p className="text-gray-600 text-sm">Would require <strong>9%</strong> of Vietnam's suitable land</p>
                  </div>
                </div>
                <p className="text-gray-700 mt-4">
                  This highlights the need for strategic planning to avoid competition with agriculture and forest conservation.
                </p>
              </div>
            </div>

            {/* Call to Action Section */}
            <div className="bg-gradient-to-r from-electric-50 to-teal-50 rounded-xl p-8 border border-electric-100 mt-8">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  Stay Connected for More Energy Insights
                </h3>
                <p className="text-gray-600">
                  Vietnam has multiple viable paths to achieve a net-zero power system by or even before 2050, 
                  demonstrating that a sustainable future is an achievable reality.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://www.youtube.com/@TheCurrentSource"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors font-medium group"
                >
                  <Youtube className="h-5 w-5" />
                  Subscribe on YouTube
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="https://thecurrentsource.net"
                  className="inline-flex items-center gap-2 bg-electric text-white px-6 py-3 rounded-lg hover:bg-electric-600 transition-colors font-medium group"
                >
                  <Globe className="h-5 w-5" />
                  Visit TheCurrentSource.net
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a
                  href="https://it.linkedin.com/in/the-current-source-616307380"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium group"
                >
                  <Linkedin className="h-5 w-5" />
                  Follow on LinkedIn
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              <div className="text-center mt-6">
                <p className="text-gray-600 font-medium">
                  TheCurrentSource.net: <span className="text-electric">Plugged Into Energy News</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Vietnam Policy Information */}
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-electric" />
            <h2 className="text-2xl font-semibold text-gray-800">Vietnam Energy Policy Framework</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Policy Documents</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">National Energy Development Strategy to 2030, Vision to 2045</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Power Development Plan VIII (PDP8)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">National Determined Contribution (NDC) 2022</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Green Growth Strategy 2021-2030</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Regulatory Framework</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Electricity Law 2024</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Renewable Energy Development Decree</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-teal rounded-full mt-2 flex-shrink-0"></span>
                    <span className="text-gray-600">Feed-in Tariff Mechanisms</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Key Targets</h3>
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-green-800 mb-2">2030 Targets</h4>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• 15-20% renewable energy in total primary energy</li>
                      <li>• 30% renewable electricity generation</li>
                      <li>• 27% reduction in energy intensity</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <h4 className="font-semibold text-blue-800 mb-2">2050 Vision</h4>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• Net-zero emissions commitment</li>
                      <li>• Carbon-neutral power sector</li>
                      <li>• Sustainable energy system</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <EmailSignup />
      </div>
    );
  }

  // Default legislation content for other countries
  return (
    <div className="max-w-6xl mx-auto space-y-8">
      {/* Country Selection */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <Scale className="h-6 w-6 text-electric" />
            <h1 className="text-3xl font-bold text-gray-800">Energy Policy & Regulation</h1>
          </div>
          {/* Mobile: Show compact country selector */}
          <div className="md:hidden relative">
            <select
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              className="px-4 py-2 border-2 border-electric rounded-lg bg-white text-gray-800 font-medium appearance-none pr-10 cursor-pointer hover:bg-electric-50 transition-colors"
            >
              {countries.map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
            <ChevronRight className="h-4 w-4 text-electric absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
          </div>
        </div>

        <EnergyPolicyAd />

        {/* Desktop: Show full country grid */}
        <div className="hidden md:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {countries.map((country) => (
            <button
              key={country.id}
              onClick={() => setSelectedCountry(country.id)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedCountry === country.id
                  ? 'border-electric bg-electric-50 text-electric-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-700'
              }`}
            >
              <div className="font-medium">{country.name}</div>
              <div className="text-sm opacity-75">{country.code}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Selected Country Content */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
        <div className="flex items-center gap-3 mb-6">
          <Globe className="h-6 w-6 text-electric" />
          <h2 className="text-2xl font-semibold text-gray-800">{countryName} Energy Policy</h2>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-600 leading-relaxed">
            Comprehensive coverage of {countryName} energy legislation, regulatory frameworks, 
            and policy developments. Stay informed about the latest changes in energy law, 
            renewable energy incentives, and regulatory compliance requirements.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Key Policy Areas</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Renewable Energy Standards</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Carbon Pricing and Emissions Trading</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Grid Modernization and Smart Grid Policies</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                  <span className="text-gray-600">Energy Efficiency Standards</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Developments</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Policy Updates</h4>
                  <p className="text-gray-600 text-sm">
                    Latest regulatory changes and legislative developments in the energy sector.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-medium text-gray-800 mb-2">Market Reforms</h4>
                  <p className="text-gray-600 text-sm">
                    Ongoing reforms to energy markets and regulatory frameworks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
            <h3 className="text-lg font-semibold text-blue-800 mb-3">Stay Updated</h3>
            <p className="text-blue-700 mb-4">
              Energy policy is constantly evolving. Subscribe to our newsletter to receive 
              weekly updates on {countryName} energy legislation and regulatory changes.
            </p>
            <a
              href="/newsletter"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Subscribe to Updates
              <ChevronRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      <EmailSignup />
    </div>
  );
}