import { ArrowLeft, Shield, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TermsPageProps {
  onBack: () => void;
  t: (key: string) => string;
}

export function TermsPage({ onBack, t }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-kcf-black">
      <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
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
              <FileText className="w-4 h-4 text-kcf-red" />
              <span className="text-sm text-white/80">Legal</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Terms of <span className="kcf-text-gradient">Service</span>
            </h1>
            <p className="text-white/60">
              Last updated: January 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="glass-dark rounded-2xl p-6 sm:p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-kcf-red" />
                  1. Acceptance of Terms
                </h2>
                <p className="text-white/70 leading-relaxed">
                  By accessing and using Krown Creative Factory (&quot;KCF&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), 
                  you agree to be bound by these Terms of Service. If you do not agree to these terms, 
                  please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">2. Use of Services</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Our services are provided for your personal and commercial use. You agree to use our 
                  services only for lawful purposes and in accordance with these Terms.
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li>You must be at least 18 years old to use our services</li>
                  <li>You are responsible for maintaining the confidentiality of your account</li>
                  <li>You agree not to share your account credentials with others</li>
                  <li>You will not use our services for any illegal or unauthorized purpose</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">3. Purchases and Payments</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  When you make a purchase on KCF, you agree to provide accurate and complete payment information. 
                  All prices are listed in USD unless otherwise specified.
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li>All sales are final unless otherwise stated in our Refund Policy</li>
                  <li>Prices are subject to change without notice</li>
                  <li>You are responsible for any applicable taxes</li>
                  <li>We use secure third-party payment processors</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">4. License and Usage Rights</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  When you purchase a design from KCF, you receive a license to use that design 
                  according to the terms specified with each product:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li><strong>Personal License:</strong> For personal, non-commercial use only</li>
                  <li><strong>Commercial License:</strong> For business and commercial projects</li>
                  <li><strong>Extended License:</strong> For resale, merchandise, and large-scale distribution</li>
                </ul>
                <p className="text-white/70 leading-relaxed mt-4">
                  You may not resell, redistribute, or claim ownership of our designs as your own work. 
                  You may not use our designs in ways that are defamatory, obscene, or illegal.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">5. Intellectual Property</h2>
                <p className="text-white/70 leading-relaxed">
                  All content on KCF, including designs, logos, text, graphics, and software, 
                  is the property of Krown Creative Factory or our licensors and is protected by 
                  copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">6. User Content</h2>
                <p className="text-white/70 leading-relaxed">
                  If you submit any content to KCF (such as reviews or testimonials), you grant us 
                  a non-exclusive, royalty-free license to use, modify, and display that content. 
                  You represent that you have the right to submit such content.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">7. Termination</h2>
                <p className="text-white/70 leading-relaxed">
                  We reserve the right to terminate or suspend your account at any time, without notice, 
                  for conduct that we believe violates these Terms or is harmful to other users, us, or 
                  third parties, or for any other reason.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">8. Limitation of Liability</h2>
                <p className="text-white/70 leading-relaxed">
                  KCF shall not be liable for any indirect, incidental, special, consequential, or 
                  punitive damages arising out of or relating to your use of our services. Our total 
                  liability shall not exceed the amount you paid for the specific product or service 
                  giving rise to the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                <p className="text-white/70 leading-relaxed">
                  We may update these Terms from time to time. We will notify you of any changes by 
                  posting the new Terms on this page. Your continued use of our services after any 
                  changes constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">10. Contact Us</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have any questions about these Terms, please contact us at:
                </p>
                <p className="text-kcf-red mt-2">info@krowncf.com</p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
