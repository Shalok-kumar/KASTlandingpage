import { motion } from 'motion/react';
import { Smartphone, Bell, TrendingUp, Send } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function MobileApp() {
  return (
    <section id="app" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Mobile App Mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-sm mx-auto">
              {/* Phone Frame */}
              <div className="relative p-4 rounded-[3rem] bg-gradient-to-b from-slate-800 to-slate-900 border-4 border-slate-700 shadow-2xl">
                <div className="bg-black rounded-[2.5rem] overflow-hidden">
                  {/* Notch */}
                  <div className="h-6 bg-black flex items-center justify-center">
                    <div className="w-32 h-5 bg-slate-900 rounded-b-2xl"></div>
                  </div>

                  {/* App Content */}
                  <div className="bg-gradient-to-b from-slate-950 to-black p-6 pb-8">
                    {/* Header */}
                    <div className="flex justify-between items-center mb-6">
                      <div>
                        <div className="text-sm text-gray-500 mb-1">Total Balance</div>
                        <div className="text-3xl">$24,891.50</div>
                      </div>
                      <Bell className="w-6 h-6 text-gray-400" />
                    </div>

                    {/* Balance Cards */}
                    <div className="space-y-3 mb-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-400">Bitcoin</span>
                          <span className="text-green-400 text-sm flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +2.4%
                          </span>
                        </div>
                        <div className="text-xl">0.3842 BTC</div>
                        <div className="text-sm text-gray-400">≈ $18,234.00</div>
                      </div>

                      <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-gray-400">Ethereum</span>
                          <span className="text-green-400 text-sm flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            +1.8%
                          </span>
                        </div>
                        <div className="text-xl">2.145 ETH</div>
                        <div className="text-sm text-gray-400">≈ $6,657.50</div>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-2 gap-3">
                      <button className="py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-sm">
                        Send
                      </button>
                      <button className="py-3 rounded-xl bg-white/10 border border-white/20 text-sm">
                        Receive
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Notification */}
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -right-4 top-1/4 px-4 py-3 rounded-2xl bg-slate-800/90 backdrop-blur-xl border border-white/10 shadow-xl max-w-[200px]"
              >
                <div className="flex items-center gap-3">
                  <Send className="w-4 h-4 text-blue-400" />
                  <div>
                    <div className="text-sm">Payment Sent</div>
                    <div className="text-xs text-gray-400">-$45.00</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
              <Smartphone className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-purple-400">iOS & Android</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-6">
              Control Everything
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                From Your Phone
              </span>
            </h2>

            <p className="text-xl text-gray-400 mb-8">
              Manage your crypto portfolio, track spending, freeze your card instantly, 
              and get real-time notifications—all from our beautifully designed mobile app.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-blue-400"></div>
                <span className="text-gray-300">Live portfolio tracking with real-time prices</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-purple-400"></div>
                <span className="text-gray-300">Instant transaction notifications and receipts</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                <span className="text-gray-300">Advanced security controls at your fingertips</span>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-sm">Download on</div>
                <div className="font-semibold">App Store</div>
              </button>
              <button className="px-6 py-3 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-sm">Get it on</div>
                <div className="font-semibold">Google Play</div>
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
