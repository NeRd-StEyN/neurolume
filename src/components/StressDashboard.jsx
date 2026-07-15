import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function StressDashboard() {
  const { t } = useTranslation();
  const [stress, setStress] = useState(70);
  const [sleep, setSleep] = useState(40);
  const [fog, setFog] = useState(65);
  const [tookSupplement, setTookSupplement] = useState(false);

  // Physiological State outputs
  const [cortisol, setCortisol] = useState(75);
  const [gaba, setGaba] = useState(30);
  const [serotonin, setSerotonin] = useState(45);

  useEffect(() => {
    let calculatedCortisol = Math.round(stress * 0.9 + (100 - sleep) * 0.2);
    let calculatedGaba = Math.round(sleep * 0.7 - stress * 0.3 + 30);
    let calculatedSerotonin = Math.round(sleep * 0.4 - stress * 0.2 - fog * 0.2 + 60);

    calculatedCortisol = Math.max(0, Math.min(100, calculatedCortisol));
    calculatedGaba = Math.max(0, Math.min(100, calculatedGaba));
    calculatedSerotonin = Math.max(0, Math.min(100, calculatedSerotonin));

    if (tookSupplement) {
      calculatedCortisol = Math.round(calculatedCortisol * 0.55);
      calculatedGaba = Math.round(calculatedGaba + 40);
      calculatedSerotonin = Math.round(calculatedSerotonin + 35);

      calculatedCortisol = Math.max(0, Math.min(100, calculatedCortisol));
      calculatedGaba = Math.max(0, Math.min(100, calculatedGaba));
      calculatedSerotonin = Math.max(0, Math.min(100, calculatedSerotonin));
    }

    setCortisol(calculatedCortisol);
    setGaba(calculatedGaba);
    setSerotonin(calculatedSerotonin);
  }, [stress, sleep, fog, tookSupplement]);

  const getProgressColor = (val, type) => {
    if (type === 'cortisol') {
      if (val > 65) return 'bg-rose-500 shadow-rose-500/25';
      if (val > 40) return 'bg-amber-500 shadow-amber-500/25';
      return 'bg-emerald-500 shadow-emerald-500/25';
    } else {
      if (val < 40) return 'bg-rose-500 shadow-rose-500/25';
      if (val < 65) return 'bg-amber-500 shadow-amber-500/25';
      return 'bg-emerald-500 shadow-emerald-500/25';
    }
  };

  return (
    <section id="stress-dashboard" className="py-24 relative overflow-hidden bg-moss/20 border-y border-slate-200">
      {/* Ambient backgrounds */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[30%] left-[5%] w-[450px] h-[450px] bg-glow-sage opacity-30 filter blur-[95px]" />
        <div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] bg-glow-amber opacity-40 filter blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-sunset font-display">
            {t('stressWidget.sectionTag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-slate-900">
            {t('stressWidget.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-600 text-base">
            {t('stressWidget.subtitle')}
          </p>
        </div>

        {/* Unified Glass Container */}
        <div className="wellness-card p-6 sm:p-10 border border-slate-200 backdrop-blur-lg">
          
          {/* Header switch to activate supplement - sleek and centered */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-5 rounded-2xl bg-sage/5 border border-sage/10 mb-10 max-w-2xl mx-auto">
            <div className="text-center sm:text-left mb-4 sm:mb-0">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider font-display">
                {t('stressWidget.activateTitle')}
              </h4>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {t('stressWidget.activateDesc')}
              </p>
            </div>
            
            <button
              onClick={() => setTookSupplement(!tookSupplement)}
              className={`w-14 h-8 rounded-full p-1 transition-all duration-300 focus:outline-none flex-shrink-0 cursor-pointer border ${
                tookSupplement ? 'bg-sage border-sage-light' : 'bg-slate-200 border-slate-300'
              }`}
              aria-label="Toggle Neurolume supplement administration status"
            >
              <div
                className={`h-5 w-5 rounded-full bg-white transition-all duration-300 shadow-md transform ${
                  tookSupplement ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Left Column: Sliders Controls */}
            <div className="lg:col-span-5 space-y-8">
              <h3 className="text-base font-bold font-display text-slate-900 uppercase tracking-wider flex items-center space-x-2 border-b border-slate-200 pb-3">
                <span className="h-2 w-2 rounded-full bg-sunset animate-pulse" />
                <span>{t('stressWidget.adjustmentsTitle')}</span>
              </h3>

              <div className="space-y-6">
                {/* Stress Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-700">{t('stressWidget.stressLabel')}</span>
                    <span className={stress > 65 ? 'text-rose-600 font-bold' : 'text-slate-500'}>{stress}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={stress}
                    onChange={(e) => setStress(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sage"
                    aria-label="Mental Stress Level"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>{t('stressWidget.stressZen')}</span>
                    <span>{t('stressWidget.stressPanic')}</span>
                  </div>
                </div>

                {/* Sleep Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-700">{t('stressWidget.sleepLabel')}</span>
                    <span className={sleep < 45 ? 'text-rose-600 font-bold' : 'text-slate-500'}>{sleep}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={sleep}
                    onChange={(e) => setSleep(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sage"
                    aria-label="Sleep Duration and Depth"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>{t('stressWidget.sleepInsomnia')}</span>
                    <span>{t('stressWidget.sleepRestore')}</span>
                  </div>
                </div>

                {/* Brain Fog Slider */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-700">{t('stressWidget.fogLabel')}</span>
                    <span className={fog > 65 ? 'text-rose-600 font-bold' : 'text-slate-500'}>{fog}%</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={fog}
                    onChange={(e) => setFog(parseInt(e.target.value))}
                    className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sage"
                    aria-label="Cognitive Fatigue and Fog"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500">
                    <span>{t('stressWidget.fogClarity')}</span>
                    <span>{t('stressWidget.fogExhaust')}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Physiological Output Indicators */}
            <div className="lg:col-span-7 space-y-8">
              <h3 className="text-base font-bold font-display text-slate-900 uppercase tracking-wider flex items-center justify-between border-b border-slate-200 pb-3">
                <span>{t('stressWidget.biomarkerTitle')}</span>
                <span className={`text-[10px] px-2.5 py-0.5 rounded-full uppercase tracking-wider font-semibold border ${
                  tookSupplement 
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200' 
                    : 'bg-rose-50 text-rose-800 border-rose-200'
                }`}>
                  {tookSupplement ? t('stressWidget.activeStatus') : t('stressWidget.inactiveStatus')}
                </span>
              </h3>

              <div className="space-y-6">
                {/* Cortisol Indicator */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-700 flex items-center space-x-1.5">
                      <span>{t('stressWidget.cortisolLabel')}</span>
                      {tookSupplement && (
                        <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-100 font-bold font-display uppercase tracking-widest px-1.5 py-0.5 rounded">
                          {t('stressWidget.cortisolBadge')}
                        </span>
                      )}
                    </span>
                    <span className="font-bold text-sm text-slate-900">{cortisol}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out shadow ${getProgressColor(
                        cortisol,
                        'cortisol'
                      )}`}
                      style={{ width: `${cortisol}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-600">
                    {t('stressWidget.cortisolDesc')}
                  </p>
                </div>

                {/* GABA Calming Index */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-700 flex items-center space-x-1.5">
                      <span>{t('stressWidget.gabaLabel')}</span>
                      {tookSupplement && (
                        <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-100 font-bold font-display uppercase tracking-widest px-1.5 py-0.5 rounded">
                          {t('stressWidget.gabaBadge')}
                        </span>
                      )}
                    </span>
                    <span className="font-bold text-sm text-slate-900">{gaba}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out shadow ${getProgressColor(
                        gaba,
                        'gaba'
                      )}`}
                      style={{ width: `${gaba}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-600">
                    {t('stressWidget.gabaDesc')}
                  </p>
                </div>

                {/* Serotonin Mood Factor */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold uppercase tracking-wider">
                    <span className="text-slate-700 flex items-center space-x-1.5">
                      <span>{t('stressWidget.serotoninLabel')}</span>
                      {tookSupplement && (
                        <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-100 font-bold font-display uppercase tracking-widest px-1.5 py-0.5 rounded">
                          {t('stressWidget.serotoninBadge')}
                        </span>
                      )}
                    </span>
                    <span className="font-bold text-sm text-slate-900">{serotonin}%</span>
                  </div>
                  <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden p-0.5 border border-slate-200">
                    <div
                      className={`h-full rounded-full transition-all duration-700 ease-out shadow ${getProgressColor(
                        serotonin,
                        'serotonin'
                      )}`}
                      style={{ width: `${serotonin}%` }}
                    />
                  </div>
                  <p className="text-[10px] text-slate-600">
                    {t('stressWidget.serotoninDesc')}
                  </p>
                </div>
              </div>

              {/* Verdict Box */}
              <div className="pt-6 border-t border-slate-200 text-xs">
                <div className={`p-4 rounded-2xl flex items-start space-x-3 transition-colors duration-500 border ${
                  tookSupplement 
                    ? 'bg-emerald-50/50 border-emerald-100 text-slate-700' 
                    : 'bg-rose-50/50 border-rose-100 text-slate-700'
                }`}>
                  <span className="text-lg flex-shrink-0 mt-0.5">
                    {tookSupplement ? '🌱' : '⚠️'}
                  </span>
                  <div>
                    <h4 className={`font-bold font-display uppercase tracking-wider ${
                      tookSupplement ? 'text-emerald-800' : 'text-rose-800'
                    }`}>
                      {tookSupplement ? t('stressWidget.activeVerdictTitle') : t('stressWidget.inactiveVerdictTitle')}
                    </h4>
                    <p className="mt-1 leading-relaxed">
                      {tookSupplement 
                        ? t('stressWidget.activeVerdictDesc')
                        : t('stressWidget.inactiveVerdictDesc')
                      }
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
