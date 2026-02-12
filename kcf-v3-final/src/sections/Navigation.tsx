import { useState, useEffect } from 'react';
import { 
  Search, 
  ShoppingCart, 
  User, 
  Menu, 
  X, 
  LogOut,
  ChevronDown,
  Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { User as UserType, Language } from '@/types';

interface NavigationProps {
  cartCount: number;
  user: UserType | null;
  onCartClick: () => void;
  onLoginClick: () => void;
  onLogout: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  searchFilter: 'all' | 'name' | 'tags';
  onFilterChange: (filter: 'all' | 'name' | 'tags') => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onNavigateAbout: () => void;
  onNavigateContact: () => void;
  t: (key: string) => string;
}

export function Navigation({
  cartCount,
  user,
  onCartClick,
  onLoginClick,
  onLogout,
  searchQuery,
  onSearchChange,
  searchFilter,
  onFilterChange,
  language,
  onLanguageChange,
  onNavigateAbout,
  onNavigateContact,
  t
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    if (href === '#about') {
      onNavigateAbout();
    } else if (href === '#contact') {
      onNavigateContact();
    } else {
      scrollToSection(href);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { name: t('home'), href: '#home' },
    { name: t('categories'), href: '#categories' },
    { name: t('featured'), href: '#featured' },
    { name: t('latest'), href: '#latest' },
    { name: t('blog'), href: '#blog' },
    { name: t('about'), href: '#about' },
    { name: t('contactUs'), href: '#contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl shadow-kcf py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#home" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 animate-pulse-glow rounded-full">
                <img 
                  src="/assets/logo.png" 
                  alt="KCF Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold text-white group-hover:text-kcf-red transition-colors">
                  KROWN
                </h1>
                <p className="text-xs text-kcf-gray -mt-1">CREATIVE FACTORY</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-sm font-medium text-white/80 hover:text-kcf-red transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-kcf-red transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>

            {/* Search Bar */}
            <div className="hidden md:flex items-center flex-1 max-w-md mx-6">
              <div 
                className={`relative flex items-center w-full transition-all duration-300 ${
                  isSearchFocused ? 'scale-105' : ''
                }`}
              >
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="absolute left-2 flex items-center gap-1 text-xs text-white/60 hover:text-white transition-colors bg-white/5 px-2 py-1 rounded">
                      {searchFilter === 'all' ? t('categories') : searchFilter === 'name' ? 'Name' : 'Tags'}
                      <ChevronDown className="w-3 h-3" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#111] border-kcf-red/30">
                    <DropdownMenuItem onClick={() => onFilterChange('all')} className="text-white hover:bg-kcf-red/20">
                      {t('categories')}
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onFilterChange('name')} className="text-white hover:bg-kcf-red/20">
                      Name
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => onFilterChange('tags')} className="text-white hover:bg-kcf-red/20">
                      Tags
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
                <input
                  type="text"
                  placeholder={t('searchPlaceholder')}
                  value={searchQuery}
                  onChange={(e) => onSearchChange(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-2.5 pl-24 pr-12 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red focus:ring-1 focus:ring-kcf-red transition-all"
                />
                <Search className="absolute right-4 w-4 h-4 text-white/50" />
              </div>
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Language Switcher */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1.5 px-3 py-2 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all">
                    <Globe className="w-4 h-4" />
                    <span className="text-sm font-medium uppercase">{language}</span>
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#111] border-kcf-red/30">
                  <DropdownMenuItem 
                    onClick={() => onLanguageChange('en')} 
                    className={`text-white hover:bg-kcf-red/20 ${language === 'en' ? 'bg-kcf-red/20' : ''}`}
                  >
                    🇬🇧 English
                  </DropdownMenuItem>
                  <DropdownMenuItem 
                    onClick={() => onLanguageChange('fr')} 
                    className={`text-white hover:bg-kcf-red/20 ${language === 'fr' ? 'bg-kcf-red/20' : ''}`}
                  >
                    🇫🇷 Français
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Cart */}
              <button
                onClick={onCartClick}
                className="relative p-2.5 text-white hover:text-kcf-red transition-colors hover:bg-white/10 rounded-full"
              >
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center p-0 bg-kcf-red text-white text-xs animate-scale-in">
                    {cartCount}
                  </Badge>
                )}
              </button>

              {/* User */}
              {user ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center gap-2 p-1.5 pr-3 rounded-full hover:bg-white/10 transition-colors">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full border-2 border-kcf-red"
                      />
                      <span className="hidden sm:block text-sm text-white">{user.name}</span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#111] border-kcf-red/30" align="end">
                    <DropdownMenuItem className="text-white hover:bg-kcf-red/20">
                      <User className="w-4 h-4 mr-2" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem className="text-white hover:bg-kcf-red/20">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      My Orders
                    </DropdownMenuItem>
                    <DropdownMenuSeparator className="bg-white/10" />
                    <DropdownMenuItem onClick={onLogout} className="text-kcf-red hover:bg-kcf-red/20">
                      <LogOut className="w-4 h-4 mr-2" />
                      {t('logout')}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button
                  onClick={onLoginClick}
                  variant="outline"
                  className="hidden sm:flex items-center gap-2 border-kcf-red text-kcf-red hover:bg-kcf-red hover:text-white transition-all"
                >
                  <User className="w-4 h-4" />
                  {t('login')}
                </Button>
              )}

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white hover:text-kcf-red transition-colors"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <div className="absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-xl" onClick={() => setIsMobileMenuOpen(false)} />
        <div
          className={`absolute top-20 left-4 right-4 bg-[#111] border border-kcf-red/30 rounded-2xl p-6 transition-all duration-500 ${
            isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          {/* Mobile Search */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red"
            />
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/50" />
          </div>

          {/* Mobile Nav Links */}
          <div className="space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                className="block py-3 px-4 text-white hover:text-kcf-red hover:bg-white/5 rounded-lg transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Language Switcher */}
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-white/50 text-sm mb-2">Language / Langue</p>
            <div className="flex gap-2">
              <button
                onClick={() => onLanguageChange('en')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm transition-all ${
                  language === 'en' ? 'bg-kcf-red text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                🇬🇧 English
              </button>
              <button
                onClick={() => onLanguageChange('fr')}
                className={`flex-1 py-2 px-4 rounded-lg text-sm transition-all ${
                  language === 'fr' ? 'bg-kcf-red text-white' : 'bg-white/5 text-white/70 hover:bg-white/10'
                }`}
              >
                🇫🇷 Français
              </button>
            </div>
          </div>

          {/* Mobile Login */}
          {!user && (
            <Button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onLoginClick();
              }}
              className="w-full mt-6 bg-kcf-red hover:bg-kcf-dark-red text-white"
            >
              <User className="w-4 h-4 mr-2" />
              {t('login')}
            </Button>
          )}
        </div>
      </div>
    </>
  );
}
