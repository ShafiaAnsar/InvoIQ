import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { Clock, DollarSign, Lock } from 'lucide-react';

const guarantees = [
  {
    icon: <Clock size={28} />,
    title: '30-day delivery',
    description: 'Money back if we miss.',
  },
  {
    icon: <DollarSign size={28} />,
    title: '$4K–$10K investment',
    description: 'Most firms recover it inside 90 days.',
  },
  {
    icon: <Lock size={28} />,
    title: 'You own the code',
    description: 'Zero vendor lock-in. Ever.',
  },
];

export function Guarantee() {
  return (
    <SectionWrapper className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6">
          {guarantees.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="text-center py-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 mb-4">
                  {g.icon}
                </div>
                <h3 className="text-lg font-grotesk font-semibold text-white mb-2">{g.title}</h3>
                <p className="text-gray-400 text-sm">{g.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
