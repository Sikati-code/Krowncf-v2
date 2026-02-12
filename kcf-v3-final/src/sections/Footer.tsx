import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Crown,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface FooterProps {
  t: (key: string) => string;
  onNavigateTerms: () => void;
  onNavigatePrivacy: () => void;
  onNavigateContact: () => void;
}

export function Footer({ t, onNavigateTerms, onNavigatePrivacy, onNavigateContact }: FooterProps) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success(t('newsletterDescription'));
      setEmail('');
    }
  };

  const quickLinks = [
    { name: t('home'), href: '#home' },
    { name: t('categories'), href: '#categories' },
    { name: t('featured'), href: '#featured' },
    { name: t('latest'), href: '#latest' },
    { name: t('about'), href: '#about' }
  ];

  const categories = [
    'Festivities',
    'Church Flyers',
    'Birthday Designs',
    'PNGs',
    'Fonts',
    'Party Flyers'
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#0a0a0a] border-t border-white/10">
      {/* Newsletter Section */}
      <div className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-kcf-red/10 to-kcf-gold/10" />
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
              <Mail className="w-4 h-4 text-kcf-red" />
              <span className="text-sm text-white/80">{t('stayUpdated')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('subscribeNewsletter')}
            </h2>
            <p className="text-white/60 mb-8 max-w-xl mx-auto">
              {t('newsletterDescription')}
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <div className="relative flex-1">
                <input
                  type="email"
                  placeholder={t('enterEmail')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/10 border border-white/20 rounded-full py-4 pl-6 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:border-kcf-red focus:ring-1 focus:ring-kcf-red transition-all"
                />
              </div>
              <Button
                type="submit"
                className="bg-kcf-red hover:bg-kcf-dark-red text-white px-8 py-4 rounded-full font-medium transition-all hover:scale-105 shine-effect"
              >
                {t('subscribe')}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Main Footer */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <img 
                src="/assets/logo.png" 
                alt="KCF Logo" 
                className="w-12 h-12"
              />
              <div>
                <h3 className="text-xl font-bold text-white">KROWN</h3>
                <p className="text-xs text-kcf-gray -mt-1">CREATIVE FACTORY</p>
              </div>
            </a>
            <p className="text-white/60 mb-6 leading-relaxed">
              Nigeria's premier graphic design marketplace. Premium designs for creative professionals.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com/krowncf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-kcf-red hover:text-white transition-all"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/krowncf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-kcf-red hover:text-white transition-all"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com/krowncf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-kcf-red hover:text-white transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com/krowncf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white/60 hover:bg-kcf-red hover:text-white transition-all"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h5 className="text-white font-semibold mb-6 flex items-center gap-2">
              <ArrowRight className="w-4 h-4 text-kcf-red" />
              {t('quickLinks')}
            </h5>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                    className="text-white/60 hover:text-kcf-red transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Categories */}
          <div>
            <h5 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Crown className="w-4 h-4 text-kcf-red" />
              {t('categories')}
            </h5>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <a
                    href="#categories"
                    onClick={(e) => { e.preventDefault(); scrollToSection('#categories'); }}
                    className="text-white/60 hover:text-kcf-red transition-colors"
                  >
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h5 className="text-white font-semibold mb-6 flex items-center gap-2">
              <Mail className="w-4 h-4 text-kcf-red" />
              {t('contact')}
            </h5>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-kcf-red flex-shrink-0 mt-0.5" />
                <span className="text-white/60">
                  Lagos, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-kcf-red flex-shrink-0" />
                <span className="text-white/60">
                  +234 XXX XXX XXXX
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-kcf-red flex-shrink-0" />
                <a href="mailto:info@krowncf.com" className="text-white/60 hover:text-kcf-red transition-colors">
                  info@krowncf.com
                </a>
              </li>
            </ul>
            
            {/* Blog Link */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <a
                href="https://krowncreativefactory.blogspot.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-kcf-red hover:text-kcf-gold transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Visit Our Blog
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} Krown Creative Factory. {t('allRightsReserved')}.
            </p>
            <div className="flex items-center gap-6">
              <button onClick={onNavigateTerms} className="text-white/40 text-sm hover:text-kcf-red transition-colors">{t('termsOfService')}</button>
              <button onClick={onNavigatePrivacy} className="text-white/40 text-sm hover:text-kcf-red transition-colors">{t('privacyPolicy')}</button>
              <button onClick={onNavigateContact} className="text-white/40 text-sm hover:text-kcf-red transition-colors">{t('contactUs')}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
