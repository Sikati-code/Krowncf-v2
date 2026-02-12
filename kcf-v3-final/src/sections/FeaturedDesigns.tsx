import { useEffect, useRef, useState } from 'react';
import { 
  ShoppingCart, 
  Heart, 
  Eye, 
  Star, 
  Download, 
  Sparkles,
  TrendingUp,
  Flame
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Design } from '@/types';

interface FeaturedDesignsProps {
  designs: Design[];
  onAddToCart: (design: Design) => void;
  t: (key: string) => string;
}

export function FeaturedDesigns({ designs, onAddToCart, t }: FeaturedDesignsProps) {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const featuredDesigns = designs.filter(d => d.isFeatured || d.isBestseller).slice(0, 6);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = cardRefs.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && index !== -1) {
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const toggleFavorite = (designId: string) => {
    setFavorites((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(designId)) {
        newFavorites.delete(designId);
      } else {
        newFavorites.add(designId);
      }
      return newFavorites;
    });
  };

  return (
    <section id="featured" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-kcf-red/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-kcf-gold/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
              <Sparkles className="w-4 h-4 text-kcf-gold" />
              <span className="text-sm text-white/80">{t('handpickedForYou')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t('featuredDesigns')}
            </h2>
            <p className="text-white/60 max-w-xl">
              {t('featuredDescription')}
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="flex items-center gap-2 text-sm text-white/60">
              <TrendingUp className="w-4 h-4 text-kcf-red" />
              <span>{t('updatedDaily')}</span>
            </div>
          </div>
        </div>

        {/* Designs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDesigns.map((design, index) => (
            <div
              key={design.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`group relative bg-gradient-to-b from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-kcf-red/50 transition-all duration-700 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredCard(design.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className={`absolute inset-0 bg-[#0a0a0a]/60 transition-opacity duration-300 ${
                  hoveredCard === design.id ? 'opacity-100' : 'opacity-0'
                }`} />

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {design.isNew && (
                    <Badge className="bg-kcf-gold text-[#0a0a0a] font-medium">
                      {t('new')}
                    </Badge>
                  )}
                  {design.isBestseller && (
                    <Badge className="bg-kcf-red text-white font-medium">
                      <Flame className="w-3 h-3 mr-1" />
                      {t('bestseller')}
                    </Badge>
                  )}
                  {design.originalPrice && (
                    <Badge className="bg-green-500 text-white font-medium">
                      {t('sale')}
                    </Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className={`absolute top-4 right-4 flex flex-col gap-2 transition-all duration-300 ${
                  hoveredCard === design.id ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                }`}>
                  <button
                    onClick={() => toggleFavorite(design.id)}
                    className={`p-2.5 rounded-full transition-all ${
                      favorites.has(design.id)
                        ? 'bg-kcf-red text-white'
                        : 'bg-white/20 text-white hover:bg-kcf-red'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${favorites.has(design.id) ? 'fill-current' : ''}`} />
                  </button>
                  <button className="p-2.5 rounded-full bg-white/20 text-white hover:bg-kcf-red transition-all">
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Quick Add Button */}
                <div className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
                  hoveredCard === design.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <Button
                    onClick={() => onAddToCart(design)}
                    className="w-full bg-kcf-red hover:bg-kcf-dark-red text-white py-3 rounded-xl font-medium transition-all hover:scale-[1.02]"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {t('addToCart')}
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Category */}
                <div className="text-xs text-kcf-red font-medium mb-2 uppercase tracking-wider">
                  {design.category}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1 group-hover:text-kcf-red transition-colors">
                  {design.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 ${
                          i < Math.floor(design.rating)
                            ? 'text-kcf-gold fill-kcf-gold'
                            : 'text-white/20'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-white/60">({design.reviewCount})</span>
                </div>

                {/* Price & Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">
                      ${design.price}
                    </span>
                    {design.originalPrice && (
                      <span className="text-sm text-white/40 line-through">
                        ${design.originalPrice}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-white/40 text-sm">
                    <Download className="w-4 h-4" />
                    {design.downloads.toLocaleString()}
                  </div>
                </div>

                {/* Formats */}
                <div className="flex items-center gap-2 mt-3">
                  {design.format.map((format) => (
                    <span
                      key={format}
                      className="px-2 py-1 bg-white/10 rounded text-xs text-white/60"
                    >
                      {format}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-kcf-red text-kcf-red hover:bg-kcf-red hover:text-white px-8 py-6 rounded-full transition-all hover:scale-105"
          >
            {t('viewAllFeatured')}
          </Button>
        </div>
      </div>
    </section>
  );
}
