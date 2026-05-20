import { useState, useEffect, useCallback, useRef } from 'react';
import { SectionWrapper } from '@/components/ui/SectionWrapper';
import { Card } from '@/components/ui/GlassCard';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, FileText, Search, Shield, Zap } from 'lucide-react';

interface InvoiceData {
  vendor: string;
  invoiceNumber: string;
  date: string;
  items: { name: string; qty: string; price: string }[];
  subtotal: string;
  tax: string;
  total: string;
}

const invoiceSamples: InvoiceData[] = [
  {
    vendor: 'Acme Office Supplies',
    invoiceNumber: 'INV-2847',
    date: '15 Nov 2025',
    items: [
      { name: 'Paper A4 (10 reams)', qty: '1', price: '$89.00' },
      { name: 'Toner Cartridge', qty: '1', price: '$145.00' },
      { name: 'Office Chairs (2)', qty: '2', price: '$480.00' },
    ],
    subtotal: '$714.00',
    tax: '$57.12',
    total: '$771.12',
  },
  {
    vendor: 'Global Tech Solutions',
    invoiceNumber: 'GTS-9912',
    date: '22 Nov 2025',
    items: [
      { name: 'Server Maintenance Q4', qty: '1', price: '$2,400.00' },
      { name: 'Cloud Storage (500GB)', qty: '1', price: '$180.00' },
      { name: 'Security Audit', qty: '1', price: '$1,200.00' },
    ],
    subtotal: '$3,780.00',
    tax: '$302.40',
    total: '$4,082.40',
  },
  {
    vendor: 'Metro Cleaning Co.',
    invoiceNumber: 'MC-4451',
    date: '28 Nov 2025',
    items: [
      { name: 'Weekly Cleaning (4wks)', qty: '4', price: '$320.00' },
      { name: 'Deep Carpet Clean', qty: '1', price: '$250.00' },
      { name: 'Window Service', qty: '1', price: '$85.00' },
    ],
    subtotal: '$655.00',
    tax: '$52.40',
    total: '$707.40',
  },
];

type Stage = 'idle' | 'reading' | 'extracting' | 'validating' | 'posted';

const extractedFields = [
  { key: 'Vendor', value: (d: InvoiceData) => d.vendor },
  { key: 'Invoice #', value: (d: InvoiceData) => d.invoiceNumber },
  { key: 'Date', value: (d: InvoiceData) => d.date },
  { key: 'Line Items', value: (d: InvoiceData) => `${d.items.length} items` },
  { key: 'Subtotal', value: (d: InvoiceData) => d.subtotal },
  { key: 'Tax', value: (d: InvoiceData) => d.tax },
  { key: 'Total', value: (d: InvoiceData) => d.total },
];

const validationChecks = [
  'Vendor matched',
  'GL Account assigned',
  'Tax rate validated',
  'Duplicate check passed',
];

export function Demo() {
  const [activeSample, setActiveSample] = useState(0);
  const [stage, setStage] = useState<Stage>('idle');
  const [visibleFields, setVisibleFields] = useState(0);
  const [visibleChecks, setVisibleChecks] = useState(0);
  const [showJson, setShowJson] = useState(false);
  const timersRef = useRef<number[]>([]);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((t) => clearTimeout(t));
    timersRef.current = [];
  }, []);

  const runDemo = useCallback(
    (_sampleIndex: number) => {
      clearAllTimers();
      setStage('reading');
      setVisibleFields(0);
      setVisibleChecks(0);
      setShowJson(false);

      const t1 = window.setTimeout(() => {
        setStage('extracting');
        let field = 0;
        const fieldInterval = window.setInterval(() => {
          field++;
          setVisibleFields(field);
          if (field >= extractedFields.length) {
            clearInterval(fieldInterval);
          }
        }, 180);
        timersRef.current.push(fieldInterval);
      }, 800);
      timersRef.current.push(t1);

      const t2 = window.setTimeout(() => {
        setStage('validating');
        let check = 0;
        const checkInterval = window.setInterval(() => {
          check++;
          setVisibleChecks(check);
          if (check >= validationChecks.length) {
            clearInterval(checkInterval);
          }
        }, 250);
        timersRef.current.push(checkInterval);
      }, 2200);
      timersRef.current.push(t2);

      const t3 = window.setTimeout(() => {
        setStage('posted');
        const t4 = window.setTimeout(() => setShowJson(true), 400);
        timersRef.current.push(t4);
      }, 3500);
      timersRef.current.push(t3);
    },
    [clearAllTimers]
  );

  useEffect(() => {
    const t = window.setTimeout(() => runDemo(0), 500);
    return () => {
      clearTimeout(t);
      clearAllTimers();
    };
  }, []);

  const handleSampleClick = (index: number) => {
    setActiveSample(index);
    runDemo(index);
  };

  const invoice = invoiceSamples[activeSample];

  return (
    <SectionWrapper id="demo" className="relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-grotesk font-light text-white mb-4">
            See <span className="text-gradient">InvoIQ</span> in action
          </h2>
          <p className="text-lg text-gray-400">
            Pick a sample invoice. Watch the agent extract, validate, and post.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Left Panel — Sample Invoice */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <FileText size={20} className="text-emerald-400" />
                Sample Invoice
              </h3>

              <div className="bg-white rounded-lg p-6 text-gray-900 shadow-lg mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h4 className="font-bold text-lg">{invoice.vendor}</h4>
                    <p className="text-sm text-gray-500">123 Business Ave, Suite 100</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">INVOICE</div>
                    <div className="font-mono font-bold text-lg">{invoice.invoiceNumber}</div>
                    <div className="text-sm text-gray-500">{invoice.date}</div>
                  </div>
                </div>

                <table className="w-full text-sm mb-4">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-2 text-gray-500 font-medium">Item</th>
                      <th className="text-right py-2 text-gray-500 font-medium">Qty</th>
                      <th className="text-right py-2 text-gray-500 font-medium">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {invoice.items.map((item, i) => (
                      <tr key={i} className="border-b border-gray-100">
                        <td className="py-2">{item.name}</td>
                        <td className="text-right py-2">{item.qty}</td>
                        <td className="text-right py-2 font-mono">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="flex justify-end">
                  <div className="text-right space-y-1">
                    <div className="flex justify-between gap-8 text-sm">
                      <span className="text-gray-500">Subtotal</span>
                      <span className="font-mono">{invoice.subtotal}</span>
                    </div>
                    <div className="flex justify-between gap-8 text-sm">
                      <span className="text-gray-500">Tax (8%)</span>
                      <span className="font-mono">{invoice.tax}</span>
                    </div>
                    <div className="flex justify-between gap-8 text-base font-bold border-t border-gray-200 pt-1 mt-1">
                      <span>Total</span>
                      <span className="font-mono">{invoice.total}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sample buttons */}
              <div className="flex flex-wrap gap-2">
                {['Clean Invoice', 'Messy Multi-page', 'Handwritten Notes'].map((label, i) => (
                  <button
                    key={i}
                    onClick={() => handleSampleClick(i)}
                    className={`px-4 py-2 text-sm rounded-lg border transition-all ${
                      activeSample === i
                        ? 'bg-emerald-500/20 border-emerald-500/50 text-emerald-400'
                        : 'bg-white/[0.05] border-white/[0.1] text-gray-300 hover:bg-white/[0.08]'
                    }`}
                  >
                    Sample {i + 1}: {label}
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Right Panel — Processing */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="h-full min-h-[400px]">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Zap size={20} className="text-cyan-400" />
                InvoIQ Processing
              </h3>

              <div className="space-y-4">
                <AnimatePresence mode="wait">
                  {/* Stage 1: Reading */}
                  {(stage === 'reading' || stage === 'idle') && (
                    <motion.div
                      key="reading"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                        <span className="text-sm">📄</span>
                      </div>
                      <span>Reading invoice...</span>
                      <div className="ml-auto w-24 h-2 rounded-full bg-white/[0.08] overflow-hidden">
                        <motion.div
                          className="h-full bg-emerald-500 rounded-full"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 0.8, ease: 'easeInOut' }}
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Stage 2: Extracting */}
                  {(stage === 'extracting' || stage === 'reading') && (
                    <motion.div
                      key="extracting"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-3 text-gray-300 mb-3">
                        <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center">
                          <Search size={16} className="text-cyan-400" />
                        </div>
                        <span>Extracting fields...</span>
                      </div>
                      <div className="space-y-1.5 pl-11">
                        {extractedFields.map((field, i) => (
                          <motion.div
                            key={field.key}
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              i < visibleFields ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                            }
                            transition={{ duration: 0.3 }}
                            className={`flex items-center gap-2 text-sm ${
                              i < visibleFields ? 'text-emerald-400' : 'text-gray-600'
                            }`}
                          >
                            <Check size={14} className={i < visibleFields ? 'opacity-100' : 'opacity-0'} />
                            <span className="text-gray-400">{field.key}:</span>
                            <span className="font-mono">{field.value(invoice)}</span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Stage 3: Validating */}
                  {(stage === 'validating' || stage === 'extracting') && (
                    <motion.div
                      key="validating"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-3 text-gray-300 mb-3">
                        <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center">
                          <Shield size={16} className="text-emerald-400" />
                        </div>
                        <span>Validating against vendor rules...</span>
                      </div>
                      <div className="space-y-1.5 pl-11">
                        {validationChecks.map((check, i) => (
                          <motion.div
                            key={check}
                            initial={{ opacity: 0, x: -10 }}
                            animate={
                              i < visibleChecks ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                            }
                            transition={{ duration: 0.3 }}
                            className={`flex items-center gap-2 text-sm ${
                              i < visibleChecks ? 'text-emerald-400' : 'text-gray-600'
                            }`}
                          >
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={i < visibleChecks ? { scale: 1 } : { scale: 0 }}
                              transition={{ type: 'spring', stiffness: 500, damping: 15 }}
                            >
                              <Check size={14} />
                            </motion.div>
                            <span>
                              {check}{' '}
                              {i < visibleChecks && (
                                <motion.span
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  className="text-emerald-400"
                                >
                                  ✓
                                </motion.span>
                              )}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  {/* Stage 4: Posted */}
                  {(stage === 'posted' || stage === 'validating') && (
                      <motion.div
                        key="posted"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="space-y-4"
                      >
                        <motion.div
                          className="flex items-center gap-3 text-emerald-400"
                          initial={{ scale: 0.8 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                        >
                          <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center">
                            <Zap size={16} />
                          </div>
                          <span className="font-semibold">Posted to QuickBooks</span>
                        </motion.div>

                        <AnimatePresence>
                          {showJson && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              transition={{ duration: 0.4 }}
                              className="code-block"
                            >
                              <pre className="text-xs leading-relaxed">
                                <span className="text-purple-400">{'{'}</span>
                                {'\n'}
                                <span className="text-cyan-400">  "vendor"</span>
                                <span className="text-gray-500">: </span>
                                <span className="text-emerald-400">"{invoice.vendor}"</span>
                                ,{'\n'}
                                <span className="text-cyan-400">  "invoice_number"</span>
                                <span className="text-gray-500">: </span>
                                <span className="text-emerald-400">"{invoice.invoiceNumber}"</span>
                                ,{'\n'}
                                <span className="text-cyan-400">  "date"</span>
                                <span className="text-gray-500">: </span>
                                <span className="text-emerald-400">"{invoice.date}"</span>
                                ,{'\n'}
                                <span className="text-cyan-400">  "line_items"</span>
                                <span className="text-gray-500">: </span>
                                <span className="text-purple-400">[</span>
                                {'\n'}
                                {invoice.items.map((item, i) => (
                                  <span key={i}>
                                    <span className="text-gray-500">{'    '}</span>
                                    <span className="text-purple-400">{'{'}</span>
                                    <span className="text-cyan-400"> "name"</span>
                                    <span className="text-gray-500">: </span>
                                    <span className="text-emerald-400">"{item.name}"</span>
                                    , <span className="text-cyan-400">"price"</span>
                                    <span className="text-gray-500">: </span>
                                    <span className="text-amber-400">
                                      {item.price.replace('$', '').replace(',', '')}
                                    </span>
                                    <span className="text-purple-400">{' }'}</span>
                                    {i < invoice.items.length - 1 ? ',' : ''}
                                    {'\n'}
                                  </span>
                                ))}
                                <span className="text-gray-500">{'  '}</span>
                                <span className="text-purple-400">]</span>
                                ,{'\n'}
                                <span className="text-cyan-400">  "subtotal"</span>
                                <span className="text-gray-500">: </span>
                                <span className="text-amber-400">
                                  {invoice.subtotal.replace('$', '').replace(',', '')}
                                </span>
                                ,{'\n'}
                                <span className="text-cyan-400">  "tax"</span>
                                <span className="text-gray-500">: </span>
                                <span className="text-amber-400">
                                  {invoice.tax.replace('$', '').replace(',', '')}
                                </span>
                                ,{'\n'}
                                <span className="text-cyan-400">  "total"</span>
                                <span className="text-gray-500">: </span>
                                <span className="text-amber-400">
                                  {invoice.total.replace('$', '').replace(',', '')}
                                </span>
                                ,{'\n'}
                                <span className="text-cyan-400">  "status"</span>
                                <span className="text-gray-500">: </span>
                                <span className="text-emerald-400">"posted"</span>
                                ,{'\n'}
                                <span className="text-cyan-400">  "gl_account"</span>
                                <span className="text-gray-500">: </span>
                                <span className="text-emerald-400">"6100 - Office Expenses"</span>
                                {'\n'}
                                <span className="text-purple-400">{'}'}</span>
                              </pre>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    )}
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          This is a simulation. The real agent runs against your live accounting stack — QuickBooks,
          Xero, Karbon, Bill.com, and any API.
        </p>
      </div>
    </SectionWrapper>
  );
}
