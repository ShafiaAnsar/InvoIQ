import { Linkedin, Twitter, Mail } from 'lucide-react';

const quickLinks = [
  { label: 'Services', href: '#' },
  { label: 'Case Studies', href: '#' },
  { label: 'About', href: '#' },
  { label: 'Contact', href: '#' },
];

const socialLinks = [
  { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
  { icon: <Twitter size={20} />, href: '#', label: 'X / Twitter' },
  { icon: <Mail size={20} />, href: 'mailto:hello@arsofic.com', label: 'Email' },
];

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
          {/* Logo & Tagline */}
          <div>
            <a href="#" className="font-grotesk font-bold text-2xl text-white tracking-tight">
              Arsofic
            </a>
            <p className="mt-3 text-gray-400 text-sm leading-relaxed">
              Custom AI agents for accounting & finance firms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-4">
              Connect
            </h4>
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-white/[0.05] hover:bg-white/[0.1] flex items-center justify-center text-gray-400 hover:text-white transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/[0.06] text-center">
          <p className="text-sm text-gray-500">
            © 2026 Arsofic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
