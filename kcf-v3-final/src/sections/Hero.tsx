import { useEffect, useRef, useState } from 'react';
import { Search, ArrowRight, Sparkles, Zap, TrendingUp, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Stats } from '@/types';

interface HeroProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  stats: Stats;
  t: (key: string) => string;
}

export function Hero({ searchQuery, onSearchChange, stats, t }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Geometric Background */}
      <div 
        className="absolute inset-0 geometric-bg"
        style={{
          transform: `scale(1.1) translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/60 to-[#0a0a0a]" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 bg-kcf-red/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20 pt-24 pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Sparkles className="w-4 h-4 text-kcf-gold" />
            <span className="text-sm text-white/80">{t('premiumMarketplace')}</span>
            <Badge className="bg-kcf-red text-white text-xs">{t('new')}</Badge>
          </div>

          {/* Logo Animation */}
          <div
            className={`flex justify-center mb-8 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-kcf-red/30 blur-3xl rounded-full animate-pulse-glow" />
              <img
                src="/assets/logo-full.jpg"
                alt="Krown Creative Factory"
                className="relative w-48 sm:w-64 md:w-80 h-auto animate-float rounded-2xl"
              />
            </div>
          </div>

          {/* Title */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="block">{t('unleashCreative')}</span>
            <span className="block kcf-text-gradient">{t('creativePotential')}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('heroDescription')}
          </p>

          {/* Search Bar */}
          <div
            className={`max-w-2xl mx-auto mb-10 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-kcf-red to-kcf-gold rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity" />
              <div className="relative flex items-center">
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  className="w-full bg-white/5 backdrop-blur-lg border border-white/10 rounded-full py-4 pl-6 pr-32 text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red focus:ring-2 focus:ring-kcf-red/30 transition-all"
                />
                <button className="absolute right-2 bg-kcf-red hover:bg-kcf-dark-red text-white px-6 py-2.5 rounded-full flex items-center gap-2 transition-all hover:scale-105">
                  <Search className="w-4 h-4" />
                  <span className="hidden sm:inline">{t('search')}</span>
                </button>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Button
              onClick={() => scrollToSection('#featured')}
              size="lg"
              className="bg-kcf-red hover:bg-kcf-dark-red text-white px-8 py-6 text-lg rounded-full shadow-kcf-lg hover:shadow-glow-lg transition-all hover:scale-105 shine-effect"
            >
              {t('exploreDesigns')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              onClick={() => scrollToSection('#categories')}
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-full transition-all hover:scale-105"
            >
              {t('viewCategories')}
            </Button>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-3xl mx-auto transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {[
              { icon: Zap, value: `${stats.designsCount.toLocaleString()}+`, label: t('designs') },
              { icon: TrendingUp, value: `${stats.downloadsCount.toLocaleString()}+`, label: t('downloads') },
              { icon: Sparkles, value: `${stats.happyClients.toLocaleString()}+`, label: t('happyClients') },
              { icon: Crown, value: stats.categoriesCount.toString(), label: t('categories') }
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-dark rounded-2xl p-4 hover:bg-white/10 transition-all hover:scale-105"
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-kcf-red mx-auto mb-2" />
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}
