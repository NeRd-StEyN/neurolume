import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState('indications');

  const tabs = [
    { id: 'indications', name: 'Indications for Use' },
    { id: 'dosage', name: 'Dosage & Administration' },
    { id: 'safety', name: 'Safety & Warnings' },
    { id: 'packaging', name: 'Packing & Storage' }
  ];

  return (
    <section id="drug-profile" className="py-24 relative overflow-hidden bg-forest/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-glow-amber opacity-30 filter blur-[90px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-glow-sage opacity-45 filter blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-sage-pale font-display">
            Technical Monograph
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            Official Prescribing Information
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-300 text-sm">
            Please read this information carefully before commencing administration. Neurolume is dispensed over-the-counter without a prescription.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-white/5 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 relative ${
                activeTab === tab.id
                  ? 'text-forest-dark bg-gradient-to-r from-sage to-sage-light shadow-lg shadow-sage/10'
                  : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
              aria-label={`View ${tab.name}`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="wellness-card p-8 sm:p-10 border-sage/15 min-h-[300px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            {activeTab === 'indications' && (
              <motion.div
                key="indications"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                    Therapeutic Intent & Indications
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-sunset font-semibold">
                    Pharmacotherapeutic group: Psychotropic, adaptogenic, and anxiolytic
                  </p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  NEUROLUME is indicated for managing stress, anxiety, and related conditions. The active botanical ingredients work synergistically to reduce emotional volatility, support natural sleep architecture, promote muscular and mental relaxation, and enhance mood by regulating neurotransmitters and cortisol levels.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 text-sm text-slate-300">
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5">
                    <span className="text-xl mt-0.5">🧠</span>
                    <div>
                      <h4 className="font-bold text-white">Nervous Tension & Anxiety</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Soothes feelings of dread, panic, and persistent worry.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5">
                    <span className="text-xl mt-0.5">😴</span>
                    <div>
                      <h4 className="font-bold text-white">Stress-Induced Insomnia</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Calms racing thoughts at night to allow deep, restorative sleep.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5">
                    <span className="text-xl mt-0.5">🔋</span>
                    <div>
                      <h4 className="font-bold text-white">Adrenal Fatigue</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Relieves chronic fatigue induced by elevated cortisol.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5">
                    <span className="text-xl mt-0.5">🎭</span>
                    <div>
                      <h4 className="font-bold text-white">Emotional Imbalance</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        Stabilizes mood swings, irritability, and stress-related anger.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'dosage' && (
              <motion.div
                key="dosage"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                  Posology & Administration Protocol
                </h3>
                
                <div className="p-6 rounded-2xl bg-sage/5 border border-sage/20 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold font-display">
                      Standard Dosage
                    </h4>
                    <p className="text-3xl font-black text-sunset font-display">1 - 2 Capsules</p>
                    <p className="text-sm text-slate-300">
                      Take daily with water, or as specifically directed by a healthcare physician.
                    </p>
                  </div>
                  
                  <div className="space-y-4 sm:border-l sm:border-white/10 sm:pl-6">
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                        Preferred Timing
                      </h5>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Preferably at night before sleep. This aligns with the body\'s natural circadian repair and maximizes sleep benefits.
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                        Method of Administration
                      </h5>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Oral administration. Capsules should be swallowed whole with water.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 text-xs text-slate-400">
                  <strong className="text-slate-300">Pharmacokinetic Note:</strong> Standardized herbal capsules absorb smoothly via the digestive tract. Full metabolic profile data is not available.
                </div>
              </motion.div>
            )}

            {activeTab === 'safety' && (
              <motion.div
                key="safety"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                  Safety, Precautions & Contraindications
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                      <h4 className="text-xs uppercase tracking-widest text-rose-400 font-bold font-display mb-1.5">
                        Contraindications
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Do not take NEUROLUME if you have a known history of allergies or hypersensitivity to any of its biological active ingredients (Shankhpushpi, Ashwagandha, Tagar, Jayphal, Basant).
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                      <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold font-display mb-1.5">
                        Overdose Symptoms
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        The formula is extremely well tolerated. In the event of consuming a massive quantity exceeding the recommended dosage, slight symptoms such as dizziness, nausea, or mild stomach irritation may appear.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-xs uppercase tracking-widest text-slate-300 font-bold font-display mb-1.5">
                        Undesirable Effects
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        NEUROLUME is fairly safe and well-tolerated. Allergic skin reactions or gastrointestinal adjustments are rare and typically occur only in hypersensitive individuals.
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-xs uppercase tracking-widest text-slate-300 font-bold font-display mb-1.5">
                        Special Warnings & Interactions
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        Consult a healthcare provider before use if you are pregnant, nursing, or have pre-existing medical conditions. Keep the drug strictly out of the reach of children. No drug interaction data is available.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'packaging' && (
              <motion.div
                key="packaging"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-bold text-white font-display uppercase tracking-wide">
                  Packaging, Storage & Distribution
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-2xl block mb-2">📦</span>
                    <h4 className="text-xs uppercase font-bold text-slate-300 mb-1 font-display">Packing Options</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      30 or 60 capsules packed inside an HDPE bottle. Each bottle is housed inside a carton alongside a measuring cup and pack insert.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-2xl block mb-2">🌡️</span>
                    <h4 className="text-xs uppercase font-bold text-slate-300 mb-1 font-display">Storage Conditions</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Store in a dry place, protected from direct light, at a temperature not exceeding 25 °C (77 °F).
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-2xl block mb-2">⏳</span>
                    <h4 className="text-xs uppercase font-bold text-slate-300 mb-1 font-display">Shelf Life</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      3 years (36 months). Do not use after the expiration date printed on the bottle and carton.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-sage/5 border border-sage/10 text-xs text-slate-300 flex justify-between items-center">
                  <span><strong>Dispensing Status:</strong> Without a prescription (OTC).</span>
                  <span><strong>Formulation:</strong> 100% Phytotherapy / Non-hormonal</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
