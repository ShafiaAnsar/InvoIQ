import { Badge } from '@/components/ui/StatusBadge';
import { Button } from '@/components/ui/CustomButton';
import { CountUp } from '@/components/ui/CountUp';
import { Card } from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';

const stats = [
  { value: 99.1, suffix: '%', label: 'accuracy', decimals: 1 },
  { value: 22, suffix: '', label: 'days delivery', decimals: 0 },
  { value: 2400, suffix: '+', label: 'invoices tested', decimals: 0 },
  { value: 18, suffix: '', label: 'hrs/day saved', decimals: 0 },
];

export function Hero() {
  const scrollToDemo = () => {
    const el = document.getElementById('demo');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-navy" />
      <div className="absolute inset-0 radial-gradient-overlay" />
      <div className="absolute inset-0 grid-pattern opacity-50" />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl"
        animate={{ x: [0, -20, 0], y: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <Badge variant="accent">
            <span className="mr-1">✨</span> Case Study — Accounting Automation
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-grotesk font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-tight max-w-5xl mx-auto"
        >
          We eliminated{' '}
          <span className="text-emerald-400">18 hours</span> of daily manual invoice
          work in{' '}
          <span className="text-cyan-400">22 days</span>.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
        >
          How a 15-person accounting firm freed 3 full-time staff for advisory work —
          using one custom AI agent built by Arsofic.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="#book" size="lg">
            Book a Free 30-min Audit →
          </Button>
          <Button variant="secondary" size="lg" onClick={scrollToDemo}>
            See the Demo ↓
          </Button>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <Card key={stat.label} className="text-center py-6">
                <div className="text-3xl md:text-4xl font-grotesk font-semibold text-white">
                  <CountUp
                    end={stat.value}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    duration={2}
                  />
                </div>
                <div className="mt-1 text-sm text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
