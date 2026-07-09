import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Overview', href: '#overview' },
    { name: 'Ingredients', href: '#ingredients' },
    { name: 'Interactive Bio-Widget', href: '#stress-dashboard' },
    { name: 'Drug Profile', href: '#drug-profile' },
    { name: 'FAQs', href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-[#030e0a]/85 backdrop-blur-md border-b border-sage/10 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Brand */}
          <div className="flex items-center space-x-2">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-sage to-sunset flex items-center justify-center shadow-md shadow-sage/15">
              <span className="text-forest-dark font-bold text-lg">N</span>
            </div>
            <div>
              <span className="text-xl font-bold tracking-wider font-display bg-gradient-to-r from-white via-sage-pale to-sage bg-clip-text text-transparent">
                NEUROLUME
              </span>
              <span className="block text-[9px] uppercase tracking-widest text-sunset font-semibold -mt-1">
                Herbal Adaptogen
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-sage text-sm font-medium transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <a
              href="#drug-profile"
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-sage to-sage-light hover:from-sunset hover:to-sunset-light text-forest-dark font-bold text-sm shadow-lg shadow-sage/20 hover:shadow-sunset/20 transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Dosage & Info
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-300 hover:text-sage p-2 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6 fill-none stroke-current" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#030e0a]/95 border-b border-sage/10 backdrop-blur-lg overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-slate-300 hover:text-sage text-base font-medium py-2 border-b border-white/5 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#drug-profile"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block text-center mt-4 px-5 py-3 rounded-full bg-gradient-to-r from-sage to-sage-light text-forest-dark font-bold text-sm shadow-md"
              >
                Dosage & Info
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
