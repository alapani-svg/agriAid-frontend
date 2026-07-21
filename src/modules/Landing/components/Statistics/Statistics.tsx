const stats = [
  {
    number: "12,500+",
    title: "Cameroon Producers Served",
    description: "Farmers across all regions"
  },
  {
    number: "847",
    title: "Registered CIG Cooperatives",
    description: "Active agricultural groups"
  },
  {
    number: "€2.8M",
    title: "Total Collateral Audited",
    description: "Grain receipts processed"
  },
  {
    number: "99.7%",
    title: "Moisture Standards Met",
    description: "Quality compliance rate"
  },
];

export default function Statistics() {
  return (
    <section className="py-20 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div
              key={item.title}
              className={`liquid-glass-card p-8 text-center afd${index + 1} border-2 border-emerald-200/50 hover:border-emerald-400/70`}
            >
              <h2 className="text-5xl sm:text-6xl font-bold text-emerald-600 mb-3 font-headline opacity-100">
                {item.number}
              </h2>
              <p className="text-xl font-bold text-gray-900 mb-2 opacity-100">
                {item.title}
              </p>
              <p className="text-base text-gray-800 font-medium opacity-90">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}