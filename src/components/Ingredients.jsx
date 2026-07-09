import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Ingredients() {
  const [activeIngredient, setActiveIngredient] = useState(null);

  const ingredientsList = [
    {
      id: 'shankhpushpi',
      name: 'Shankhpushpi Extract',
      scientificName: 'Convolvulus pluricaulis',
      dose: '112.5 mg',
      percentage: '53.5%',
      benefits: ['Anxiolytic & Neuroprotective', 'Improves Cognitive Function', 'Enhances Memory & Focus'],
      description: 'Used historically to sharpen intellect and calm the spirit. Shankhpushpi works by soothing the nervous system and defending neurons against oxidative stress. It increases brain-derived neurotrophic factor (BDNF) levels, helping optimize concentration and cognitive resilience under pressure.',
      icon: '🧠',
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'rgba(16, 185, 129, 0.3)'
    },
    {
      id: 'ashwagandha',
      name: 'Ashwagandha Extract',
      scientificName: 'Withania somnifera',
      dose: '50 mg',
      percentage: '23.8%',
      benefits: ['Adaptogenic Powerhouse', 'Regulates Cortisol Levels', 'Enhances Sleep Quality'],
      description: 'As a renowned adaptogen, Ashwagandha acts directly on the Hypothalamic-Pituitary-Adrenal (HPA) axis. By buffering the release of cortisol, it prevents the physical and mental symptoms of chronic stress, lowers blood pressure spikes, and dramatically improves sleep architecture.',
      icon: '🌿',
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'rgba(52, 211, 153, 0.3)'
    },
    {
      id: 'tagar',
      name: 'Tagar Extract',
      scientificName: 'Valeriana wallichii',
      dose: '25 mg',
      percentage: '11.9%',
      benefits: ['Natural CNS Sedative', 'GABA Receptor Modulator', 'Improves Sleep Quality'],
      description: 'Tagar modulates the transmission of Gamma-Aminobutyric Acid (GABA), the body\'s main inhibitory neurotransmitter. By reinforcing GABA activity, it calms over-firing neurons, reduces muscular and mental tension, and makes falling asleep easier.',
      icon: '🌸',
      color: 'from-teal-500/20 to-sage/20',
      borderColor: 'rgba(20, 184, 166, 0.3)'
    },
    {
      id: 'jayphal',
      name: 'Jayphal Extract',
      scientificName: 'Myristica fragrans',
      dose: '12.50 mg',
      percentage: '5.9%',
      benefits: ['Mild Sedative Action', 'CNS Calming Effect', 'Reduces Stress Irritability'],
      description: 'Jayphal (Nutmeg) contains bio-active compounds that act on the central nervous system to induce mild, natural sedation and promote comfort. It aids in mood stabilization and dampens stress-related anger and irritability, restoring overall tranquility.',
      icon: '🌰',
      color: 'from-amber-600/20 to-sunset/20',
      borderColor: 'rgba(245, 158, 11, 0.3)'
    },
    {
      id: 'basant',
      name: 'Basant (St. John\'s Wort)',
      scientificName: 'Hypericum perforatum',
      dose: '12.50 mg',
      percentage: '5.9%',
      benefits: ['Serotonin Balancer', 'Antidepressant Properties', 'Supports Mood Elevation'],
      description: 'Basant inhibits the reuptake of key neurotransmitters (serotonin, dopamine, and norepinephrine) in the brain. This results in elevated mood levels, diminished emotional volatility, and increased emotional resilience to daily stress events.',
      icon: '☀️',
      color: 'from-sunset/20 to-amber-500/20',
      borderColor: 'rgba(251, 191, 36, 0.3)'
    }
  ];

  return (
    <section id="ingredients" className="py-24 relative overflow-hidden bg-forest-dark">
      {/* Background ambient glow */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-glow-sage opacity-40 filter blur-[90px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] bg-glow-amber opacity-35 filter blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-sage-pale font-display">
            The Bio-Active Formula
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            5 Synergistic Botanical Extracts
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-300 text-base">
            Every Neurolume capsule contains a standardized dose of dry extracts, combining millennia of traditional wisdom with modern clinical validation.
          </p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {ingredientsList.map((item) => (
            <motion.div
              key={item.id}
              layoutId={`card-${item.id}`}
              onClick={() => setActiveIngredient(item)}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="wellness-card p-6 cursor-pointer border border-sage/10 hover:border-sunset/35 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300 font-display">
                    {item.dose}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-sunset transition-colors duration-300 font-display leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs italic text-sage-pale/80 mt-1 font-sans">
                  {item.scientificName}
                </p>

                <div className="mt-4 pt-4 border-t border-white/5 space-y-2">
                  {item.benefits.slice(0, 2).map((benefit, idx) => (
                    <div key={idx} className="flex items-center space-x-1.5 text-xs text-slate-400">
                      <span className="h-1 w-1 rounded-full bg-sage-light flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 text-xs font-semibold text-sage flex items-center space-x-1 group-hover:text-sunset transition-colors duration-300">
                <span>View Chemistry</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Excipients and capsule shell notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            * Standardized dry extracts are suspended in a hard gelatin capsule shell with inert excipients (q.s.).
          </p>
        </div>

        {/* Interactive Detailed Modal */}
        <AnimatePresence>
          {activeIngredient && (
            <>
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveIngredient(null)}
                className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              >
                {/* Modal Container */}
                <motion.div
                  layoutId={`card-${activeIngredient.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-lg bg-[#051811] rounded-3xl border border-sage/35 shadow-2xl overflow-hidden relative"
                >
                  {/* Decorative glowing gradient header */}
                  <div className={`h-3 bg-gradient-to-r ${activeIngredient.color}`} />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setActiveIngredient(null)}
                    className="absolute top-5 right-5 text-slate-400 hover:text-white p-1 rounded-full bg-white/5 border border-white/10 transition-colors"
                  >
                    ✕
                  </button>

                  <div className="p-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="text-5xl">{activeIngredient.icon}</span>
                      <div>
                        <h3 className="text-2xl font-bold font-display text-white">
                          {activeIngredient.name}
                        </h3>
                        <p className="text-sm italic text-sage-pale font-sans">
                          {activeIngredient.scientificName}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 mb-6">
                      <div className="px-3 py-1 rounded bg-sage/20 border border-sage/40 text-sage-pale font-bold text-xs uppercase tracking-widest font-display">
                        Dose: {activeIngredient.dose}
                      </div>
                      <div className="px-3 py-1 rounded bg-sunset/15 border border-sunset/30 text-sunset text-xs font-bold font-display">
                        Capsule Ratio: {activeIngredient.percentage}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 font-display">
                          Biological Action
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeIngredient.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs font-medium"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <h4 className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2 font-display">
                          Pharmacological Description
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed">
                          {activeIngredient.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-white/5 flex justify-end">
                      <button
                        onClick={() => setActiveIngredient(null)}
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-sage to-sage-light text-forest-dark font-bold text-sm shadow-md"
                      >
                        Close Portal
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
