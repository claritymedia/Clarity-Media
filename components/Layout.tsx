import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Facebook, Linkedin, ArrowRight, MapPin } from 'lucide-react';
import { Button } from './ui/UI';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Pulse Partners', href: '/pulse-partners' },
  { label: 'Podcasting', href: '/podcasting' },
  { label: 'Photography', href: '/photography' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Announcement Bar */}
      <div className="bg-primary-900 text-white text-xs md:text-sm py-2 px-4 text-center">
        <span className="inline-flex items-center gap-2">
          <MapPin size={14} className="text-accent" />
          Limited Spots Available in Dallas and Frisco — <Link to="/pulse-partners" className="underline hover:text-accent transition-colors font-semibold">Apply Now</Link>
        </span>
      </div>

      {/* Navigation */}
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-white py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 z-50">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-primary-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-serif font-bold text-xl md:text-2xl">C</span>
            </div>
            <span className="font-bold text-xl md:text-2xl tracking-tight text-neutral-900">CLARITY<span className="text-primary-500">MEDIA</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                to={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === link.href ? 'text-primary-900 font-bold' : 'text-neutral-600'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/booking">
                <Button variant="primary" size="sm">Book Consultation</Button>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden text-neutral-900 z-50 focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <div 
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out lg:hidden pt-24 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex flex-col items-center gap-6 p-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                to={link.href}
                className="text-xl font-medium text-neutral-800"
              >
                {link.label}
              </Link>
            ))}
            <div className="w-full h-px bg-neutral-100 my-4"></div>
            <Link to="/booking" className="w-full">
                <Button variant="primary" fullWidth size="lg">Book Consultation</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-neutral-900 text-white pt-16 pb-8 border-t border-neutral-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column */}
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-serif font-bold text-xl">C</span>
                </div>
                <span className="font-bold text-xl tracking-tight">CLARITY<span className="text-primary-500">MEDIA</span></span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Rebuilding communities through AI-powered growth with a human heartbeat. The last partnership your business will ever need.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-bold text-lg mb-6">Services</h4>
              <ul className="space-y-4 text-neutral-400">
                <li><Link to="/pulse-partners" className="hover:text-primary-400 transition-colors">Pulse Partners</Link></li>
                <li><Link to="/podcasting" className="hover:text-primary-400 transition-colors">Podcasting</Link></li>
                <li><Link to="/photography" className="hover:text-primary-400 transition-colors">Photography</Link></li>
                <li><Link to="/booking" className="hover:text-primary-400 transition-colors">Consulting</Link></li>
              </ul>
            </div>

            {/* Links Column */}
            <div>
              <h4 className="font-bold text-lg mb-6">Company</h4>
              <ul className="space-y-4 text-neutral-400">
                <li><Link to="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                <li><Link to="/about" className="hover:text-primary-400 transition-colors">Our Team</Link></li>
                <li><Link to="/resources" className="hover:text-primary-400 transition-colors">Blog & Resources</Link></li>
                <li><Link to="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="font-bold text-lg mb-6">Stay Updated</h4>
              <p className="text-neutral-400 text-sm mb-4">Join our newsletter for the latest community growth strategies.</p>
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Email address" 
                  className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-3 text-white placeholder-neutral-500 focus:outline-none focus:border-primary-500"
                />
                <Button variant="primary" fullWidth size="sm">Subscribe</Button>
              </form>
            </div>
          </div>

          <div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-neutral-500">
            <p>&copy; {new Date().getFullYear()} Clarity Media. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};