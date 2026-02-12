import { useState } from 'react';
import { Toaster } from '@/components/ui/sonner';
import { Navigation } from '@/sections/Navigation';
import { Hero } from '@/sections/Hero';
import { LogoShowcaseSection } from '@/sections/LogoShowcase';
import { Categories } from '@/sections/Categories';
import { FeaturedDesigns } from '@/sections/FeaturedDesigns';
import { LatestItems } from '@/sections/LatestItems';
import { BlogSection } from '@/sections/Blog';
import { About } from '@/sections/About';
import { Footer } from '@/sections/Footer';
import { CartDrawer } from '@/components/custom/CartDrawer';
import { LoginModal } from '@/components/custom/LoginModal';
import { FloatingCTA } from '@/components/custom/FloatingCTA';
import { CategoryPage } from '@/pages/CategoryPage';
import { AboutPage } from '@/pages/AboutPage';
import { ContactPage } from '@/pages/ContactPage';
import { TermsPage } from '@/pages/TermsPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { useCart } from '@/hooks/useCart';
import { useAuth } from '@/hooks/useAuth';
import { useSearch } from '@/hooks/useSearch';
import { useLanguage } from '@/hooks/useLanguage';
import { categories, designs, testimonials, stats, blogPosts, logoShowcase } from '@/data/designs';
import './App.css';

type Page = 'home' | 'category' | 'about' | 'contact' | 'terms' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const {
    cartItems,
    cartTotal,
    cartCount,
    isCartOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    closeCart
  } = useCart();

  const {
    user,
    isLoginModalOpen,
    login,
    register,
    logout,
    openLoginModal,
    closeLoginModal
  } = useAuth();

  const {
    searchQuery,
    searchFilter,
    filteredDesigns,
    handleSearch,
    handleFilterChange
  } = useSearch(designs);

  const {
    language,
    setLanguage,
    t
  } = useLanguage();

  const navigateToHome = () => {
    setCurrentPage('home');
    setSelectedCategory('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToCategory = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentPage('category');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToAbout = () => {
    setCurrentPage('about');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTerms = () => {
    setCurrentPage('terms');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToPrivacy = () => {
    setCurrentPage('privacy');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render the appropriate page
  const renderPage = () => {
    switch (currentPage) {
      case 'category':
        return (
          <CategoryPage
            slug={selectedCategory}
            onBack={navigateToHome}
            onAddToCart={addToCart}
            t={t}
          />
        );
      case 'about':
        return <AboutPage onBack={navigateToHome} t={t} />;
      case 'contact':
        return <ContactPage onBack={navigateToHome} t={t} />;
      case 'terms':
        return <TermsPage onBack={navigateToHome} t={t} />;
      case 'privacy':
        return <PrivacyPage onBack={navigateToHome} t={t} />;
      default:
        return (
          <main>
            <Hero 
              searchQuery={searchQuery} 
              onSearchChange={handleSearch}
              stats={stats}
              t={t}
            />
            
            <LogoShowcaseSection 
              logos={logoShowcase}
              t={t}
            />
            
            <Categories 
              categories={categories} 
              t={t}
              onCategoryClick={navigateToCategory}
            />
            
            <FeaturedDesigns 
              designs={filteredDesigns} 
              onAddToCart={addToCart}
              t={t}
            />
            
            <LatestItems 
              designs={filteredDesigns} 
              onAddToCart={addToCart}
              t={t}
            />
            
            <BlogSection posts={blogPosts} t={t} />
            
            <About testimonials={testimonials} stats={stats} t={t} />
          </main>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Toaster 
        position="top-right" 
        toastOptions={{
          style: {
            background: '#111',
            color: '#fff',
            border: '1px solid rgba(220, 38, 38, 0.3)'
          }
        }}
      />
      
      {/* Navigation - Only show on home page */}
      {currentPage === 'home' && (
        <Navigation
          cartCount={cartCount}
          user={user}
          onCartClick={closeCart}
          onLoginClick={openLoginModal}
          onLogout={logout}
          searchQuery={searchQuery}
          onSearchChange={handleSearch}
          searchFilter={searchFilter}
          onFilterChange={handleFilterChange}
          language={language}
          onLanguageChange={setLanguage}
          onNavigateAbout={navigateToAbout}
          onNavigateContact={navigateToContact}
          t={t}
        />
      )}

      {/* Page Content */}
      {renderPage()}

      {/* Footer - Only show on home page */}
      {currentPage === 'home' && (
        <Footer 
          t={t}
          onNavigateTerms={navigateToTerms}
          onNavigatePrivacy={navigateToPrivacy}
          onNavigateContact={navigateToContact}
        />
      )}

      {/* Floating CTA Button - Show on all pages */}
      <FloatingCTA t={t} />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={closeCart}
        cartItems={cartItems}
        cartTotal={cartTotal}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
        onClearCart={clearCart}
        t={t}
      />

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={closeLoginModal}
        onLogin={login}
        onRegister={register}
        t={t}
      />
    </div>
  );
}

export default App;
