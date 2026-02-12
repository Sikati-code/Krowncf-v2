import { useState } from 'react';
import { MessageCircle, Send, Mail, Phone, Palette, Users, Type, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { toast } from 'sonner';

interface FloatingCTAProps {
  t: (key: string) => string;
}

export function FloatingCTA({ t }: FloatingCTAProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    brandName: '',
    brandDescription: '',
    targetAudience: '',
    brandColor: '',
    logoType: '',
    brandValue: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast.success('Thank you! We will contact you within 24 hours.');
    setFormData({
      brandName: '',
      brandDescription: '',
      targetAudience: '',
      brandColor: '',
      logoType: '',
      brandValue: ''
    });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button - Mobile Optimized */}
      <div className="fixed bottom-3 left-3 right-3 z-50 sm:bottom-6 sm:left-auto sm:right-6 sm:w-auto">
        <button
          onClick={() => setIsOpen(true)}
          className="group relative w-full sm:w-auto flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-kcf-red to-kcf-dark-red text-white px-4 sm:px-6 py-3 sm:py-4 rounded-full shadow-kcf-lg hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-95"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 rounded-full bg-kcf-red animate-ping opacity-20" />
          
          <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <div className="text-left">
            <span className="block text-xs sm:text-sm font-medium opacity-90">{t('needBranding')}</span>
            <span className="block text-sm sm:text-base font-bold">{t('letsWork')} {t('together')}</span>
          </div>
        </button>
      </div>

      {/* Branding Inquiry Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-lg bg-[#111] border border-kcf-red/30 max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl sm:text-2xl font-bold text-white text-center">
              <span className="kcf-text-gradient">{t('needBranding')}</span>
              <br />
              <span className="text-white">{t('letsWork')} {t('together')}</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="mt-4">
            <p className="text-white/60 text-center mb-6 text-sm">
              Tell us about your brand and we'll create something amazing for you.
            </p>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Brand Name */}
              <div>
                <label className="text-sm text-white/70 mb-1.5 block flex items-center gap-2">
                  <Type className="w-4 h-4 text-kcf-red" />
                  What is your Brand Name?
                </label>
                <input
                  type="text"
                  value={formData.brandName}
                  onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red transition-all text-sm"
                  placeholder="e.g., Royal Events"
                  required
                />
              </div>
              
              {/* Brand Description */}
              <div>
                <label className="text-sm text-white/70 mb-1.5 block flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-kcf-red" />
                  Brief description of what the Brand does
                </label>
                <textarea
                  value={formData.brandDescription}
                  onChange={(e) => setFormData({ ...formData, brandDescription: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red transition-all resize-none text-sm"
                  placeholder="We are an event planning company specializing in weddings and corporate events..."
                  rows={3}
                  required
                />
              </div>
              
              {/* Target Audience */}
              <div>
                <label className="text-sm text-white/70 mb-1.5 block flex items-center gap-2">
                  <Users className="w-4 h-4 text-kcf-red" />
                  Target audience
                </label>
                <input
                  type="text"
                  value={formData.targetAudience}
                  onChange={(e) => setFormData({ ...formData, targetAudience: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red transition-all text-sm"
                  placeholder="e.g., Young professionals, ages 25-40, middle to upper income"
                  required
                />
              </div>
              
              {/* Brand Color */}
              <div>
                <label className="text-sm text-white/70 mb-1.5 block flex items-center gap-2">
                  <Palette className="w-4 h-4 text-kcf-red" />
                  Any Brand color in mind?
                </label>
                <input
                  type="text"
                  value={formData.brandColor}
                  onChange={(e) => setFormData({ ...formData, brandColor: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red transition-all text-sm"
                  placeholder="e.g., Royal blue and gold, or open to suggestions"
                />
              </div>
              
              {/* Logo Type */}
              <div>
                <label className="text-sm text-white/70 mb-1.5 block flex items-center gap-2">
                  <Type className="w-4 h-4 text-kcf-red" />
                  Logo type (Icon, Text or Initials)
                </label>
                <select
                  value={formData.logoType}
                  onChange={(e) => setFormData({ ...formData, logoType: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-kcf-red transition-all text-sm appearance-none cursor-pointer"
                  required
                >
                  <option value="" className="bg-[#111]">Select logo type</option>
                  <option value="icon" className="bg-[#111]">Icon Only</option>
                  <option value="text" className="bg-[#111]">Text/Wordmark</option>
                  <option value="initials" className="bg-[#111]">Initials/Lettermark</option>
                  <option value="combination" className="bg-[#111]">Icon + Text (Combination)</option>
                  <option value="not-sure" className="bg-[#111]">Not sure - need guidance</option>
                </select>
              </div>
              
              {/* Brand Value */}
              <div>
                <label className="text-sm text-white/70 mb-1.5 block flex items-center gap-2">
                  <Heart className="w-4 h-4 text-kcf-red" />
                  Brand value (what do you want the audience to see or feel?)
                </label>
                <textarea
                  value={formData.brandValue}
                  onChange={(e) => setFormData({ ...formData, brandValue: e.target.value })}
                  className="w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red transition-all resize-none text-sm"
                  placeholder="I want people to feel luxury, trust, and elegance when they see my logo..."
                  rows={3}
                  required
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-kcf-red hover:bg-kcf-dark-red text-white py-4 rounded-xl font-medium transition-all hover:scale-[1.02] mt-2"
              >
                <Send className="w-4 h-4 mr-2" />
                Submit Inquiry
              </Button>
              
              <p className="text-white/40 text-xs text-center">
                We'll get back to you within 24 hours
              </p>
            </form>
            
            {/* Alternative Contact Methods */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/50 text-sm text-center mb-4">Or reach us directly</p>
              <div className="flex justify-center gap-3 flex-wrap">
                <a
                  href="mailto:info@krowncf.com"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-white/70 hover:bg-kcf-red/20 hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">Email</span>
                </a>
                <a
                  href="tel:+234XXXXXXXX"
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full text-white/70 hover:bg-kcf-red/20 hover:text-white transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">Call</span>
                </a>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
