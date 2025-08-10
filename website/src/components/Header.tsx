'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Menu, X, Award } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <motion.div 
              className="flex flex-col"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <h1 className="text-2xl font-bold text-foreground leading-tight">SE Finishers</h1>
              <p className="text-xs text-muted-foreground font-medium tracking-wide">PROFESSIONAL PRINT FINISHING</p>
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('portfolio')}
              className="text-muted-foreground hover:text-primary transition-colors font-medium relative group"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Quote
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="mailto:zoe.axford@sefinishers.com"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              <Mail className="w-4 h-4" />
              zoe.axford@sefinishers.com
            </a>
            <a
              href="tel:+441234567890"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
            >
              <Phone className="w-4 h-4" />
              01234 567890
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary p-2 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-border overflow-hidden"
            >
              <div className="py-4 space-y-3">
                <button
                  onClick={() => scrollToSection('services')}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Services
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Portfolio
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="block w-full text-left text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  Contact
                </button>
                
                <div className="pt-4 border-t border-border space-y-2">
                  <a
                    href="mailto:zoe.axford@sefinishers.com"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    zoe.axford@sefinishers.com
                  </a>
                  <a
                    href="tel:+441234567890"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    01234 567890
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}