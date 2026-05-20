import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/GlassCard';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  offTheShelf: string | boolean;
  customAgent: string | boolean;
}

const rows: ComparisonRow[] = [
  { feature: 'Handles standard invoices', offTheShelf: true, customAgent: true },
  { feature: 'Handles messy formats', offTheShelf: false, customAgent: true },
  { feature: 'Multi-entity posting rules', offTheShelf: false, customAgent: true },
  { feature: 'Custom GL/class/job tagging', offTheShelf: 'Limited', customAgent: true },
  { feature: 'You own the code', offTheShelf: false, customAgent: true },
  { feature: 'Monthly fees', offTheShelf: '$50/seat forever', customAgent: 'One-time build' },
  { feature: 'Setup time', offTheShelf: '2-4 weeks of config', customAgent: '22 days end-to-end' },
];

function StatusIcon({ value }: { value: string | boolean }) {
  if (value === true) return <Check size={18} className="text-emerald-400" />;
  if (value === false) return <X size={18} className="text-red-400" />;
  return <span className="text-amber-400 text-sm">{value}</span>;
}

export function Comparison() {
  return (
    <SectionWrapper id="comparison" className="relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl lg:text-5xl font-grotesk font-light text-white text-center mb-12 md:mb-16"
        >
          Why custom AI agents beat{' '}
          <span className="text-gradient">off-the-shelf SaaS</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Card className="overflow-hidden p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-white/[0.08]">
                    <th className="text-left py-4 px-4 md:px-6 text-sm font-medium text-gray-400">Feature</th>
                    <th className="text-center py-4 px-4 md:px-6 text-sm font-medium text-gray-400 min-w-[180px]">
                      Dext / Hubdoc / Bill.com
                    </th>
                    <th className="text-center py-4 px-4 md:px-6 text-sm font-medium text-emerald-400 min-w-[180px] bg-emerald-500/[0.05]">
                      Custom AI Agent (Arsofic)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <motion.tr
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      className="border-b border-white/[0.04] last:border-0"
                    >
                      <td className="py-4 px-4 md:px-6 text-white">{row.feature}</td>
                      <td className="py-4 px-4 md:px-6 text-center">
                        <div className="flex items-center justify-center">
                          <StatusIcon value={row.offTheShelf} />
                        </div>
                      </td>
                      <td className="py-4 px-4 md:px-6 text-center bg-emerald-500/[0.03]">
                        <div className="flex items-center justify-center">
                          {typeof row.customAgent === 'boolean' ? (
                            <Check size={18} className="text-emerald-400" />
                          ) : (
                            <span className="text-emerald-400 text-sm font-medium">{row.customAgent}</span>
                          )}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
