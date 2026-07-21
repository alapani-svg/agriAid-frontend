const partners = [
  {
    name: "MINADER",
    fullName: "Ministry of Agriculture and Rural Development",
    icon: "🌾"
  },
  {
    name: "MINFI",
    fullName: "Ministry of Finance",
    icon: "💰"
  },
  {
    name: "BEAC",
    fullName: "Bank of Central African States",
    icon: "🏦"
  },
  {
    name: "AFRILAND",
    fullName: "Afriland First Bank",
    icon: "🏛️"
  },
  {
    name: "SGC",
    fullName: "Société Générale Cameroun",
    icon: "🏢"
  }
];

export default function Partnerships() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-16 font-headline opacity-100">
          In Partnership With Cameroon's Sovereign Institutions
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className={`liquid-glass-card p-8 flex flex-col items-center justify-center text-center afd${index + 1} border-2 border-emerald-200/50 hover:border-emerald-400/70`}
            >
              <div className="text-5xl mb-4">{partner.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{partner.name}</h3>
              <p className="text-sm text-gray-800 font-medium opacity-90">{partner.fullName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
