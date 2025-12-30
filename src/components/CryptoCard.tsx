import { motion } from 'motion/react';
import { CreditCard, TrendingUp, DollarSign } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CryptoCard() {
  return (
    <section id="card" className="py-20 px-6 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
              <CreditCard className="w-4 h-4 text-blue-400" />
              <span className="text-sm text-blue-400">Physical & Virtual Cards</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6">
              Your Crypto Card
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                For Real Life
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              Get a premium metal card linked to your crypto wallet. Spend Bitcoin, Ethereum, 
              or stablecoins at millions of merchants worldwide—online and offline.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <h3 className="mb-1">Real-Time Conversion</h3>
                  <p className="text-gray-400">
                    Automatic conversion at the best available rate when you swipe
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <h3 className="mb-1">Zero Hidden Fees</h3>
                  <p className="text-gray-400">
                    Transparent pricing with no monthly fees or surprise charges
                  </p>
                </div>
              </div>
            </div>

            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-xl shadow-blue-500/25">
              Order Your Card
            </button>
          </motion.div>

          {/* Card Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Glowing Card */}
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-slate-800 via-slate-900 to-black border border-white/20 shadow-2xl backdrop-blur-sm">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-2xl"></div>
                
                <div className="relative">
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600"></div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400 mb-1">KAST</div>
                      <div className="text-xs text-gray-500">Premium</div>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-2xl tracking-wider mb-1">•••• •••• •••• 8492</div>
                    <div className="text-sm text-gray-400">Virtual Card</div>
                  </div>

                  <div className="flex justify-between items-end">
                    <div>
                      <div className="text-xs text-gray-500 mb-1">VALID THRU</div>
                      <div className="text-sm">12/28</div>
                    </div>
                    <div className="text-sm text-gray-400">VISA</div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-6 -right-6 px-4 py-3 rounded-2xl bg-green-500/20 backdrop-blur-sm border border-green-500/30"
              >
                <div className="text-xs text-green-400 mb-1">Available Balance</div>
                <div className="text-xl">$12,458.32</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
