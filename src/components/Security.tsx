import { motion } from 'motion/react';
import { Shield, Lock, Eye, CheckCircle2 } from 'lucide-react';

const securityFeatures = [
  {
    icon: Shield,
    title: 'Bank-Level Encryption',
    description: 'AES-256 encryption protects all your data and transactions'
  },
  {
    icon: Lock,
    title: '2FA & Biometrics',
    description: 'Multi-factor authentication with fingerprint and face recognition'
  },
  {
    icon: Eye,
    title: 'Real-Time Monitoring',
    description: '24/7 fraud detection and instant security alerts'
  },
  {
    icon: CheckCircle2,
    title: 'FDIC Insured',
    description: 'Your fiat balance is protected up to $250,000'
  }
];

const trustBadges = [
  { name: 'SOC 2 Certified', logo: '🔒' },
  { name: 'PCI DSS Compliant', logo: '✓' },
  { name: 'ISO 27001', logo: '🛡️' },
  { name: 'GDPR Compliant', logo: '🔐' }
];

export function Security() {
  return (
    <section id="security" className="py-20 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">Enterprise-Grade Security</span>
            </div>

            <h2 className="text-4xl md:text-5xl mb-4">
              Your Assets Are
              <br />
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Completely Protected
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              We employ industry-leading security measures to ensure your crypto and personal data stay safe
            </p>
          </motion.div>
        </div>

        {/* Security Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-green-500/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-green-400" />
              </div>
              <h3 className="text-lg mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
        >
          <div className="text-center mb-6">
            <h3 className="text-xl mb-2">Trusted & Compliant</h3>
            <p className="text-gray-400">Certified by leading security and compliance standards</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {trustBadges.map((badge, index) => (
              <div
                key={index}
                className="p-4 rounded-xl bg-white/5 border border-white/10 text-center"
              >
                <div className="text-3xl mb-2">{badge.logo}</div>
                <div className="text-sm text-gray-300">{badge.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Additional Security Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-gray-400">
            Cold storage for crypto assets • Multi-signature wallets • Regular security audits
          </p>
        </motion.div>
      </div>
    </section>
  );
}
