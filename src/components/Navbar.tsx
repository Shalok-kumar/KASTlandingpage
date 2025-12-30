import { Menu, X, LogOut, User as UserIcon } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { AuthModal } from './AuthModal';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [authModal, setAuthModal] = useState<{ isOpen: boolean; mode: 'signin' | 'signup' }>({
    isOpen: false,
    mode: 'signin'
  });
  const [currentUser, setCurrentUser] = useState<{ name: string; email: string } | null>(null);

  useEffect(() => {
    // Check if user is logged in
    const user = localStorage.getItem('kast_current_user');
    if (user) {
      setCurrentUser(JSON.parse(user));
    }
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('kast_current_user');
    setCurrentUser(null);
    window.location.reload();
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="font-bold">K</span>
              </div>
              <span className="text-xl tracking-tight">KAST</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#card" className="text-gray-300 hover:text-white transition-colors">Card</a>
              <a href="#app" className="text-gray-300 hover:text-white transition-colors">App</a>
              <a href="#security" className="text-gray-300 hover:text-white transition-colors">Security</a>
            </div>

            {/* CTA Buttons */}
            <div className="hidden md:flex items-center gap-4">
              {currentUser ? (
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <UserIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{currentUser.name}</span>
                  </div>
                  <button 
                    onClick={handleSignOut}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <>
                  <button 
                    onClick={() => setAuthModal({ isOpen: true, mode: 'signin' })}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25"
                  >
                    Get Started
                  </button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="md:hidden mt-4 pb-4 space-y-4"
            >
              <a href="#features" className="block text-gray-300 hover:text-white transition-colors">Features</a>
              <a href="#card" className="block text-gray-300 hover:text-white transition-colors">Card</a>
              <a href="#app" className="block text-gray-300 hover:text-white transition-colors">App</a>
              <a href="#security" className="block text-gray-300 hover:text-white transition-colors">Security</a>
              {currentUser ? (
                <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <UserIcon className="w-4 h-4" />
                    </div>
                    <span className="text-sm">{currentUser.name}</span>
                  </div>
                  <button 
                    onClick={handleSignOut}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Sign Out
                  </button>
                </div>
              ) : (
                <div className="flex flex-col gap-3 pt-4">
                  <button 
                    onClick={() => setAuthModal({ isOpen: true, mode: 'signin' })}
                    className="px-4 py-2 text-gray-300 hover:text-white transition-colors"
                  >
                    Sign In
                  </button>
                  <button 
                    onClick={() => setAuthModal({ isOpen: true, mode: 'signup' })}
                    className="px-6 py-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/25"
                  >
                    Get Started
                  </button>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </nav>

      <AuthModal 
        isOpen={authModal.isOpen}
        onClose={() => setAuthModal({ ...authModal, isOpen: false })}
        mode={authModal.mode}
      />
    </>
  );
}