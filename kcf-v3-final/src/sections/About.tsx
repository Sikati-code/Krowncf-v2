import { useEffect, useRef, useState } from 'react';
import { 
  Award, 
  Users, 
  Globe, 
  Zap,
  Quote,
  Star,
  Crown,
  CheckCircle
} from 'lucide-react';
import type { Testimonial, Stats } from '@/types';

interface AboutProps {
  testimonials: Testimonial[];
  stats: Stats;
  t: (key: string) => string;
}

export function About({ testimonials, stats, t }: AboutProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const features = [
    {
      icon: Award,
      title: t('premiumQuality'),
      description: 'Every design is crafted by professional designers with attention to detail.'
    },
    {
      icon: Users,
      title: '8,500+ ' + t('happyClients'),
      description: 'Join thousands of satisfied customers who trust KCF for their creative needs.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Our designs are used by creatives in over 50 countries worldwide.'
    },
    {
      icon: Zap,
      title: 'Instant Downloads',
      description: 'Get immediate access to your purchases with our instant download system.'
    }
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-24 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-kcf-red/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-kcf-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Stats Section */}
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-24 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { value: stats.designsCount.toLocaleString(), label: t('designs'), suffix: '+' },
            { value: stats.happyClients.toLocaleString(), label: t('happyClients'), suffix: '+' },
            { value: stats.downloadsCount.toLocaleString(), label: t('downloads'), suffix: '+' },
            { value: stats.categoriesCount.toString(), label: t('categories'), suffix: '' }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-4 sm:p-6 glass-dark rounded-2xl hover:bg-white/10 transition-all hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold kcf-text-gradient mb-2">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-white/60 text-sm sm:text-base">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`group p-6 glass-dark rounded-2xl hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-kcf-red/20 rounded-xl flex items-center justify-center mb-4 group-hover:bg-kcf-red/30 transition-colors">
                <feature.icon className="w-7 h-7 text-kcf-red" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-white/60 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div
            className={`transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
              <Crown className="w-4 h-4 text-kcf-gold" />
              <span className="text-sm text-white/80">{t('aboutUs')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
              {t('weAreKCF')} <span className="kcf-text-gradient">{t('krownCreativeFactory')}</span>
            </h2>
            <p className="text-white/70 text-lg mb-6 leading-relaxed">
              {t('aboutDescription1')}
            </p>
            <p className="text-white/60 mb-8 leading-relaxed">
              {t('aboutDescription2')}
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 text-white/80 bg-white/5 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-kcf-red" />
                <span>{t('premiumQuality')}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 bg-white/5 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-kcf-red" />
                <span>{t('affordablePrices')}</span>
              </div>
              <div className="flex items-center gap-2 text-white/80 bg-white/5 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-kcf-red" />
                <span>{t('instantAccess')}</span>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-kcf-red to-kcf-gold rounded-3xl opacity-20 blur-xl" />
              <img
                src="/assets/logo-full.jpg"
                alt="Krown Creative Factory"
                className="relative w-full max-w-md mx-auto rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div
          className={`transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              {t('whatClientsSay')}
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Testimonial Cards */}
            <div className="relative h-[320px] sm:h-[280px]">
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`absolute inset-0 transition-all duration-500 ${
                    index === activeTestimonial
                      ? 'opacity-100 translate-x-0 z-10'
                      : index < activeTestimonial
                      ? 'opacity-0 -translate-x-full z-0'
                      : 'opacity-0 translate-x-full z-0'
                  }`}
                >
                  <div className="glass-dark rounded-3xl p-6 sm:p-10 h-full">
                    <Quote className="w-10 h-10 text-kcf-red/30 mb-4" />
                    <p className="text-white/80 text-base sm:text-lg md:text-xl mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-kcf-red"
                        />
                        <div>
                          <h4 className="text-white font-semibold">{testimonial.name}</h4>
                          <p className="text-white/60 text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-kcf-gold fill-kcf-gold" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Dots */}
            <div className="flex items-center justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial
                      ? 'bg-kcf-red w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
