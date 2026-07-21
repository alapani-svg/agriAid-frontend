import Button from '../../../../shared/ui/Button';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-32 pb-20 sm:pt-40 sm:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="liquid-glass-emerald rounded-2xl p-8 mb-8 max-w-5xl mx-auto animate-fade-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 font-headline opacity-100">
              Transform Your Harvest Into Financial Opportunity
            </h1>
            <p className="text-lg sm:text-xl text-gray-800 leading-relaxed max-w-3xl mx-auto opacity-90 font-medium">
              agriAid turns crop logs into secure, moisture-audited grain receipts that serve as collateral for up to 20-year agricultural loans.
            </p>
            <p className="text-base text-gray-700 mt-4 max-w-2xl mx-auto opacity-80">
              For Cameroon's agricultural cooperatives seeking access to institutional financing
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8 afd1">
            <Button size="lg" className="text-base font-semibold">
              Register Your Cooperative
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
            <Button variant="outline" size="lg" className="text-base font-semibold">
              Access Secure Vault Portal
            </Button>
          </div>

          <div className="text-sm text-gray-700 mb-6 afd2 font-medium">
            <span className="text-emerald-700 font-bold">Risk Reversal:</span> 100% Free Cooperative Registration. No credit card or collateral needed to access initial credibility computation.
          </div>

          <div className="inline-flex items-center gap-2 liquid-glass rounded-full px-4 py-2 afd3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full status-live"></div>
            <span className="text-sm font-bold text-gray-900">
              BEAC Node Settlement Status: <span className="text-emerald-600">SECURE & ACTIVE</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
