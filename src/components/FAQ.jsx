import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function FAQ() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { question: t('faq.q1'), answer: t('faq.a1') },
    { question: t('faq.q2'), answer: t('faq.a2') },
    { question: t('faq.q3'), answer: t('faq.a3') },
    { question: t('faq.q4'), answer: t('faq.a4') },
    { question: t('faq.q5'), answer: t('faq.a5') },
    { question: t('faq.q6'), answer: t('faq.a6') }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-moss/20 border-t border-slate-200">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-glow-sage opacity-25 filter blur-[95px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] bg-glow-amber opacity-30 filter blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-sunset font-display">
            {t('faq.sectionTag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-slate-900">
            {t('faq.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-600 text-sm">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="wellness-card border border-slate-200 hover:border-sage/20 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                  aria-expanded={isOpen}
                  aria-label={`Toggle answer for: ${faq.question}`}
                >
                  <span className="text-sm sm:text-base font-bold font-display text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-xl transform transition-transform duration-300 ${isOpen ? 'rotate-45 text-sunset' : 'text-sage'}`}>
                    ＋
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
