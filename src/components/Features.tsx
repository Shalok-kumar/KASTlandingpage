import { motion } from 'motion/react';
import { Zap, Globe, Shield, Wallet } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Instant Conversion',
    description: 'Convert crypto to fiat in milliseconds at the point of sale with real-time market rates.',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Globe,
    title: 'Global Acceptance',
    description: 'Use your KAST card anywhere Visa or Mastercard is accepted, in 150+ countries.',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    icon: Shield,
    title: 'Bank-Grade Security',
    description: 'Multi-layer encryption, 2FA, and biometric protection keep your assets safe.',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    icon: Wallet,
    title: 'Multi-Asset Support',
    description: 'Hold and spend Bitcoin, Ethereum, USDC, and 50+ other cryptocurrencies.',
    gradient: 'from-green-500 to-emerald-500'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Powerful features that make spending crypto as easy as using a traditional card
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Glassmorphism Card */}
              <div className="relative h-full p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-300`}></div>
                
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
