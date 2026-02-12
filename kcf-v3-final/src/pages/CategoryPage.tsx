import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Heart, Star, Download, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, designs } from '@/data/designs';
import type { Design } from '@/types';

interface CategoryPageProps {
  slug: string;
  onBack: () => void;
  onAddToCart: (design: Design) => void;
  t: (key: string) => string;
}

export function CategoryPage({ slug, onBack, onAddToCart, t }: CategoryPageProps) {
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [sortBy, setSortBy] = useState<'newest' | 'price-low' | 'price-high' | 'popular'>('newest');
  
  const category = categories.find(c => c.slug === slug);
  const categoryDesigns = designs.filter(d => 
    category ? d.category === category.name : false
  );

  const sortedDesigns = [...categoryDesigns].sort((a, b) => {
    switch (sortBy) {
      case 'price-low': return a.price - b.price;
      case 'price-high': return b.price - a.price;
      case 'popular': return b.downloads - a.downloads;
      default: return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    }
  });

  const toggleFavorite = (designId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(designId)) {
        newFavorites.delete(designId);
      } else {
        newFavorites.add(designId);
      }
      return newFavorites;
    });
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-kcf-black pt-32 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-4">Category Not Found</h1>
          <Button onClick={onBack} className="bg-kcf-red hover:bg-kcf-dark-red">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kcf-black">
      {/* Header */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-white/60 hover:text-white hover:bg-white/10 mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToHome')}
          </Button>
          
          <div className="relative rounded-3xl overflow-hidden mb-8">
            <img 
              src={category.image} 
              alt={category.name}
              className="w-full h-48 sm:h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-kcf-black via-kcf-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {category.name}
              </h1>
              <p className="text-white/60 max-w-xl">{category.description}</p>
              <div className="flex items-center gap-4 mt-4">
                <Badge className="bg-kcf-red">
                  {category.itemCount.toLocaleString()} {t('items')}
                </Badge>
              </div>
            </div>
          </div>
          
          {/* Filters */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <p className="text-white/60">
              {t('showing')} {sortedDesigns.length} {t('results')}
            </p>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-white/40" />
              <select 
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as typeof sortBy)}
                className="bg-white/5 border border-white/20 rounded-lg px-3 py-2 text-white text-sm focus:outline-none focus:border-kcf-red"
              >
                <option value="newest" className="bg-kcf-black">{t('newest')}</option>
                <option value="price-low" className="bg-kcf-black">{t('priceLowToHigh')}</option>
                <option value="price-high" className="bg-kcf-black">{t('priceHighToLow')}</option>
                <option value="popular" className="bg-kcf-black">{t('mostPopular')}</option>
              </select>
            </div>
          </div>
          
          {/* Products Grid */}
          {sortedDesigns.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedDesigns.map((design) => (
                <div 
                  key={design.id}
                  className="group relative bg-gradient-to-b from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-kcf-red/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <img
                      src={design.image}
                      alt={design.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-kcf-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <Button
                        onClick={() => onAddToCart(design)}
                        className="w-full bg-kcf-red hover:bg-kcf-dark-red text-white"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {t('addToCart')}
                      </Button>
                    </div>
                    
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
                      {design.isNew && <Badge className="bg-kcf-gold text-kcf-black">NEW</Badge>}
                      {design.isBestseller && <Badge className="bg-kcf-red">BESTSELLER</Badge>}
                      {design.originalPrice && <Badge className="bg-green-500">SALE</Badge>}
                    </div>
                    
                    <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
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
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="text-xs text-kcf-red font-medium mb-2 uppercase tracking-wider">
                      {design.category}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 line-clamp-1 group-hover:text-kcf-red transition-colors">
                      {design.title}
                    </h3>
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
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white">${design.price}</span>
                        {design.originalPrice && (
                          <span className="text-sm text-white/40 line-through">${design.originalPrice}</span>
                        )}
                      </div>
                      <div className="flex items-center gap-1 text-white/40 text-sm">
                        <Download className="w-4 h-4" />
                        {design.downloads.toLocaleString()}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-white/60 text-lg">{t('noProductsInCategory')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
