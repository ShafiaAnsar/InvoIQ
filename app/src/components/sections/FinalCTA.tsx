import { Button } from '@/components/ui/CustomButton';
import { Card } from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';

export function FinalCTA() {
  return (
    <section id="book" className="py-20 md:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card variant="glass-strong" className="text-center py-12 md:py-16 px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-grotesk font-light text-white mb-6">
              Stop hiring. <span className="text-gradient">Start automating.</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed">
              Book a free 30-minute audit. We'll map the top 3 workflows costing your firm the most
              hours — and tell you exactly what an agent would cost to build.
            </p>

            <Button
              href="https://calendly.com/arsofic"
              size="lg"
              className="text-lg px-10 py-5 shadow-glow hover:shadow-glow-cyan transition-shadow"
            >
              Book Your Free Audit →
            </Button>

            <p className="mt-6 text-sm text-gray-500 max-w-lg mx-auto">
              No pitch. No pressure. Just a workflow map you can keep — whether you hire us or not.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
