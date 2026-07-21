import Button from '../../../../shared/ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6">
            Smart Agriculture for
            <span className="text-emerald-600"> Modern Farmers</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Empowering farmers with AI-driven insights, weather predictions, and marketplace integration for sustainable agriculture.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">Get Started Free</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
