export default function Footer() {
  return (
    <footer className="liquid-glass border-t border-white/40 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            © 2024 AgriAid Cameroon. All rights reserved.
          </p>
          <p className="text-sm text-gray-500">
            Ministry of Agriculture & Ministry of Finance, Republic of Cameroon
          </p>
          <div className="flex justify-center gap-6 mt-6">
            <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-emerald-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
