import { useEffect, useRef, useState } from 'react';
import { Award, Users, Briefcase } from 'lucide-react';
import type { LogoShowcase } from '@/types';

interface LogoShowcaseProps {
  logos: LogoShowcase[];
  t: (key: string) => string;
}

export function LogoShowcaseSection({ logos, t }: LogoShowcaseProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Double the logos for seamless infinite scroll
  const doubledLogos = [...logos, ...logos];

  return (
    <section
      ref={sectionRef}
      id="logos"
      className="relative py-20 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(220, 38, 38, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 px-4">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <Award className="w-4 h-4 text-kcf-gold" />
            <span className="text-sm text-white/80">{t('logosWeHaveDone')}</span>
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('logosWeHaveDone')}
          </h2>
          <p
            className={`text-white/60 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {t('trustedByBrands')}
          </p>
        </div>

        {/* Stats Row */}
        <div
          className={`flex flex-wrap justify-center gap-8 mb-12 px-4 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-kcf-red/20 rounded-xl flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-kcf-red" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-sm text-white/60">Logos Created</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-kcf-gold/20 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-kcf-gold" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">300+</div>
              <div className="text-sm text-white/60">Happy Clients</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
              <Award className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-sm text-white/60">Industries</div>
            </div>
          </div>
        </div>

        {/* Logo Marquee - Row 1 (Left to Right) */}
        <div className="logo-marquee-container mb-6">
          <div className="logo-marquee-track animate-marquee">
            {doubledLogos.map((logo, index) => (
              <div
                key={`row1-${logo.id}-${index}`}
                className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4 hover:border-kcf-red/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-center">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl mx-auto mb-2 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <p className="text-xs text-white/50 group-hover:text-white/80 transition-colors">{logo.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Logo Marquee - Row 2 (Right to Left) */}
        <div className="logo-marquee-container">
          <div className="logo-marquee-track animate-marquee-reverse">
            {[...doubledLogos].reverse().map((logo, index) => (
              <div
                key={`row2-${logo.id}-${index}`}
                className="flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 bg-white/5 rounded-2xl border border-white/10 flex items-center justify-center p-4 hover:border-kcf-red/50 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="text-center">
                  <img
                    src={logo.image}
                    alt={logo.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-xl mx-auto mb-2 opacity-70 group-hover:opacity-100 transition-opacity"
                  />
                  <p className="text-xs text-white/50 group-hover:text-white/80 transition-colors">{logo.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
