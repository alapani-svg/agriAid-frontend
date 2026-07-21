import {
    FileText,
    Shield,
    TrendingUp,
} from "lucide-react";

const pillars = [
  {
    icon: FileText,
    title: "Digital Grain Receipts",
    description: "Transform crop logs into secure, blockchain-verified grain receipts that serve as physical collateral for financial institutions.",
    benefit: "Turn harvest data into bankable assets"
  },
  {
    icon: Shield,
    title: "Moisture Auditing",
    description: "Real-time moisture content verification ensures grain quality standards are met, protecting both farmers and lenders.",
    benefit: "Guaranteed quality compliance"
  },
  {
    icon: TrendingUp,
    title: "Credit Access",
    description: "Connect agricultural producers with regional underwriting bodies to access long-term structural loans up to 20 years.",
    benefit: "Unlock institutional financing"
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-headline opacity-100">
            Three Core Pillars
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto opacity-90 font-medium">
            The foundation of agriAid's trusted agricultural financing system
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`liquid-glass-card p-8 afd${index + 1} border-2 border-emerald-200/50 hover:border-emerald-400/70`}
            >
              <div className="w-16 h-16 bg-emerald-600 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                <pillar.icon className="w-9 h-9 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 font-headline">
                {pillar.title}
              </h3>
              <p className="text-emerald-700 font-semibold text-sm mb-3 uppercase tracking-wide">
                {pillar.benefit}
              </p>
              <p className="text-gray-800 leading-relaxed font-medium opacity-90">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}