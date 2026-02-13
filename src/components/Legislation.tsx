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

  // Brazil-specific legislation content
  if (selectedCountry === 'br') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-green-50 to-yellow-50 rounded-xl p-8 border border-green-100">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Scale className="h-8 w-8 text-green-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">Brazil Energy Policy & Regulation</h1>
                <p className="text-gray-600 mt-2">Comprehensive coverage of Brazil's climate commitments, renewable expansion, and energy market reforms</p>
              </div>
            </div>
            {/* Mobile: Show compact country selector */}
            <div className="md:hidden relative flex-shrink-0">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-3 py-2 border-2 border-green-400 rounded-lg bg-white text-gray-800 font-medium appearance-none pr-8 cursor-pointer hover:bg-green-50 transition-colors text-sm"
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              <ChevronRight className="h-4 w-4 text-green-600 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="br" className="scroll-mt-24">
          <div className="space-y-8">
            {/* Net Zero & Climate Targets */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Net Zero & Climate Targets
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-100">
                  <h4 className="font-medium text-gray-800 mb-3">2050 Net-Zero Goal</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Brazil has pledged to achieve climate neutrality by 2050, reiterating this target in its updated 2023 NDC.
                    The commitment is backed by legislation in progress to make net-zero by 2050 a statutory requirement.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3 mt-4">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="text-sm font-medium text-green-700 mb-1">2025 Target</div>
                      <div className="text-xl font-bold text-gray-800">37% Cut</div>
                      <div className="text-xs text-gray-600">vs. 2005 levels</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="text-sm font-medium text-green-700 mb-1">2030 Target</div>
                      <div className="text-xl font-bold text-gray-800">50% Cut</div>
                      <div className="text-xs text-gray-600">vs. 2005 levels</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="text-sm font-medium text-green-700 mb-1">2035 Target</div>
                      <div className="text-xl font-bold text-gray-800">59-67% Cut</div>
                      <div className="text-xs text-gray-600">vs. 2005 levels</div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Ecological Transformation Plan</h4>
                  <p className="text-gray-600 leading-relaxed">
                    The 2023 framework links climate action with development goals, seeking a just transition through
                    measures spanning clean energy, sustainable farming, and green finance. Achieving these targets requires
                    economy-wide action, especially curbing deforestation and emissions from agriculture and energy.
                  </p>
                </div>
              </div>
            </div>

            {/* Renewable & Low-Carbon Power */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-600" />
                Renewable & Low-Carbon Power
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-5 border border-yellow-100">
                  <h4 className="font-medium text-gray-800 mb-3">92% Renewable Electricity</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Brazil's power sector is already one of the cleanest in the world, with about 92% of electricity from
                    renewable sources, thanks to extensive hydroelectric capacity complemented by growing wind and solar generation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h5 className="font-semibold text-gray-800 mb-2">2030 Projections</h5>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Solar PV: ~47 GW capacity</li>
                        <li>• Wind: ~31 GW capacity</li>
                        <li>• Actual deployment outpacing targets</li>
                        <li>• IEA projects 115 GW solar, 40 GW wind by 2028</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-yellow-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Key Developments</h5>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Regular energy auctions for new capacity</li>
                        <li>• Offshore wind framework established (2022)</li>
                        <li>• Angra 3 nuclear reactor by 2026</li>
                        <li>• Gas and biomass for renewable backup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Carbon Pricing & Market Mechanisms */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Carbon Pricing & Market Mechanisms
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border border-blue-100">
                  <h4 className="font-medium text-gray-800 mb-3">Brazilian Emissions Trading System (SBCE)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    In late 2024, Congress approved Brazil's first regulated cap-and-trade program. Once enacted, the SBCE
                    will set gradually declining emission caps on major sectors and allow trading of allowances among the
                    largest sources of GHGs.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-blue-200 mt-3">
                    <h5 className="font-semibold text-gray-800 mb-2">RenovaBio Program</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      National Biofuels Policy imposes carbon-intensity reduction targets on fuel distributors through CBIO credits:
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• 11.37% cut in transport fuel emissions by 2034 (vs. 2018)</li>
                      <li>• 72.5 million CBIOs required in 2034</li>
                      <li>• Voluntary offset market in forestry</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Energy Efficiency & Buildings */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                Energy Efficiency & Buildings
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  The latest PDE 2034 sets a goal to reduce Brazil's projected energy consumption by about 7% through
                  efficiency measures by 2034, equivalent to the annual usage of major industrial sectors like steel and cement.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                    <h4 className="font-semibold text-gray-800 mb-2">Buildings</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• PBE Edifica voluntary rating system</li>
                      <li>• Incentives for efficient construction</li>
                      <li>• PROCEL appliance labeling program</li>
                      <li>• Tightening equipment standards</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-4 border border-purple-100">
                    <h4 className="font-semibold text-gray-800 mb-2">Industry</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Modernizing motors, boilers, processes</li>
                      <li>• Green financing from BNDES</li>
                      <li>• Demand response solutions</li>
                      <li>• Smart grid deployment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Security of Supply & Energy Independence */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-red-600" />
                Security of Supply & Energy Independence
              </h3>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  Brazil is energy-independent in many respects – a net exporter of oil and biofuels with huge hydropower
                  reservoirs providing energy security.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-800 mb-2">Oil & Gas Outlook</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Peak production: ~5.3 million barrels/day by 2030</li>
                      <li>• Pre-salt offshore fields driving output</li>
                      <li>• Gas output to nearly double by 2034</li>
                      <li>• R$2.4 trillion investment in gas infrastructure</li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border border-red-100">
                    <h4 className="font-semibold text-gray-800 mb-2">Diversification Strategy</h4>
                    <ul className="space-y-2 text-gray-600 text-sm">
                      <li>• Reducing over-reliance on hydropower</li>
                      <li>• Expanding solar, wind, battery storage</li>
                      <li>• Capacity reserve mechanism for backup</li>
                      <li>• Inter-regional transmission improvements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Hydrogen & Clean Fuels */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-teal-600" />
                Hydrogen & Clean Fuels
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-5 border border-teal-100">
                  <h4 className="font-medium text-gray-800 mb-3">National Hydrogen Program (PNH2)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Launched in 2023 with a detailed Action Plan (2023-2025), Brazil aims to be one of the world's most
                    competitive producers of low-carbon hydrogen by 2030, leveraging abundant renewables for green H₂ production.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-teal-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Law No. 14,948/2024</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• ANP to authorize hydrogen operations</li>
                        <li>• Brazilian Hydrogen Certification System (SBCH)</li>
                        <li>• Rehidro tax incentive regime</li>
                        <li>• International certification agreements</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-teal-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Milestones</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Pilot plants in all regions by 2025</li>
                        <li>• Competitive production by 2030</li>
                        <li>• Hydrogen hubs by 2035</li>
                        <li>• Green ammonia exports planned</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-5 border border-amber-100">
                  <h4 className="font-medium text-gray-800 mb-3">Biofuels & Clean Transport</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    As a biofuels pioneer, Brazil continues to expand ethanol, biodiesel, and bio-based fuels. Biofuels
                    currently supply about 21% of Brazil's domestic transport fuel on an energy basis.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-amber-200">
                      <div className="text-sm font-medium text-amber-700 mb-1">Ethanol 2034</div>
                      <div className="text-xl font-bold text-gray-800">48.5B liters</div>
                      <div className="text-xs text-gray-600">from 30B currently</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-amber-200">
                      <div className="text-sm font-medium text-amber-700 mb-1">Biodiesel 2034</div>
                      <div className="text-xl font-bold text-gray-800">13.6B liters</div>
                      <div className="text-xs text-gray-600">B15 blend planned</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-amber-200">
                      <div className="text-sm font-medium text-amber-700 mb-1">Current Share</div>
                      <div className="text-xl font-bold text-gray-800">21%</div>
                      <div className="text-xs text-gray-600">of transport fuel</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CCUS & Industrial Decarbonization */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-indigo-600" />
                CCUS & Industrial Decarbonization
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-5 border border-indigo-100">
                  <h4 className="font-medium text-gray-800 mb-3">World-Leading CCUS Program</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Petrobras operates one of the largest CCUS programs in the world. Since 2008, pre-salt operations have
                    injected around 68 million tonnes of CO₂ back into geological formations, including a record 14.2 Mt in 2024.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-indigo-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Law No. 14,993/2024</h5>
                    <p className="text-gray-600 text-sm mb-2">
                      Brazil's first dedicated CCS regulatory framework assigns ANP as the authority to regulate carbon
                      capture and geological storage projects.
                    </p>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• São Tomé CCS pilot: 100,000 tCO₂/year by 2028</li>
                      <li>• Industrial CCUS hubs planned</li>
                      <li>• Steel industry using charcoal from managed forests</li>
                      <li>• Hydrogen-based DRI steel projects</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Electricity Market & Grid Reform */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-electric" />
                Electricity Market & Grid Reform
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-electric-50 to-blue-50 rounded-lg p-5 border border-electric-100">
                  <h4 className="font-medium text-gray-800 mb-3">Law No. 15,269/2025 - Landmark Modernization</h4>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    A sweeping reform of Brazil's electricity sector enacted in November 2025 promotes competition and innovation.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-electric-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Market Opening</h5>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Full retail market opening by 2027-2028</li>
                        <li>• All consumers can choose suppliers</li>
                        <li>• Smart meter deployment</li>
                        <li>• Demand response programs</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-electric-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Storage Framework</h5>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Dedicated storage auctions from 2026</li>
                        <li>• R$1 billion/year incentives through 2030</li>
                        <li>• Grid-scale battery provisions</li>
                        <li>• Market participation rules for storage</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-lg p-5 border border-gray-200">
                  <h4 className="font-medium text-gray-800 mb-3">Eletrobras Privatization (2022)</h4>
                  <p className="text-gray-600 leading-relaxed">
                    The privatization of Brazil's largest utility marked one of the biggest share offerings in Latin America,
                    aimed at depoliticizing the company and unlocking billions in new investment for grid expansion and clean
                    energy projects.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Grid Modernization & Reliability</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    New high-voltage lines are under construction to carry wind and solar power from the Northeast to the Southeast.
                    The 2025 reforms include mechanisms to compensate generators for renewable curtailment due to grid constraints.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                      <span>Transmission expansion to carry renewable power</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                      <span>Grid automation and digitization programs</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                      <span>Advanced metering and control systems</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-electric rounded-full mt-2 flex-shrink-0"></span>
                      <span>Distributed resource participation in markets</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Recent Developments */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Clock className="h-5 w-5 text-orange-600" />
                Recent Developments
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-lg p-5 border border-orange-100">
                  <h4 className="font-medium text-gray-800 mb-2">Raising Climate Ambition (Late 2024)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Brazil significantly boosted its 2035 climate target at COP29, committing to cut emissions 59-67% below 2005
                    levels by 2035. The new administration has created a Ministry of Climate and Environment, with Brazil set to
                    host COP30 in Belém (November 2025).
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border border-blue-100">
                  <h4 className="font-medium text-gray-800 mb-2">Carbon Market Launch (November 2024)</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Congress approved the Brazilian Emissions Trading System (SBCE), the country's first regulated ETS. The first
                    phase will start by 2025-2026, focusing on monitoring and reporting, then evolving to binding caps and trading
                    by the late 2020s.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-100">
                  <h4 className="font-medium text-gray-800 mb-2">Renewable Energy Surge</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Brazil's renewable energy deployment is accelerating faster than official forecasts. Solar power added around
                    10 GW in 2023 alone, with projections now showing 115 GW of solar PV and 40 GW of wind by 2028.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    The first preliminary offshore wind licenses were issued in October 2023, with a draft Offshore Wind Law in
                    discussion to unlock an estimated 700 GW of offshore wind potential.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-5 border border-teal-100">
                  <h4 className="font-medium text-gray-800 mb-2">Hydrogen & CCS Momentum (2023-2024)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    After the Low-Carbon Hydrogen Law took effect, ANP began crafting regulations for hydrogen facility licensing
                    and launched the Brazilian Hydrogen Certification System. Green hydrogen pilots near ports are moving forward
                    with domestic and foreign investment.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    Petrobras is proceeding with Brazil's first dedicated CCS pilot in São Paulo state, targeting 100,000 tons
                    CO₂ captured per year by 2028. A Carbon Capture Subcommittee was convened in 2025 to draft a national CCUS
                    roadmap ahead of COP30.
                  </p>
                </div>
              </div>
            </div>

            {/* Regulatory Compliance & Reporting */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-600" />
                Regulatory Compliance & Reporting
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Multi-Agency Oversight</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Brazil's energy sector is governed by a complex regulatory landscape with overlapping compliance requirements:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Key Regulators</h5>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• ANEEL: Power sector regulation</li>
                        <li>• ANP: Oil, gas, hydrogen, CCS oversight</li>
                        <li>• IBAMA: Environmental licensing</li>
                        <li>• State agencies: Regional compliance</li>
                      </ul>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Compliance Areas</h5>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li>• Environmental impact assessments</li>
                        <li>• Grid codes and service quality</li>
                        <li>• Forest Code for biofuel plantations</li>
                        <li>• Water use permits for hydro</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-100">
                  <h4 className="font-medium text-gray-800 mb-3">Climate Reporting & Carbon Compliance</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Under the upcoming SBCE carbon market, covered entities will need to measure, report, and verify (MRV) their
                    greenhouse gas emissions annually, subject to third-party verification.
                  </p>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Brazil GHG Protocol Program (voluntary)</li>
                    <li>• RenovaBio lifecycle analysis certification</li>
                    <li>• CBIO credit retirement requirements</li>
                    <li>• Penalties for non-compliance by ANP</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Standards and Taxonomy</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Brazil is developing frameworks to guide sustainable investment and corporate disclosures:
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>Sustainable Finance Taxonomy (expected 2025)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>CVM ESG reporting guidelines for listed companies</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>TCFD-aligned climate risk disclosure proposals</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                      <span>BNDES social and environmental reporting requirements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key References */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-600" />
                Key References
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Climate & Energy Strategy</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Nationally Determined Contributions (NDCs) - Updated 2022, 2023</li>
                    <li>• National Policy on Climate Change (PNMC) - Law 12.187/2009</li>
                    <li>• Ecological Transformation Plan (2023)</li>
                    <li>• Ten-Year Energy Expansion Plan (PDE 2034)</li>
                    <li>• National Energy Plan 2050</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Clean Energy Programs</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• National Biofuels Policy (RenovaBio) - Law 13.576/2017</li>
                    <li>• National Hydrogen Program & Law 14.948/2024</li>
                    <li>• Fuels of the Future Legislation (2024) - Law 14.993/2024</li>
                    <li>• Brazilian Emissions Trading System (SBCE) - 2024</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Market Reform</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Power Sector Modernization - Law 15.269/2025</li>
                    <li>• Eletrobras Privatization (2022)</li>
                  </ul>
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

  // South Africa-specific legislation content
  if (selectedCountry === 'za') {
    return (
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Page Header */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8 border border-amber-100">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-4">
              <div className="bg-amber-100 p-3 rounded-lg">
                <Scale className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-800">South Africa Energy Policy & Regulation</h1>
                <p className="text-gray-600 mt-2">Comprehensive coverage of South Africa's net-zero commitments, just energy transition investments, and electricity market reforms</p>
              </div>
            </div>
            {/* Mobile: Show compact country selector */}
            <div className="md:hidden relative flex-shrink-0">
              <select
                value={selectedCountry}
                onChange={(e) => setSelectedCountry(e.target.value)}
                className="px-3 py-2 border-2 border-amber-400 rounded-lg bg-white text-gray-800 font-medium appearance-none pr-8 cursor-pointer hover:bg-amber-50 transition-colors text-sm"
              >
                {countries.map((country) => (
                  <option key={country.id} value={country.id}>
                    {country.name}
                  </option>
                ))}
              </select>
              <ChevronRight className="h-4 w-4 text-amber-600 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none rotate-90" />
            </div>
          </div>
        </div>

        <EnergyPolicyAd />

        <section id="za" className="scroll-mt-24">
          <div className="space-y-8">
            {/* Key Policy Areas Header */}
            <div className="bg-gradient-to-br from-electric-50 to-teal-50 rounded-xl p-6 border border-electric-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Key Policy Areas</h2>
              <p className="text-gray-600">Comprehensive overview of South Africa's climate targets, energy reforms, and transition strategy</p>
            </div>

            {/* Net Zero & Climate Targets */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-green-600" />
                Net Zero & Climate Targets
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-100">
                  <h4 className="font-medium text-gray-800 mb-3">2050 Net Zero Commitment</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    South Africa has pledged to achieve net zero greenhouse gas emissions by 2050, recently enshrining this commitment in a new Climate Change Act. The Act (signed in 2024) establishes a framework of five-year sectoral emission targets aligned with the national climate goals <a href="https://climateactiontracker.org/countries/south-africa/policies-action/" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[1]</a>. Each major sector will receive a carbon budget, and companies exceeding their budget will incur penalties via a higher carbon tax rate on the excess emissions.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">NDC Target 2030</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Reduce emissions to 350–420 MtCO₂e</li>
                        <li>• More ambitious than prior pledge</li>
                        <li>• Five-year sectoral targets</li>
                        <li>• Carbon budgets for major emitters</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-green-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Governance</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Ministerial Committee on Climate Change</li>
                        <li>• Regular progress updates required</li>
                        <li>• Penalty system for excess emissions</li>
                        <li>• Integration with carbon tax</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Renewable & Low-Carbon Power */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-yellow-600" />
                Renewable & Low-Carbon Power
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-lg p-5 border border-yellow-100">
                  <h4 className="font-medium text-gray-800 mb-3">Integrated Resource Plan (IRP)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    The national Integrated Resource Plan guides South Africa's electricity mix transition. IRP 2019 set a goal of adding 27.6 GW of renewables by 2030 (excluding large hydro) <a href="https://climateactiontracker.org/countries/south-africa/policies-action/" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[3]</a>, and subsequent iterations have increased ambition. A draft IRP 2023/25 calls for an investment of ~ZAR 2.23 trillion to add 105 GW of new generation by 2039, effectively rebuilding the grid "two and a half times" over <a href="https://www.world-nuclear-news.org/articles/south-african-government-approves-draft-2025-irp" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[4][5]</a>.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-yellow-200">
                      <div className="text-sm font-medium text-yellow-700 mb-1">New Capacity by 2039</div>
                      <div className="text-xl font-bold text-gray-800">105 GW</div>
                      <div className="text-xs text-gray-600">ZAR 2.23 trillion investment</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-yellow-200">
                      <div className="text-sm font-medium text-yellow-700 mb-1">Gas Capacity by 2030</div>
                      <div className="text-xl font-bold text-gray-800">6,000 MW</div>
                      <div className="text-xs text-gray-600">for reliability</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-yellow-200">
                      <div className="text-sm font-medium text-yellow-700 mb-1">Nuclear by 2039</div>
                      <div className="text-xl font-bold text-gray-800">5,200 MW</div>
                      <div className="text-xs text-gray-600">phased rollout</div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    This expansion prioritizes wind and solar (backed by abundant resources in the Cape regions) and foresees cleaner sources like renewables, hydro, and nuclear surpassing coal in the power mix by the mid-2030s <a href="https://africa-energy-portal.org/news/south-africa-unveils-127bn-energy-transition-plan" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[6]</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Carbon Pricing & Carbon Budgets */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <DollarSign className="h-5 w-5 text-blue-600" />
                Carbon Pricing & Carbon Budgets
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border border-blue-100">
                  <h4 className="font-medium text-gray-800 mb-3">National Carbon Tax (2019)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    South Africa implemented a national carbon tax in 2019 – one of the first in Africa – as its primary carbon pricing instrument <a href="https://climateactiontracker.org/countries/south-africa/policies-action/" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[10]</a>. As of 2025, the tax's headline rate is R236 per ton CO₂-e (≈USD 12.5) <a href="https://climateactiontracker.org/countries/south-africa/policies-action/" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[11]</a>, but various tax-free allowances (60–100% of emissions, depending on sector and offsets) have substantially lowered the effective rate.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Carbon Price Trajectory</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 2025: R236/ton (~USD 12.5)</li>
                        <li>• 2030: ~USD 30/ton target</li>
                        <li>• 2050: ~USD 120/ton target</li>
                        <li>• Phase 2 (2026+): Tighter allowances</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Carbon Budget System</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Mandatory for large emitters</li>
                        <li>• Capped emissions limits</li>
                        <li>• Higher tax on excess emissions</li>
                        <li>• "Pollute-and-pay" mechanism</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    Proposed reforms (published in late 2024) include cutting the basic tax-free allowance from 60% to 50% of emissions in 2026 (and to 40% later) <a href="https://climateactiontracker.org/countries/south-africa/policies-action/" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[14]</a>, which would significantly raise emitters' carbon costs.
                  </p>
                </div>
              </div>
            </div>

            {/* Energy Efficiency & Buildings */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Energy Efficiency & Buildings</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-5 border border-purple-100">
                  <h4 className="font-medium text-gray-800 mb-3">Building Codes & Standards</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Building efficiency is guided by national codes and the National Development Plan 2030, which calls for developing zero-emission building standards by 2030 <a href="https://climateactiontracker.org/countries/south-africa/policies-action/" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[16]</a>. Building codes (e.g. SANS 10400-XA) already require insulation and efficient design in new construction, and since 2020 large buildings must obtain Energy Performance Certificates.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Tax Incentives</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Section 12L: 125% deduction for efficiency measures</li>
                        <li>• Businesses: 125% solar PV cost deduction</li>
                        <li>• Households: 25% solar rebate (up to R15,000)</li>
                        <li>• Industrial processes & building retrofits</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-purple-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Programs & Standards</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Energy Performance Certificates (2020+)</li>
                        <li>• Appliance labeling & minimum standards</li>
                        <li>• Municipal building retrofits</li>
                        <li>• Zero-emission building standards by 2030</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security of Supply & Energy Independence */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-red-600" />
                Security of Supply & Energy Independence
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-5 border border-red-100">
                  <h4 className="font-medium text-gray-800 mb-3">Energy Action Plan (2022)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Ensuring energy security amid a power crisis is at the core of South Africa's policy. Rolling blackouts (locally termed "load shedding") reached up to Stage 6 (±12 hours/day) in 2023, crimping economic growth to below 1% <a href="https://africa-energy-portal.org/news/south-africa-unveils-127bn-energy-transition-plan" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[22]</a>. In response, the government launched an Energy Action Plan in July 2022, overseen by a multi-agency National Energy Crisis Committee (NECOM).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Five Priority Actions</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>① Fix Eskom's coal plants through maintenance</li>
                        <li>② Enable private generation (remove hurdles)</li>
                        <li>③ Accelerate new capacity procurement</li>
                        <li>④ Unleash rooftop solar (tax incentives)</li>
                        <li>⑤ Restructure electricity sector long-term</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-red-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Emergency Measures</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Import 1.6 GW from neighbors</li>
                        <li>• Fast-track battery storage</li>
                        <li>• Contract new peaking generation</li>
                        <li>• Net-metering for rooftop solar</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    Thanks to these interventions, South Africa's government claimed to have "turned the corner" on load-shedding by late 2025, with outage frequency beginning to decline as additional capacity comes online <a href="https://www.world-nuclear-news.org/articles/south-african-government-approves-draft-2025-irp" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[25]</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Hydrogen & Clean Fuels */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-teal-600" />
                Hydrogen & Clean Fuels
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-5 border border-teal-100">
                  <h4 className="font-medium text-gray-800 mb-3">Hydrogen Society Roadmap (2021)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    South Africa views green hydrogen as a key pillar of its future clean energy economy, leveraging the country's excellent solar and wind resources and rich platinum reserves (used in electrolyzers and fuel cells). The Department of Science and Innovation released a Hydrogen Society Roadmap (HSRM) in 2021, which targets the creation of a thriving domestic and export hydrogen market <a href="http://gh2.org/countries/south-africa" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[26][27]</a>.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-teal-200">
                      <div className="text-sm font-medium text-teal-700 mb-1">Production Target 2030</div>
                      <div className="text-xl font-bold text-gray-800">500,000 t/year</div>
                      <div className="text-xs text-gray-600">green hydrogen</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-teal-200">
                      <div className="text-sm font-medium text-teal-700 mb-1">Electrolyser Capacity</div>
                      <div className="text-xl font-bold text-gray-800">10 GW</div>
                      <div className="text-xs text-gray-600">Northern Cape focus</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-teal-200">
                      <div className="text-sm font-medium text-teal-700 mb-1">H₂ Buses/Trucks</div>
                      <div className="text-xl font-bold text-gray-800">500 by 2030</div>
                      <div className="text-xs text-gray-600">100 by 2025</div>
                    </div>
                  </div>
                  <div className="mt-4 bg-white rounded-lg p-4 border border-teal-200">
                    <h5 className="font-semibold text-gray-800 mb-2">Four Strategic Goals</h5>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>① Establish South Africa as global green hydrogen exporter (green ammonia)</li>
                      <li>② Decarbonize domestic power with hydrogen storage and fuel</li>
                      <li>③ Fuel industrial and heavy transport (steel, trucks) with H₂-based fuels</li>
                      <li>④ Localize manufacturing of hydrogen technologies (electrolyzers, fuel cells)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-5 border border-indigo-100">
                  <h4 className="font-medium text-gray-800 mb-3">CCUS & Sustainable Fuels</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    In hard-to-abate sectors, South Africa is pairing hydrogen with carbon capture and utilization. One flagship initiative is the CoalCO₂-X program, which will use green hydrogen to convert carbon emissions (CO₂, NOx, SOx) from coal power plant flue gas into value-added products <a href="http://gh2.org/countries/south-africa" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[32]</a>.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                      <h5 className="font-semibold text-gray-800 mb-2">CoalCO₂-X Program</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Convert coal plant emissions to products</li>
                        <li>• Use green hydrogen for conversion</li>
                        <li>• Support coal industry transition</li>
                        <li>• Create fuels or chemicals</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-indigo-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Hydrogen Valleys</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Limpopo/Gauteng hub projects</li>
                        <li>• KwaZulu-Natal industrial corridor</li>
                        <li>• Cluster production & off-takers</li>
                        <li>• Export infrastructure development</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    South African companies are also pursuing synfuels and SAF: for example, petrochemical giant Sasol (a world leader in coal-to-liquid fuels) has partnered with Germany's H2Global program to produce sustainable aviation fuel from green hydrogen and captured CO₂ <a href="http://gh2.org/countries/south-africa" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[33]</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Electricity Market & Grid Reform Header */}
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Electricity Market & Grid Reform</h2>
              <p className="text-gray-600">Transforming South Africa's electricity sector from monopoly to competitive market</p>
            </div>

            {/* Competitive Market & Eskom Restructuring */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Competitive Market & Eskom Restructuring</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-5 border border-orange-100">
                  <h4 className="font-medium text-gray-800 mb-3">Electricity Regulation Amendment Act (2024)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    A major reform is transforming South Africa's electricity supply industry from a vertically integrated monopoly to a competitive market. In 2024, Parliament passed the Electricity Regulation Amendment Act, which ends Eskom's exclusive dominance in power generation and allows private power producers to compete on an equal footing <a href="https://www.gcis.gov.za/electricitymarket" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[36][37]</a>.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Eskom Unbundling</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Separate Generation company</li>
                        <li>• Independent Transmission/System Operation</li>
                        <li>• Distribution/Retail entity</li>
                        <li>• Remains state-owned</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-orange-200">
                      <h5 className="font-semibold text-gray-800 mb-2">NTCSA (April 2024)</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Independent Transmission System Operator</li>
                        <li>• Transparent trading platform</li>
                        <li>• Non-discriminatory grid access</li>
                        <li>• Multi-buyer, multi-seller market</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    The Act also supports Eskom's financial recovery by addressing governance and crime: for instance, it introduces tough penalties (up to 5–10 years imprisonment) for cable theft and grid vandalism that have plagued South Africa's power infrastructure <a href="https://www.gcis.gov.za/electricitymarket" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[43]</a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Grid Expansion & Access */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Grid Expansion & Access</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-5 border border-blue-100">
                  <h4 className="font-medium text-gray-800 mb-3">Transmission Development Plan</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    A critical bottleneck in South Africa's energy transition is the constrained transmission grid. The existing network, largely designed around aging coal power stations in Mpumalanga, lacks capacity to connect new renewable projects in remote high-resource areas. Eskom estimates that about 11 GW of renewable projects awarded under procurement programs are awaiting grid connections due to capacity shortfalls <a href="https://www.trade.gov/market-intelligence/south-africa-energy-eskom-unbundling-update" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[44]</a>.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">NTCSA Plan by 2030</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 14,000 km of new high-voltage lines</li>
                        <li>• Dozens of new substations</li>
                        <li>• Tens of billions rand investment</li>
                        <li>• Essential for 20–30 GW renewables</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Private Capital (ITPO)</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Independent Transmission Projects Office</li>
                        <li>• Private investment in priority projects</li>
                        <li>• Leased/integrated into public grid</li>
                        <li>• Approved late 2023</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Renewable Procurement & IPP Programs */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Renewable Procurement & IPP Programs</h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-lg p-5 border border-green-100">
                  <h4 className="font-medium text-gray-800 mb-3">REIPPPP (2011–Present)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    South Africa's primary mechanism for utility-scale renewable energy deployment is the Renewable Energy Independent Power Producer Procurement Programme (REIPPPP). Launched in 2011, REIPPPP uses competitive tender "bid windows" where private developers bid to supply renewable power (wind, solar PV, CSP, etc.), with 20-year Power Purchase Agreements typically signed by Eskom as the offtaker <a href="https://climateactiontracker.org/countries/south-africa/policies-action/" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[51]</a>.
                  </p>
                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="text-sm font-medium text-green-700 mb-1">First 5 Years</div>
                      <div className="text-xl font-bold text-gray-800">USD 16B</div>
                      <div className="text-xs text-gray-600">investment attracted</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="text-sm font-medium text-green-700 mb-1">By 2020</div>
                      <div className="text-xl font-bold text-gray-800">~6 GW</div>
                      <div className="text-xs text-gray-600">procured via REIPPPP</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 border border-green-200">
                      <div className="text-sm font-medium text-green-700 mb-1">By 2023</div>
                      <div className="text-xl font-bold text-gray-800">~10 GW</div>
                      <div className="text-xs text-gray-600">renewables installed</div>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    Another major reform was raising and then removing the licensing threshold for embedded generation: since 2022, projects of any size can proceed with just registration, enabling mines, industries, and private consumers to rapidly build their own solar/wind plants and sell excess power <a href="https://climateactiontracker.org/countries/south-africa/policies-action/" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[56]</a>. This change unleashed a boom in private projects – over 100 such projects &gt;1 MW (total ~10 GW) are in development.
                  </p>
                </div>
              </div>
            </div>

            {/* Recent Developments Header */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Recent Developments</h2>
              <p className="text-gray-600">Latest policy updates, market reforms, and transition milestones</p>
            </div>

            {/* Climate Change Act & Carbon Budgets (2024) */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-green-600" />
                Climate Change Act & Carbon Budgets (2024)
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-5 border border-green-100">
                  <p className="text-gray-600 leading-relaxed mb-3">
                    In July 2024, President Ramaphosa signed the Climate Change Bill into law, marking a significant milestone in climate governance <a href="https://climateactiontracker.org/countries/south-africa/policies-action/" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[1]</a>. Now an Act, this law compels the government to implement the NDC and net-zero 2050 goal via binding frameworks. It introduces Sectoral Emissions Targets (SETs) for key sectors (energy, transport, industry, etc.) that will be set every five years in line with the national carbon budget.
                  </p>
                  <div className="bg-white rounded-lg p-4 border border-green-200">
                    <h4 className="font-semibold text-gray-800 mb-2">Key Provisions</h4>
                    <ul className="space-y-1 text-gray-600 text-sm">
                      <li>• Mandatory company-level carbon budgets for large emitters</li>
                      <li>• Allocated capped emissions limits</li>
                      <li>• From 2026: Penalty carbon taxes on excess emissions</li>
                      <li>• First round of targets for 2025–2030 period in development</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Integrated Resource Plan 2025 */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Integrated Resource Plan 2025
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg p-5 border border-blue-100">
                  <p className="text-gray-600 leading-relaxed mb-3">
                    After several delays, the government in October 2025 approved an updated Integrated Resource Plan (IRP 2025) to address the electricity crisis and future energy mix. The IRP 2025 outlines an unprecedented investment of ~R2.23 trillion (~$127 billion) in generation capacity and grid infrastructure by 2039 <a href="https://africa-energy-portal.org/news/south-africa-unveils-127bn-energy-transition-plan" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[60][5]</a>.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Twin Goals</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• End load-shedding in near term</li>
                        <li>• Decarbonize power sector long term</li>
                        <li>• Support economic growth</li>
                        <li>• Biggest post-apartheid investment</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-blue-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Emissions Projections</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 2030: ~160 MtCO₂e (power sector)</li>
                        <li>• 2035: ~142 MtCO₂e</li>
                        <li>• Down from 200+ MtCO₂e recent years</li>
                        <li>• Renewables overtake coal by 2035</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Just Energy Transition Partnership */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Globe className="h-5 w-5 text-teal-600" />
                Just Energy Transition Partnership
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-5 border border-teal-100">
                  <h4 className="font-medium text-gray-800 mb-3">International Climate Finance (COP26 2021)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    At COP26 in 2021, South Africa entered into a Just Energy Transition Partnership (JETP) with the EU, US, UK, Germany and France, who collectively pledged an initial $8.5 billion to support South Africa's decarbonization efforts <a href="https://www.climatecommission.org.za/south-africas-jet-ip" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[68]</a>.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-teal-200">
                      <h5 className="font-semibold text-gray-800 mb-2">JET Investment Plan</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• ZAR 1.5 trillion (~$98B) needed by 2030</li>
                        <li>• ZAR 1.86 trillion (~$124B) by 2035</li>
                        <li>• Electricity infrastructure focus</li>
                        <li>• Green hydrogen & EV manufacturing</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-teal-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Social Investment</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Worker retraining programs</li>
                        <li>• Economic development for coal regions</li>
                        <li>• Support for communities in transition</li>
                        <li>• Pilot model for emerging economies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coal Transition Pilot (Komati) */}
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-amber-600" />
                Coal Transition Pilot (Komati)
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-lg p-5 border border-amber-100">
                  <h4 className="font-medium text-gray-800 mb-3">First Coal Plant Retired for Climate Reasons (Oct 2022)</h4>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    A notable recent milestone in South Africa's just transition was the retirement of Komati Power Station in October 2022 – the first large coal-fired plant in South Africa to be closed for climate reasons. Komati (formerly 1,000 MW) ceased operations after running for 61 years. The World Bank approved a $497 million financing package for the Komati Just Energy Transition Project <a href="https://www.worldbank.org/en/news/press-release/2022/11/04/world-bank-approves-497-million-in-financing-to-lower-south-africa-s-greenhouse-gas-emissions-and-support-a-just-transit" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[70][71]</a>.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Clean Energy Hub</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• 150 MW solar PV at site</li>
                        <li>• 70 MW wind capacity</li>
                        <li>• 150 MW battery storage</li>
                        <li>• Voltage support & power for region</li>
                      </ul>
                    </div>
                    <div className="bg-white rounded-lg p-4 border border-amber-200">
                      <h5 className="font-semibold text-gray-800 mb-2">Just Transition Focus</h5>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        <li>• Workers retrained for renewables</li>
                        <li>• Skills development center on-site</li>
                        <li>• Economic diversification funding</li>
                        <li>• Proof-of-concept for future closures</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mt-3">
                    South Africa plans to decommission nearly 12 GW of coal capacity by 2030 in line with the IRP2019 and climate goals <a href="https://www.worldbank.org/en/news/press-release/2022/11/04/world-bank-approves-497-million-in-financing-to-lower-south-africa-s-greenhouse-gas-emissions-and-support-a-just-transit" target="_blank" rel="noopener noreferrer" className="text-electric-600 hover:text-electric-700">[75]</a>. Lessons from Komati will inform the retirement of larger stations like Hendrina, Grootvlei, and others in the coming years.
                  </p>
                </div>
              </div>
            </div>

            {/* Key References */}
            <div className="bg-gradient-to-br from-gray-50 to-slate-50 rounded-xl p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-600" />
                Key References
              </h3>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Climate & Energy Strategy</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>South Africa Climate Change Act (2024)</strong> – Framework law establishing binding climate targets, sectoral emissions budgets, and integration of carbon budgets with the carbon tax</li>
                    <li>• <strong>Integrated Resource Plan (IRP 2019 & 2025)</strong> – Government's long-term electricity capacity expansion plans</li>
                    <li>• <strong>Energy Action Plan (2022)</strong> – Presidential plan to end load-shedding and ensure energy security</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Market Reform & Carbon Pricing</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Electricity Regulation Amendment Act (2024)</strong> – Amendments creating a competitive electricity market and independent transmission operator</li>
                    <li>• <strong>Carbon Tax Act (2019) & Carbon Budget System</strong> – South Africa's carbon pricing mechanism with scheduled rate increases and phased reduction of allowances</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">Clean Energy Programs</h4>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• <strong>Hydrogen Society Roadmap (2021) & Green Hydrogen Strategy</strong> – National strategy for developing a green hydrogen economy with 500 kt H₂ by 2030 target</li>
                    <li>• <strong>Just Energy Transition Investment Plan (2023–2027)</strong> – Investment plan detailing financial needs for South Africa's coal-to-clean transition, backed by $8.5B JETP</li>
                    <li>• <strong>Renewable Energy IPP Procurement Programme (REIPPPP)</strong> – Ongoing program of competitive bid windows for procuring renewable energy from private developers</li>
                  </ul>
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