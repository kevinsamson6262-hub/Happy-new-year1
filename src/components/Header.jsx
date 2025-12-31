import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Sparkles, Moon, Sun } from 'lucide-react';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      <nav
        className={`container mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-500 ${
          scrolled ? 'glass rounded-2xl' : ''
        }`}
      >
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="flex items-center gap-2 group"
          >
            <div className="relative">
              <Sparkles className="w-7 h-7 text-primary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl sm:text-2xl font-bold gradient-text hidden sm:inline">
              2026
            </span>
          </button>

          

          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="hover:bg-primary/10 hover:text-primary transition-all duration-300 glow-gold"
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;