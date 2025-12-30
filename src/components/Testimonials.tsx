import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Crypto Investor',
    content: 'Finally, a way to actually use my crypto without jumping through hoops. KAST makes it effortless.',
    rating: 5,
    avatar: 'SC'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Digital Nomad',
    content: 'Been using KAST for 6 months across 12 countries. The conversion rates are transparent and fair.',
    rating: 5,
    avatar: 'MR'
  },
  {
    name: 'Emily Watson',
    role: 'Tech Entrepreneur',
    content: 'The app is beautiful and the card works flawlessly. This is the future of payments.',
    rating: 5,
    avatar: 'EW'
  },
  {
    name: 'David Kim',
    role: 'Software Engineer',
    content: 'Security features are top-notch. I trust KAST with my crypto more than traditional exchanges.',
    rating: 5,
    avatar: 'DK'
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl mb-4">
              Loved by Crypto Users
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Around the World
              </span>
            </h2>
            <p className="text-xl text-gray-400">
              Join thousands who have already made the switch
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm">{testimonial.name}</div>
                  <div className="text-xs text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm border border-white/10">
            <h3 className="text-2xl md:text-3xl mb-4">
              Ready to Start Spending Your Crypto?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Join over 500,000 users who trust KAST for their everyday payments
            </p>
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-xl shadow-blue-500/25">
              Get Started Now
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
