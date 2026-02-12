import { useState } from 'react';
import { 
  Mail, 
  Lock, 
  User, 
  Eye, 
  EyeOff,
  Chrome,
  Crown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: (email: string, password: string) => Promise<boolean>;
  onRegister: (name: string, email: string, password: string) => Promise<boolean>;
  t: (key: string) => string;
}

export function LoginModal({ isOpen, onClose, onLogin, onRegister, t }: LoginModalProps) {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Login form state
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  
  // Register form state
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail || !loginPassword) {
      toast.error('Please fill in all fields');
      return;
    }
    
    setIsLoading(true);
    try {
      const success = await onLogin(loginEmail, loginPassword);
      if (success) {
        toast.success('Welcome back!');
        onClose();
        setLoginEmail('');
        setLoginPassword('');
      }
    } catch {
      toast.error('Login failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registerName || !registerEmail || !registerPassword) {
      toast.error('Please fill in all fields');
      return;
    }
    if (registerPassword !== registerConfirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    if (registerPassword.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }
    
    setIsLoading(true);
    try {
      const success = await onRegister(registerName, registerEmail, registerPassword);
      if (success) {
        toast.success('Account created successfully!');
        onClose();
        setRegisterName('');
        setRegisterEmail('');
        setRegisterPassword('');
        setRegisterConfirmPassword('');
      }
    } catch {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleAuth = () => {
    toast.info('Google authentication coming soon!');
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-b from-kcf-red to-kcf-dark-red p-0 overflow-hidden border-none">
        {/* Header */}
        <div className="relative p-6 text-center">
          <div className="absolute top-4 right-4">
            <button
              onClick={onClose}
              className="text-white/60 hover:text-white transition-colors"
            >
              <EyeOff className="w-5 h-5 hidden" />
            </button>
          </div>
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <Crown className="w-8 h-8 text-white" />
            </div>
          </div>
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-white">
              {t('welcomeBack')}
            </DialogTitle>
          </DialogHeader>
          <p className="text-white/80 text-sm mt-2">
            Sign in to access your account and downloads
          </p>
        </div>

        {/* Tabs */}
        <div className="px-6 pb-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid w-full grid-cols-2 bg-white/10 mb-6">
              <TabsTrigger 
                value="login" 
                className="text-white data-[state=active]:bg-white data-[state=active]:text-kcf-red"
              >
                {t('login')}
              </TabsTrigger>
              <TabsTrigger 
                value="register"
                className="text-white data-[state=active]:bg-white data-[state=active]:text-kcf-red"
              >
                {t('signUp')}
              </TabsTrigger>
            </TabsList>

            {/* Login Form */}
            <TabsContent value="login">
              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      placeholder={t('email')}
                      value={loginEmail}
                      onChange={(e) => setLoginEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder={t('password')}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-12 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 text-white/60 cursor-pointer">
                    <input type="checkbox" className="rounded border-white/20 bg-white/10" />
                    {t('rememberMe')}
                  </label>
                  <a href="#" className="text-white hover:underline">
                    {t('forgotPassword')}
                  </a>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white hover:bg-white/90 text-kcf-red py-6 rounded-xl font-medium transition-all"
                >
                  {isLoading ? 'Signing in...' : t('signIn')}
                </Button>
              </form>
            </TabsContent>

            {/* Register Form */}
            <TabsContent value="register">
              <form onSubmit={handleRegister} className="space-y-4">
                <div className="space-y-2">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="text"
                      placeholder={t('fullName')}
                      value={registerName}
                      onChange={(e) => setRegisterName(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type="email"
                      placeholder={t('email')}
                      value={registerEmail}
                      onChange={(e) => setRegisterEmail(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder={t('password')}
                      value={registerPassword}
                      onChange={(e) => setRegisterPassword(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-12 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-white/40 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/40" />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder={t('confirmPassword')}
                      value={registerConfirmPassword}
                      onChange={(e) => setRegisterConfirmPassword(e.target.value)}
                      className="w-full bg-white/10 border border-white/20 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/60">
                  <input type="checkbox" className="rounded border-white/20 bg-white/10" required />
                  <span>
                    {t('agreeTerms')}
                  </span>
                </div>

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-white hover:bg-white/90 text-kcf-red py-6 rounded-xl font-medium transition-all"
                >
                  {isLoading ? 'Creating account...' : t('createAccount')}
                </Button>
              </form>
            </TabsContent>
          </Tabs>

          {/* Social Login */}
          <div className="mt-6">
            <div className="relative mb-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-transparent text-white/60">{t('orContinueWith')}</span>
              </div>
            </div>

            <Button
              onClick={handleGoogleAuth}
              variant="outline"
              className="w-full border-white/20 text-white hover:bg-white/10 py-6 rounded-xl"
            >
              <Chrome className="w-5 h-5 mr-2" />
              Google
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
