import {
    UserPlus,
    FileText,
    ShieldCheck,
    TrendingUp,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Register Cooperative",
    description: "Create your cooperative profile and add member farmers to the platform.",
  },
  {
    icon: FileText,
    title: "Log Crop Production",
    description: "Record harvest data and generate digital grain receipts with moisture certification.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Verification",
    description: "Grain samples undergo moisture auditing to meet international quality standards.",
  },
  {
    icon: TrendingUp,
    title: "Access Financing",
    description: "Use verified grain receipts as collateral to secure long-term agricultural loans.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-headline opacity-100">
            How It Works
          </h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto opacity-90 font-medium">
            Simple steps to transform your harvest into financial opportunity
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.title}
                className={`liquid-glass-card p-8 afd${index + 1} border-2 border-emerald-200/50 hover:border-emerald-400/70`}
              >
                <div className="w-14 h-14 bg-emerald-600 rounded-xl flex items-center justify-center mb-5 shadow-lg">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <div className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 shadow-md">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 font-headline">
                  {step.title}
                </h3>
                <p className="text-base text-gray-800 leading-relaxed font-medium opacity-90">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
