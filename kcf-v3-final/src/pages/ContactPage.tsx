import { useState } from 'react';
import { ArrowLeft, Mail, Phone, MapPin, Send, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ContactPageProps {
  onBack: () => void;
  t: (key: string) => string;
}

export function ContactPage({ onBack, t }: ContactPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@krowncf.com',
      link: 'mailto:info@krowncf.com'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+234 XXX XXX XXXX',
      link: 'tel:+234XXXXXXXX'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Lagos, Nigeria',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      link: null
    }
  ];

  return (
    <div className="min-h-screen bg-kcf-black">
      {/* Header */}
      <div className="pt-24 pb-8 px-4 sm:px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={onBack}
            className="text-white/60 hover:text-white hover:bg-white/10 mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToHome')}
          </Button>
          
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-dark mb-6">
              <MessageCircle className="w-4 h-4 text-kcf-red" />
              <span className="text-sm text-white/80">{t('contactUs')}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Get in <span className="kcf-text-gradient">Touch</span>
            </h1>
            <p className="text-white/60 max-w-2xl mx-auto">
              Have a question or need help with something? We&apos;re here to assist you.
              Reach out and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}
      <div className="px-4 sm:px-6 lg:px-12 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => (
              <div 
                key={index}
                className="p-6 glass-dark rounded-2xl hover:bg-white/10 transition-all duration-300 text-center group"
              >
                <div className="w-14 h-14 bg-kcf-red/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-kcf-red/30 transition-colors">
                  <item.icon className="w-7 h-7 text-kcf-red" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                {item.link ? (
                  <a 
                    href={item.link}
                    className="text-white/60 hover:text-kcf-red transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-white/60">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="px-4 sm:px-6 lg:px-12 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-8">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="p-6 sm:p-8 glass-dark rounded-2xl">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm text-white/70 mb-1.5 block">Your Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red transition-all"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-sm text-white/70 mb-1.5 block">Email Address</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red transition-all"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm text-white/70 mb-1.5 block">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white focus:outline-none focus:border-kcf-red transition-all appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="bg-kcf-black">Select a subject</option>
                      <option value="general" className="bg-kcf-black">General Inquiry</option>
                      <option value="support" className="bg-kcf-black">Technical Support</option>
                      <option value="sales" className="bg-kcf-black">Sales Question</option>
                      <option value="partnership" className="bg-kcf-black">Partnership</option>
                      <option value="feedback" className="bg-kcf-black">Feedback</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm text-white/70 mb-1.5 block">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/5 border border-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/40 focus:outline-none focus:border-kcf-red transition-all resize-none"
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button
                    type="submit"
                    className="w-full bg-kcf-red hover:bg-kcf-dark-red text-white py-4 rounded-xl font-medium transition-all hover:scale-[1.02]"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>

            {/* FAQ */}
            <div className="lg:col-span-2">
              <div className="p-6 glass-dark rounded-2xl">
                <h2 className="text-xl font-bold text-white mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {[
                    {
                      q: 'How do I download my purchases?',
                      a: 'After purchase, go to your Downloads page to access your files instantly.'
                    },
                    {
                      q: 'What file formats are available?',
                      a: 'We offer PSD, AI, EPS, PNG, and more depending on the design.'
                    },
                    {
                      q: 'Can I use designs for commercial projects?',
                      a: 'Yes, all our designs come with commercial usage rights.'
                    },
                    {
                      q: 'Do you offer custom design services?',
                      a: 'Yes! Click the "Need Branding?" button to get started.'
                    }
                  ].map((faq, index) => (
                    <div key={index} className="border-b border-white/10 pb-4 last:border-0">
                      <h3 className="text-white font-medium mb-2">{faq.q}</h3>
                      <p className="text-white/60 text-sm">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Placeholder */}
      <div className="px-4 sm:px-6 lg:px-12 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden glass-dark flex items-center justify-center">
            <div className="text-center">
              <MapPin className="w-12 h-12 text-kcf-red mx-auto mb-4" />
              <p className="text-white font-semibold">Lagos, Nigeria</p>
              <p className="text-white/60 text-sm mt-1">Serving clients worldwide</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
