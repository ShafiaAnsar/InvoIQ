import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { Clock, Puzzle, DollarSign } from 'lucide-react';
import { type ReactNode } from 'react';

interface ProblemCardProps {
  icon: ReactNode;
  headline: string;
  description: string;
  delay: number;
}

function ProblemCard({ icon, headline, description, delay }: ProblemCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Card className="h-full">
        <div className="text-emerald-400 mb-4">{icon}</div>
        <h3 className="text-xl md:text-2xl font-semibold text-white mb-3">{headline}</h3>
        <p className="text-gray-400 leading-relaxed">{description}</p>
      </Card>
    </motion.div>
  );
}

const problems = [
  {
    icon: <Clock size={32} />,
    headline: '3 staff. 6 hours each. Every day.',
    description: "That's 18 hours of human work, gone the second a PDF hits the inbox.",
  },
  {
    icon: <Puzzle size={32} />,
    headline: 'Dext solves 60%. You pay for the rest.',
    description:
      'Messy formats, multi-entity rules, custom GL tagging — all still land on humans.',
  },
  {
    icon: <DollarSign size={32} />,
    headline: "You're paying CPA salaries to do data entry.",
    description: 'Your most expensive staff doing your least valuable work.',
  },
];

export function Problem() {
  return (
    <SectionWrapper className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-grotesk font-light text-white text-center mb-12 md:mb-16"
        >
          The hidden cost of{' '}
          <span className="text-gradient">manual invoice processing</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <ProblemCard key={i} icon={p.icon} headline={p.headline} description={p.description} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
