import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is Neurolume and how does it relieve stress?',
      answer: 'Neurolume is a 100% herbal capsule containing a synergistic blend of Shankhpushpi, Ashwagandha, Tagar, Jayphal, and Basant extracts. It belongs to the psychotropic, adaptogenic, and anxiolytic classes. These herbs work together to regulate cortisol, boost GABA and serotonin, calming the nervous system and easing chronic anxiety.'
    },
    {
      question: 'Do I need a doctor\'s prescription to buy Neurolume?',
      answer: 'No, Neurolume is classified under OTC (Over-the-Counter) dispensing status. You can buy and administer it without a doctor\'s prescription.'
    },
    {
      question: 'When is the best time of day to take Neurolume?',
      answer: 'The recommended dosage is 1-2 capsules daily, taken orally. It is highly recommended to take it at night. This helps quiet racing thoughts, regulate nocturnal cortisol spikes, and supports deep, restorative sleep.'
    },
    {
      question: 'Are there any side effects or risks of overdose?',
      answer: 'Neurolume is a natural, non-habit-forming herbal formula that is exceptionally safe and well tolerated. There are no side effects under standard dosage. However, in the event of an extreme overdose, minor symptoms like mild dizziness, nausea, or temporary stomach irritation might appear. Do not take it if you have known allergies to any of the component extracts.'
    },
    {
      question: 'How long does one bottle of Neurolume last, and how should it be stored?',
      answer: 'Neurolume is available in bottles containing 30 or 60 capsules. Depending on your dose (1 or 2 capsules daily), a bottle will last between 15 to 60 days. Store the bottle in a dry place protected from light, at a temperature below 25 °C. The shelf life is 3 years.'
    },
    {
      question: 'Can I take Neurolume if I am pregnant or breastfeeding?',
      answer: 'While Neurolume is a safe herbal supplement, it is a standard medical precaution that you consult with a certified healthcare provider before commencing administration if you are pregnant, nursing, or have any pre-existing chronic conditions.'
    }
  ];

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-forest-dark border-t border-sage/5">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] left-[5%] w-[400px] h-[400px] bg-glow-sage opacity-25 filter blur-[95px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] bg-glow-amber opacity-30 filter blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-sunset font-display">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            Frequently Asked Questions
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-300 text-sm">
            Find immediate answers regarding dosage, safety profile, interactions, and packaging specs below.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="wellness-card border-sage/10 hover:border-sage/20 transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none"
                  aria-expanded={isOpen}
                  aria-label={`Toggle answer for: ${faq.question}`}
                >
                  <span className="text-sm sm:text-base font-bold font-display text-white pr-4">
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
                      <div className="px-6 pb-6 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
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
