import { motion } from 'framer-motion';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 50, damping: 15 }
    }
  };

  return (
    <section id="overview" className="py-24 relative overflow-hidden bg-forest/20">
      {/* Background elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full bg-glow-sage opacity-50 filter blur-[80px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-glow-amber opacity-40 filter blur-[70px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-sunset font-display">
            The Science of Serenity
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            Synergistic Psychotropic & Adaptogenic Formula
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-300 text-base leading-relaxed">
            Unlike synthetic calmers that cause cognitive dullness, Neurolume acts on specific neurotransmitter pathways and adrenal glands to modulate stress hormone levels naturally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Organic Leaf Mask and Visual Summary */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={cardVariants}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-full max-w-[360px]">
              {/* Organic mask container representing nature and leaves */}
              <div className="leaf-mask aspect-square w-full flex items-center justify-center p-8 relative shadow-2xl">
                <div className="absolute inset-0 bg-[#051811]/90 mix-blend-multiply" />
                
                {/* Overlay content inside organic mask */}
                <div className="relative z-10 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-sage/10 border border-sage/30 flex items-center justify-center mx-auto text-sage shadow-lg shadow-sage/10">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold font-display text-white uppercase tracking-wider">
                    Anxiolytic Matrix
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed max-w-xs mx-auto">
                    A precisely calibrated blend of standardized dry extracts designed to calm hyperactive neurotransmission without creating dependence.
                  </p>
                </div>
              </div>
              
              {/* Floating ambient badge */}
              <div className="absolute -bottom-6 -right-6 wellness-card px-5 py-4 border border-sage/20 shadow-xl max-w-[200px]">
                <span className="block text-2xl font-black text-sunset font-display">0%</span>
                <span className="block text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                  Chemical Additives or Synthetic Fillers
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Product Mode of Action */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={cardVariants}
            className="lg:col-span-7 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="wellness-card p-6 border-sage/10 hover:border-sage/20">
                <h4 className="text-sm font-bold text-sage-pale uppercase tracking-widest mb-1.5 font-display">
                  Trade Name
                </h4>
                <p className="text-lg font-bold text-white">NEUROLUME</p>
                <p className="text-xs text-slate-400 mt-1">Herbal Capsule for Stress Relief</p>
              </div>

              <div className="wellness-card p-6 border-sage/10 hover:border-sage/20">
                <h4 className="text-sm font-bold text-sage-pale uppercase tracking-widest mb-1.5 font-display">
                  Dosage Form
                </h4>
                <p className="text-lg font-bold text-white">Hard Gelatin Capsule</p>
                <p className="text-xs text-slate-400 mt-1">With specific taste and natural herbal odor</p>
              </div>
            </div>

            <div className="wellness-card p-6 sm:p-8 border-sage/15">
              <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center space-x-3">
                <span className="h-6 w-1 bg-sunset rounded-full" />
                <span>Synergistic Mode of Action</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                Rather than treating symptoms in isolation, Neurolume regulates the complex, interconnected pathways of the human stress response:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-sage/20 text-sage flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Cortisol Regulation & Adaptation</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Ashwagandha acts directly as an adaptogen, assisting the adrenal glands in keeping cortisol levels within normal ranges, preventing stress-induced burnout and fatigue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-sage/20 text-sage flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">GABA Receptor Modulation</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Tagar extract acts on the central nervous system, calming the brain by enhancing GABAergic neurotransmission, calming racing thoughts, and easing muscle tension.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-sage/20 text-sage flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Serotonin Enhancement & Mood Support</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Basant (St. John's Wort) helps balance serotonin levels in the synaptic clefts, elevating overall emotional well-being, and reducing feelings of anxiety, depression, and irritability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-sage/20 text-sage flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Neuroprotection & Mental Clarity</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Shankhpushpi and Jayphal extracts promote mental focus, reduce nervous excitability, protect neurons from stress-induced damage, and enhance concentration.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
