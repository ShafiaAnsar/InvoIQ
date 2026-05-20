import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import {
  Landmark,
  FolderOpen,
  CalendarClock,
  PhoneCall,
  UserPlus,
  LayoutDashboard,
} from 'lucide-react';
import { type ReactNode } from 'react';

interface AgentCard {
  icon: ReactNode;
  title: string;
  description: string;
}

const agents: AgentCard[] = [
  {
    icon: <Landmark size={24} />,
    title: 'Bank Reconciliation Agent',
    description: 'Auto-match transactions across dozens of client accounts.',
  },
  {
    icon: <FolderOpen size={24} />,
    title: 'Client Document Collector',
    description: 'Chases, ingests, and files paperwork automatically.',
  },
  {
    icon: <CalendarClock size={24} />,
    title: 'Month-End Close Accelerator',
    description: '20-step process compressed into a dashboard.',
  },
  {
    icon: <PhoneCall size={24} />,
    title: 'AR / Collections Agent',
    description: 'Smart escalation. Polite first, firm later.',
  },
  {
    icon: <UserPlus size={24} />,
    title: 'Client Onboarding Agent',
    description: 'Engagement letter → KYC → portal in 1 click.',
  },
  {
    icon: <LayoutDashboard size={24} />,
    title: 'Custom Firm Dashboard',
    description: 'One pane across QuickBooks, Xero, Karbon, your CRM.',
  },
];

export function OtherAgents() {
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
          Beyond invoices —{' '}
          <span className="text-gradient">what else we automate</span>
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <Card className="h-full hover:bg-white/[0.05] transition-colors cursor-default group">
                <div className="text-emerald-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {agent.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{agent.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{agent.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
