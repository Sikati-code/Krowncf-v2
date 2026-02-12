import { ArrowLeft, Award, Users, Globe, Zap, Target, Heart, Lightbulb, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface AboutPageProps {
  onBack: () => void;
  t: (key: string) => string;
}

export function AboutPage({ onBack, t }: AboutPageProps) {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower creatives worldwide with premium, accessible design resources that elevate their work and help them achieve their vision.'
    },
    {
      icon: Heart,
      title: 'Our Passion',
      description: 'We are passionate about design and dedicated to creating assets that inspire creativity and drive results for our clients.'
    },
    {
      icon: Lightbulb,
      title: 'Our Innovation',
      description: 'We constantly push boundaries, exploring new design trends and technologies to deliver cutting-edge creative solutions.'
    },
    {
      icon: Shield,
      title: 'Our Quality',
      description: 'Every design undergoes rigorous quality checks to ensure it meets our high standards before reaching our customers.'
    }
  ];

  const milestones = [
    { year: '2018', title: 'Founded', description: 'Krown Creative Factory was born in Lagos, Nigeria' },
    { year: '2019', title: '1,000 Designs', description: 'Reached our first milestone of 1,000 premium designs' },
    { year: '2020', title: 'Global Reach', description: 'Expanded to serve customers in over 20 countries' },
    { year: '2021', title: '5,000 Designs', description: 'Catalog grew to 5,000+ unique design assets' },
    { year: '2022', title: 'Industry Leader', description: 'Recognized as Nigeria\'s premier design marketplace' },
    { year: '2024', title: '15,000+ Designs', description: 'Now serving 8,500+ happy clients worldwide' }
  ];

  return (
    <div className="min-h-screen bg-kcf-black">
      {/* Hero Section */}
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-12 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-kcf-red/10 rounded-full blur-3xl -translate-x-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-kcf-gold/10 rounded-full blur-3xl translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-white/60 hover:text-white hover:bg-white/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToHome')}
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
                <Award className="w-4 h-4 text-kcf-gold" />
                <span className="text-sm text-white/80">{t('aboutUs')}</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                We Are <span className="kcf-text-gradient">Krown Creative Factory</span>
              </h1>
              <p className="text-white/70 text-lg mb-6 leading-relaxed">
                Founded with a vision to revolutionize the graphic design industry, Krown Creative Factory 
                has grown to become Nigeria&apos;s premier destination for premium design assets.
              </p>
              <p className="text-white/60 leading-relaxed">
                We believe that great design should be accessible to everyone. Our team of talented designers 
                works tirelessly to create stunning templates, flyers, illustrations, and more that help 
                businesses and individuals bring their creative visions to life.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-kcf-red to-kcf-gold rounded-3xl opacity-20 blur-xl" />
              <img 
                src="/assets/logo-full.jpg" 
                alt="Krown Creative Factory" 
                className="relative w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-transparent via-kcf-red/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '15,000+', label: 'Designs' },
              { value: '8,500+', label: 'Happy Clients' },
              { value: '125,000+', label: 'Downloads' },
              { value: '50+', label: 'Countries' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 glass-dark rounded-2xl">
                <div className="text-3xl sm:text-4xl font-bold kcf-text-gradient mb-2">{stat.value}</div>
                <div className="text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="kcf-text-gradient">Core Values</span>
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              The principles that guide everything we do at Krown Creative Factory
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="p-6 glass-dark rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-kcf-red/20 rounded-xl flex items-center justify-center mb-4">
                  <value.icon className="w-7 h-7 text-kcf-red" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/60 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 px-4 sm:px-6 lg:px-12 bg-gradient-to-b from-transparent via-kcf-gold/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Choose <span className="kcf-text-gradient">KCF?</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: 'Premium Quality',
                description: 'Every design is crafted by professional designers with meticulous attention to detail. We never compromise on quality.'
              },
              {
                icon: Users,
                title: 'Customer First',
                description: 'Our customers are at the heart of everything we do. We listen, adapt, and continuously improve based on your feedback.'
              },
              {
                icon: Globe,
                title: 'Global Standards',
                description: 'While proudly Nigerian, our designs meet international standards and are used by creatives worldwide.'
              },
              {
                icon: Zap,
                title: 'Instant Access',
                description: 'No waiting. Get immediate access to your downloads after purchase with our streamlined system.'
              },
              {
                icon: Shield,
                title: 'Secure Platform',
                description: 'Your data and transactions are protected with industry-standard security measures.'
              },
              {
                icon: Heart,
                title: 'Passionate Support',
                description: 'Our support team is passionate about helping you succeed. We&apos;re here when you need us.'
              }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <div className="w-12 h-12 bg-kcf-red/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-kcf-red" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-white/60 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Our <span className="kcf-text-gradient">Journey</span>
            </h2>
            <p className="text-white/60">From a small startup to Nigeria&apos;s premier design marketplace</p>
          </div>
          
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-kcf-red via-kcf-gold to-kcf-red" />
            
            {milestones.map((milestone, index) => (
              <div 
                key={index} 
                className={`relative flex items-start gap-8 mb-8 ${
                  index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${index % 2 === 0 ? 'sm:text-right' : 'sm:text-left'} hidden sm:block`} />
                <div className="w-8 h-8 bg-kcf-red rounded-full flex items-center justify-center flex-shrink-0 relative z-10">
                  <div className="w-3 h-3 bg-white rounded-full" />
                </div>
                <div className="flex-1 pl-4 sm:pl-0">
                  <span className="text-kcf-red font-bold text-lg">{milestone.year}</span>
                  <h3 className="text-white font-semibold text-lg mt-1">{milestone.title}</h3>
                  <p className="text-white/60 text-sm mt-1">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team CTA */}
      <div className="py-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-white/60 mb-8 max-w-2xl mx-auto">
            Whether you need a custom design or want to explore our extensive collection, 
            we&apos;re here to help bring your creative vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={onBack}
              className="bg-kcf-red hover:bg-kcf-dark-red text-white px-8 py-6 rounded-full"
            >
              {t('exploreDesigns')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
