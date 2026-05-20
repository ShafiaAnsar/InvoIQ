import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { motion } from 'framer-motion';

interface Phase {
  number: string;
  days: string;
  title: string;
  description: string;
}

const phases: Phase[] = [
  {
    number: '01',
    days: 'Days 1–3',
    title: 'Operations Mapping',
    description: 'We watched the team work. Mapped every keystroke. Identified the kill list.',
  },
  {
    number: '02',
    days: 'Days 4–7',
    title: 'Workflow Design',
    description: 'If invoice from Vendor X → post to GL Y → tag Class Z. We wrote the firm\'s rulebook.',
  },
  {
    number: '03',
    days: 'Days 8–15',
    title: 'Build & Integrate',
    description: 'Agent connected to QuickBooks via API. Trained on 6 months of historical invoices.',
  },
  {
    number: '04',
    days: 'Days 16–22',
    title: 'Live Testing',
    description: 'Agent ran alongside the team. Caught edge cases. Learned firm-specific quirks.',
  },
  {
    number: '05',
    days: 'Day 23+',
    title: 'Handover',
    description: 'Team owns it. Code documented. Ongoing support included.',
  },
];

export function Timeline() {
  return (
    <SectionWrapper id="timeline" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-grotesk font-light text-white text-center mb-12 md:mb-16"
        >
          How we built it in <span className="text-gradient">22 days</span>
        </motion.h2>

        <div className="relative">
          {/* Vertical line (desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-cyan-500/30 to-transparent" />

          {/* Vertical line (mobile) */}
          <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/50 via-cyan-500/30 to-transparent" />

          <div className="space-y-12 md:space-y-16">
            {phases.map((phase, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={phase.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-12 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ml-12 md:ml-0 ${isEven ? 'md:text-right' : 'md:text-left'}`}>
                    <div
                      className={`inline-flex items-center gap-3 mb-2 ${
                        isEven ? 'md:flex-row-reverse' : ''
                      }`}
                    >
                      <span className="text-xs font-medium text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">
                        {phase.days}
                      </span>
                    </div>
                    <h3 className="text-xl md:text-2xl font-grotesk font-semibold text-white mb-2">
                      {phase.title}
                    </h3>
                    <p className="text-gray-400 max-w-md leading-relaxed">
                      {phase.description}
                    </p>
                  </div>

                  {/* Number badge */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-emerald-500 flex items-center justify-center text-navy font-bold text-sm md:text-base shadow-glow">
                      {phase.number}
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
