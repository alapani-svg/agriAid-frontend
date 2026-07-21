import Logo from '../../../../shared/ui/Logo';
import Button from '../../../../shared/ui/Button';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 liquid-glass border-b border-white/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <button className="hover:text-emerald-600 transition-colors">EN</button>
              <span className="text-gray-400">|</span>
              <button className="hover:text-emerald-600 transition-colors">FR</button>
            </div>
            <Button variant="outline" className="text-sm">Sign In</Button>
            <Button className="text-sm">Register Your Cooperative</Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
