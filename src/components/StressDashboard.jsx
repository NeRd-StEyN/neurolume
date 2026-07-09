import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function StressDashboard() {
  const [stress, setStress] = useState(70);
  const [sleep, setSleep] = useState(40);
  const [fog, setFog] = useState(65);
  const [tookSupplement, setTookSupplement] = useState(false);

  // Physiological State outputs
  const [cortisol, setCortisol] = useState(75);
  const [gaba, setGaba] = useState(30);
  const [serotonin, setSerotonin] = useState(45);

  useEffect(() => {
    // Basic simulation logic
    let calculatedCortisol = Math.round(stress * 0.9 + (100 - sleep) * 0.2);
    let calculatedGaba = Math.round(sleep * 0.7 - stress * 0.3 + 30);
    let calculatedSerotonin = Math.round(sleep * 0.4 - stress * 0.2 - fog * 0.2 + 60);

    // Bound values between 0 and 100
    calculatedCortisol = Math.max(0, Math.min(100, calculatedCortisol));
    calculatedGaba = Math.max(0, Math.min(100, calculatedGaba));
    calculatedSerotonin = Math.max(0, Math.min(100, calculatedSerotonin));

    if (tookSupplement) {
      // Neurolume effect: regulate cortisol (-45%), boost GABA (+40%), boost serotonin (+35%)
      calculatedCortisol = Math.round(calculatedCortisol * 0.55);
      calculatedGaba = Math.round(calculatedGaba + 40);
      calculatedSerotonin = Math.round(calculatedSerotonin + 35);

      // Re-bound
      calculatedCortisol = Math.max(0, Math.min(100, calculatedCortisol));
      calculatedGaba = Math.max(0, Math.min(100, calculatedGaba));
      calculatedSerotonin = Math.max(0, Math.min(100, calculatedSerotonin));
    }

    setCortisol(calculatedCortisol);
    setGaba(calculatedGaba);
    setSerotonin(calculatedSerotonin);
  }, [stress, sleep, fog, tookSupplement]);

  // Color helper based on state safety ranges
  const getProgressColor = (val, type) => {
    if (type === 'cortisol') {
      if (val > 65) return 'bg-rose-500 shadow-rose-500/25';
      if (val > 40) return 'bg-amber-500 shadow-amber-500/25';
      return 'bg-emerald-500 shadow-emerald-500/25';
    } else {
      // GABA or Serotonin (Higher is better)
      if (val < 40) return 'bg-rose-500 shadow-rose-500/25';
      if (val < 65) return 'bg-amber-500 shadow-amber-500/25';
      return 'bg-emerald-500 shadow-emerald-500/25';
    }
  };

  return (
    <section id="stress-dashboard" className="py-24 relative overflow-hidden bg-forest/10 border-y border-sage/5">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[5%] w-[450px] h-[450px] bg-glow-sage opacity-30 filter blur-[95px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-glow-amber opacity-40 filter blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-sunset font-display">
            Interactive Bio-Widget
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            Simulate Your Adrenal Stress Response
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-300 text-base">
            Adjust the sliders to represent your daily lifestyle metrics, then toggle Neurolume to see how the active extracts bring your biochemistry back to homeostasis.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Sliders Controls */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 bg-forest/40 border border-sage/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md">
            <div>
              <h3 className="text-lg font-bold font-display text-white mb-6 flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-sunset animate-ping" />
                <span>Adjust Lifestyle Inputs</span>
              </h3>

              <div className="space-y-6">
                {/* Stress Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-300">Mental Stress / Workload</span>
                    <span className={stress > 65 ? 'text-rose-400 font-bold' : 'text-slate-400'}>{stress}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={stress}
                    onChange={(e) => setStress(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sage"
                    aria-label="Mental Stress Level"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Zen Calm</span>
                    <span>Extreme Panic</span>
                  </div>
                </div>

                {/* Sleep Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-300">Sleep Duration & Depth</span>
                    <span className={sleep < 45 ? 'text-rose-400 font-bold' : 'text-slate-400'}>{sleep}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sleep}
                    onChange={(e) => setSleep(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sage"
                    aria-label="Sleep Duration and Depth"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>Insomnia</span>
                    <span>Restorative Sleep</span>
                  </div>
                </div>

                {/* Brain Fog Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-300">Cognitive Fatigue / Fog</span>
                    <span className={fog > 65 ? 'text-rose-400 font-bold' : 'text-slate-400'}>{fog}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={fog}
                    onChange={(e) => setFog(parseInt(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sage"
                    aria-label="Cognitive Fatigue and Fog"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>High Clarity</span>
                    <span>Total Exhaustion</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Neurolume Switch Card */}
            <div className="pt-6 mt-6 border-t border-white/5 space-y-4">
              <div className="flex items-center justify-between p-4 rounded-2xl bg-sage/5 border border-sage/20 shadow-inner">
                <div>
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                    Activate Neurolume
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Administer 1-2 capsules (Herbal Stress Relief)
                  </p>
                </div>
                
                {/* Custom Toggle Switch */}
                <button
                  onClick={() => setTookSupplement(!tookSupplement)}
                  className={`w-14 h-8 rounded-full p-1 transition-all duration-300 focus:outline-none ${
                    tookSupplement ? 'bg-sage border border-sage-light' : 'bg-slate-800 border border-slate-700'
                  }`}
                  aria-label="Toggle Neurolume supplement administration status"
                >
                  <div
                    className={`h-5 w-5 rounded-full bg-forest-dark transition-all duration-300 shadow-md transform ${
                      tookSupplement ? 'translate-x-6 bg-slate-900' : 'translate-x-0 bg-slate-400'
                    }`}
                  />
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Physiological Output Indicators */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-forest/40 border border-sage/10 p-6 sm:p-8 rounded-3xl backdrop-blur-md relative overflow-hidden">
            <div>
              <h3 className="text-lg font-bold font-display text-white mb-6 flex items-center justify-between">
                <span>Physiological Biomarker Analysis</span>
                <span className={`text-xs px-2.5 py-1 rounded-full uppercase tracking-wider font-semibold border ${
                  tookSupplement 
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
                    : 'bg-rose-500/10 text-rose-400 border-rose-500/20 animate-pulse'
                }`}>
                  {tookSupplement ? 'Parasympathetic Active (Calm)' : 'Sympathetic Active (Stressed)'}
                </span>
              </h3>

              <div className="space-y-6">
                {/* Cortisol Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-300 flex items-center space-x-1.5">
                      <span>Adrenal Cortisol Release</span>
                      {tookSupplement && (
                        <span className="text-[10px] text-emerald-400 font-bold font-display uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          Ashwagandha Active
                        </span>
                      )}
                    </span>
                    <span className="font-bold text-sm text-slate-200">{cortisol}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3.5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out shadow ${getProgressColor(
                        cortisol,
                        'cortisol'
                      )}`}
                      style={{ width: `${cortisol}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Stress hormone generated by the adrenal glands. Promotes physical fatigue and anxiety. Ideal range: &lt;45%.
                  </p>
                </div>

                {/* GABA Calming Index */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-300 flex items-center space-x-1.5">
                      <span>GABA Neural Inhibitor</span>
                      {tookSupplement && (
                        <span className="text-[10px] text-emerald-400 font-bold font-display uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          Tagar Active
                        </span>
                      )}
                    </span>
                    <span className="font-bold text-sm text-slate-200">{gaba}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3.5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out shadow ${getProgressColor(
                        gaba,
                        'gaba'
                      )}`}
                      style={{ width: `${gaba}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Brain neurotransmitter that calms active nerves and controls irritability. Ideal range: &gt;60%.
                  </p>
                </div>

                {/* Serotonin Mood Factor */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-300 flex items-center space-x-1.5">
                      <span>Serotonin Mood Factor</span>
                      {tookSupplement && (
                        <span className="text-[10px] text-emerald-400 font-bold font-display uppercase tracking-widest bg-emerald-500/10 px-1.5 py-0.5 rounded">
                          Basant Active
                        </span>
                      )}
                    </span>
                    <span className="font-bold text-sm text-slate-200">{serotonin}%</span>
                  </div>
                  <div className="w-full bg-slate-800 h-3.5 rounded-full overflow-hidden p-0.5 border border-white/5">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out shadow ${getProgressColor(
                        serotonin,
                        'serotonin'
                      )}`}
                      style={{ width: `${serotonin}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-400">
                    Regulates sleep architecture, happiness levels, and neurological recovery. Ideal range: &gt;60%.
                  </p>
                </div>
              </div>
            </div>

            {/* Verdict Box */}
            <div className="mt-8 pt-6 border-t border-white/5 text-xs">
              <div className={`p-4 rounded-2xl flex items-start space-x-3 transition-colors duration-500 ${
                tookSupplement 
                  ? 'bg-emerald-500/5 border border-emerald-500/15 text-slate-300' 
                  : 'bg-rose-500/5 border border-rose-500/15 text-slate-300'
              }`}>
                <span className="text-lg flex-shrink-0 mt-0.5">
                  {tookSupplement ? '🌱' : '⚠️'}
                </span>
                <div>
                  <h4 className={`font-bold font-display uppercase tracking-wider ${
                    tookSupplement ? 'text-emerald-400' : 'text-rose-400'
                  }`}>
                    {tookSupplement ? 'Neurolume Synergy Active' : 'Unregulated Stress Mode'}
                  </h4>
                  <p className="mt-1 leading-relaxed">
                    {tookSupplement 
                      ? 'The adaptogenic compounds have neutralized high cortisol levels. Ashwagandha buffers stress receptors, Tagar ramps up GABA levels to quiet nervous pathways, and Basant keeps serotonin active. Your body enters a restorative resting mode, easing stress-induced insomnia.'
                      : 'High workload and low sleep have activated the sympathetic nervous system. Cortisol is elevated, creating physical tension, focus disruption, and sleep struggles. Consider administering 1-2 capsules daily, preferably at night, to recalibrate your bio-indicators.'
                    }
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
