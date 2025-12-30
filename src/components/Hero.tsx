import { motion } from 'motion/react';
import { ArrowRight, Smartphone, Sparkles } from 'lucide-react';
import { useState } from 'react';

export function Hero() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);

  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm text-gray-300">Now available globally</span>
              <Sparkles className="w-4 h-4 text-yellow-400" />
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
              Use Your Crypto
              <br />
              For Everyday Payments
            </h1>
            
            <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
              Bridge the gap between digital assets and real-world spending. 
              KAST turns your cryptocurrency into instant purchasing power anywhere.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.button
                className="group px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/75 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onHoverStart={() => setHoveredButton('primary')}
                onHoverEnd={() => setHoveredButton(null)}
              >
                Get KAST Card
                <motion.div
                  animate={{ x: hoveredButton === 'primary' ? 5 : 0 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Smartphone className="w-5 h-5" />
                Explore App
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-20 max-w-2xl mx-auto">
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">150+</div>
                <div className="text-sm text-gray-500">Countries</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">$2B+</div>
                <div className="text-sm text-gray-500">Processed</div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="text-3xl md:text-4xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">500K+</div>
                <div className="text-sm text-gray-500">Users</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}