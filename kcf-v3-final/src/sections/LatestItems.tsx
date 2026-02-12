import { useEffect, useRef, useState } from 'react';
import { 
  ShoppingCart, 
  Heart, 
  Clock, 
  Star,
  Zap
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Design } from '@/types';

interface LatestItemsProps {
  designs: Design[];
  onAddToCart: (design: Design) => void;
  t: (key: string) => string;
}

export function LatestItems({ designs, onAddToCart, t }: LatestItemsProps) {
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const latestDesigns = [...designs]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 8);

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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
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

  const getTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return t('new');
    if (diffInDays === 1) return '1 day ago';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    return `${Math.floor(diffInDays / 30)} months ago`;
  };

  return (
    <section id="latest" className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(220, 38, 38, 0.03) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(220, 38, 38, 0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
              <Clock className="w-4 h-4 text-kcf-red" />
              <span className="text-sm text-white/80">{t('freshArrivals')}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              {t('latestItems')}
            </h2>
            <p className="text-white/60 max-w-xl">
              {t('latestDescription')}
            </p>
          </div>
          
          <div className="flex items-center gap-4 mt-6 md:mt-0">
            <div className="flex items-center gap-2 text-sm text-white/60">
              <Zap className="w-4 h-4 text-kcf-gold" />
              <span>8 {t('newThisWeek')}</span>
            </div>
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {latestDesigns.map((design, index) => (
            <div
              key={design.id}
              ref={(el) => { cardRefs.current[index] = el; }}
              className={`break-inside-avoid group relative bg-gradient-to-b from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-kcf-red/50 transition-all duration-700 ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 75}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={design.image}
                  alt={design.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />

                {/* New Badge */}
                <Badge className="absolute top-3 left-3 bg-kcf-gold text-[#0a0a0a] font-medium">
                  {t('new')}
                </Badge>

                {/* Favorite Button */}
                <button
                  onClick={() => toggleFavorite(design.id)}
                  className={`absolute top-3 right-3 p-2 rounded-full transition-all ${
                    favorites.has(design.id)
                      ? 'bg-kcf-red text-white'
                      : 'bg-black/50 text-white hover:bg-kcf-red'
                  }`}
                >
                  <Heart className={`w-4 h-4 ${favorites.has(design.id) ? 'fill-current' : ''}`} />
                </button>

                {/* Quick Actions */}
                <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <Button
                    onClick={() => onAddToCart(design)}
                    size="sm"
                    className="w-full bg-kcf-red hover:bg-kcf-dark-red text-white"
                  >
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    {t('addToCart')}
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                {/* Time Ago */}
                <div className="flex items-center gap-1 text-xs text-white/40 mb-2">
                  <Clock className="w-3 h-3" />
                  {getTimeAgo(design.createdAt)}
                </div>

                {/* Title */}
                <h3 className="text-base font-semibold text-white mb-2 line-clamp-1 group-hover:text-kcf-red transition-colors">
                  {design.title}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-3 h-3 text-kcf-gold fill-kcf-gold" />
                  <span className="text-sm text-white/60">{design.rating}</span>
                  <span className="text-xs text-white/40">({design.reviewCount})</span>
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-lg font-bold text-white">
                      ${design.price}
                    </span>
                    {design.originalPrice && (
                      <span className="text-sm text-white/40 line-through">
                        ${design.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  {/* Formats */}
                  <div className="flex items-center gap-1">
                    {design.format.slice(0, 2).map((format) => (
                      <span
                        key={format}
                        className="px-1.5 py-0.5 bg-white/10 rounded text-[10px] text-white/60"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full transition-all hover:scale-105"
          >
            {t('loadMore')}
          </Button>
        </div>
      </div>
    </section>
  );
}
