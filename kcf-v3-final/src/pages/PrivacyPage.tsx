import { ArrowLeft, Lock, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PrivacyPageProps {
  onBack: () => void;
  t: (key: string) => string;
}

export function PrivacyPage({ onBack, t }: PrivacyPageProps) {
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
              Privacy <span className="kcf-text-gradient">Policy</span>
            </h1>
            <p className="text-white/60">
              Last updated: January 2024
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="glass-dark rounded-2xl p-6 sm:p-8 space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                  <Lock className="w-6 h-6 text-kcf-red" />
                  Introduction
                </h2>
                <p className="text-white/70 leading-relaxed">
                  Krown Creative Factory (&quot;KCF&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
                  when you use our website and services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information We Collect</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li><strong>Account Information:</strong> Name, email address, password when you create an account</li>
                  <li><strong>Payment Information:</strong> Credit card details, billing address (processed securely by third parties)</li>
                  <li><strong>Purchase History:</strong> Records of your purchases and downloads</li>
                  <li><strong>Communication:</strong> Information you provide when contacting our support team</li>
                  <li><strong>Usage Data:</strong> How you interact with our website and services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">How We Use Your Information</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li>Provide, maintain, and improve our services</li>
                  <li>Process your transactions and send related information</li>
                  <li>Send you technical notices, updates, and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Personalize your experience on our platform</li>
                  <li>Monitor and analyze trends and usage</li>
                  <li>Detect, prevent, and address technical issues and fraud</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Information Sharing</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  We do not sell or rent your personal information to third parties. We may share 
                  your information in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li><strong>Service Providers:</strong> With trusted third parties who assist us in operating our website and services</li>
                  <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                  <li><strong>Business Transfers:</strong> In connection with a merger, sale, or acquisition</li>
                  <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Security</h2>
                <p className="text-white/70 leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your 
                  personal information against unauthorized access, alteration, disclosure, or destruction. 
                  However, no method of transmission over the Internet or electronic storage is 100% secure, 
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Cookies and Tracking</h2>
                <p className="text-white/70 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  Cookies help us remember your preferences, understand how you use our site, and improve 
                  our services. You can control cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Your Rights</h2>
                <p className="text-white/70 leading-relaxed mb-4">
                  Depending on your location, you may have the following rights regarding your personal information:
                </p>
                <ul className="list-disc list-inside text-white/70 space-y-2 ml-4">
                  <li><strong>Access:</strong> Request a copy of the personal information we hold about you</li>
                  <li><strong>Correction:</strong> Request that we correct inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request that we delete your personal information</li>
                  <li><strong>Restriction:</strong> Request that we limit how we use your information</li>
                  <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
                  <li><strong>Objection:</strong> Object to certain uses of your information</li>
                </ul>
                <p className="text-white/70 leading-relaxed mt-4">
                  To exercise these rights, please contact us at info@krowncf.com.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Data Retention</h2>
                <p className="text-white/70 leading-relaxed">
                  We retain your personal information for as long as necessary to fulfill the purposes 
                  outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. 
                  When we no longer need your information, we will securely delete or anonymize it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Children&apos;s Privacy</h2>
                <p className="text-white/70 leading-relaxed">
                  Our services are not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13. If you are a parent or guardian 
                  and believe your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">International Transfers</h2>
                <p className="text-white/70 leading-relaxed">
                  Your information may be transferred to and processed in countries other than your own. 
                  We ensure appropriate safeguards are in place to protect your information when transferred internationally.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
                <p className="text-white/70 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes 
                  by posting the new policy on this page and updating the &quot;Last updated&quot; date. 
                  We encourage you to review this policy periodically.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
                <p className="text-white/70 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 space-y-2">
                  <p className="text-kcf-red">Email: info@krowncf.com</p>
                  <p className="text-white/60">Address: Lagos, Nigeria</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
