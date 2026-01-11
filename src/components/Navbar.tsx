import { Scale, Menu, X, Lock } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Supreme Court', id: 'supreme-court' },
    { name: 'High Courts', id: 'high-courts' },
    { name: 'RTI', id: 'rti' },
    { name: 'Bare Acts', id: 'bare-acts' },
    { name: 'Calendar', id: 'calendar' },
    { name: 'Blogs', id: 'blogs' },
    { name: 'Law Dictionary', id: 'law-dictionary' },
    { name: 'Bar Associations', id: 'bar-associations' },
    { name: 'Judgments', id: 'judgments' },
    { name: 'Events', id: 'events' },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <Scale className="h-8 w-8 text-amber-400" />
            <span className="text-xl font-bold">Legal Portal India</span>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'bg-amber-500 text-white'
                    : 'hover:bg-slate-800'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('admin')}
              className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                currentPage === 'admin'
                  ? 'bg-amber-500 text-white'
                  : 'hover:bg-slate-800'
              }`}
            >
              <Lock className="h-4 w-4" />
              <span>Admin</span>
            </button>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                  currentPage === item.id
                    ? 'bg-amber-500 text-white'
                    : 'hover:bg-slate-700'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('admin');
                setMobileMenuOpen(false);
              }}
              className={`flex items-center space-x-2 w-full text-left px-3 py-2 rounded-md text-base font-medium ${
                currentPage === 'admin'
                  ? 'bg-amber-500 text-white'
                  : 'hover:bg-slate-700'
              }`}
            >
              <Lock className="h-4 w-4" />
              <span>Admin</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
