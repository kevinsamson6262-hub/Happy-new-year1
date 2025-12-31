import React from 'react';
import { Button } from './ui/button';
import { Github, Linkedin, Mail, Heart, Sparkles } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:developer@example.com', label: 'Email' }
];

const footerLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Goals', href: '#goals' },
  { label: 'Contact', href: '#contact' }
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative mt-20 border-t border-border">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-primary" />
                <span className="text-2xl font-bold gradient-text">2026</span>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Building the future, one line of code at a time. Let's make 2026 extraordinary.
              </p>
            </div>

            

            
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              © {currentYear} Portfolio. All rights reserved.
            </p>
            <p className="flex items-center gap-2">
              Built with
              <Heart className="w-4 h-4 text-primary fill-primary" />
              and hosted on
              <span className="text-primary font-semibold">GitHub Pages</span>
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -z-10" />
    </footer>
  );
};

export default Footer;