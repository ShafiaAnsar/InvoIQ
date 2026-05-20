import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';

const beforeItems = [
  '18 hours/day of manual entry',
  '3 staff doing data entry',
  '4-day invoice processing backlog',
  '12% error rate',
  'Tax season = mandatory weekends',
];

const afterItems = [
  '0 hours/day of manual entry',
  '3 staff doing advisory work (3x billing rate)',
  'Real-time processing',
  '0.9% error rate',
  'Tax season runs on autopilot',
];

export function Results() {
  return (
    <SectionWrapper id="results" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-grotesk font-light text-white text-center mb-12 md:mb-16"
        >
          What changed in <span className="text-gradient">30 days</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-l-4 border-l-red-500/70">
              <h3 className="text-xl font-grotesk font-semibold text-red-400 mb-6">Before</h3>
              <ul className="space-y-4">
                {beforeItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-300"
                  >
                    <X size={18} className="text-red-400 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="border-l-4 border-l-emerald-500">
              <h3 className="text-xl font-grotesk font-semibold text-emerald-400 mb-6">After</h3>
              <ul className="space-y-4">
                {afterItems.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex items-center gap-3 text-gray-200"
                  >
                    <Check size={18} className="text-emerald-400 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="glass-strong" className="max-w-3xl mx-auto text-center py-10 px-8">
            <div className="text-4xl text-emerald-400/50 font-serif mb-4">"</div>
            <blockquote className="text-lg md:text-xl text-gray-200 leading-relaxed mb-6">
              We were about to hire two more bookkeepers. Instead, we hired Arsofic. The agent paid
              for itself in 47 days. Our team is finally doing the work they trained 6 years for.
            </blockquote>
            <cite className="text-gray-400 not-italic">
              — Managing Partner, 15-person accounting firm
            </cite>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
