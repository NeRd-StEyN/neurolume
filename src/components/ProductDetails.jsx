import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function ProductDetails() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('indications');

  const tabs = [
    { id: 'indications', name: t('details.tabs.indications') },
    { id: 'dosage', name: t('details.tabs.dosage') },
    { id: 'safety', name: t('details.tabs.safety') },
    { id: 'packaging', name: t('details.tabs.packaging') }
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
            {t('details.sectionTag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            {t('details.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-300 text-sm">
            {t('details.subtitle')}
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
                    {t('details.indicationsTitle')}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-sunset font-semibold">
                    {t('details.indicationsTag')}
                  </p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {t('details.indicationsDesc')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/5 text-sm text-slate-300">
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5">
                    <span className="text-xl mt-0.5">🧠</span>
                    <div>
                      <h4 className="font-bold text-white">{t('details.tensionTitle')}</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {t('details.tensionDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5">
                    <span className="text-xl mt-0.5">😴</span>
                    <div>
                      <h4 className="font-bold text-white">{t('details.insomniaTitle')}</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {t('details.insomniaDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5">
                    <span className="text-xl mt-0.5">🔋</span>
                    <div>
                      <h4 className="font-bold text-white">{t('details.fatigueTitle')}</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {t('details.fatigueDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl bg-white/5">
                    <span className="text-xl mt-0.5">🎭</span>
                    <div>
                      <h4 className="font-bold text-white">{t('details.imbalanceTitle')}</h4>
                      <p className="text-xs text-slate-400 mt-1">
                        {t('details.imbalanceDesc')}
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
                  {t('details.posologyTitle')}
                </h3>
                
                <div className="p-6 rounded-2xl bg-sage/5 border border-sage/20 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-slate-400 font-bold font-display">
                      {t('details.tabs.dosage')}
                    </h4>
                    <p className="text-3xl font-black text-sunset font-display">{t('details.posologyDose')}</p>
                    <p className="text-sm text-slate-300">
                      {t('details.posologyDaily')}
                    </p>
                  </div>
                  
                  <div className="space-y-4 sm:border-l sm:border-white/10 sm:pl-6">
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                        {t('details.timingTitle')}
                      </h5>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {t('details.timingDesc')}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-white uppercase tracking-wider">
                        {t('details.adminTitle')}
                      </h5>
                      <p className="text-xs text-slate-400 mt-0.5">
                        {t('details.adminDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 text-xs text-slate-400">
                  <strong className="text-slate-300">{t('details.pkNoteTitle')}</strong> {t('details.pkNoteDesc')}
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
                  {t('details.safetyTitle')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20">
                      <h4 className="text-xs uppercase tracking-widest text-rose-400 font-bold font-display mb-1.5">
                        {t('details.contraTitle')}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {t('details.contraDesc')}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/20">
                      <h4 className="text-xs uppercase tracking-widest text-amber-400 font-bold font-display mb-1.5">
                        {t('details.overdoseTitle')}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {t('details.overdoseDesc')}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-xs uppercase tracking-widest text-slate-300 font-bold font-display mb-1.5">
                        {t('details.effectsTitle')}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {t('details.effectsDesc')}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl bg-white/5 border border-white/10">
                      <h4 className="text-xs uppercase tracking-widest text-slate-300 font-bold font-display mb-1.5">
                        {t('details.warningsTitle')}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {t('details.warningsDesc')}
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
                  {t('details.packagingTitle')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-2xl block mb-2">📦</span>
                    <h4 className="text-xs uppercase font-bold text-slate-300 mb-1 font-display">{t('details.packingTitle')}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {t('details.packingDesc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-2xl block mb-2">🌡️</span>
                    <h4 className="text-xs uppercase font-bold text-slate-300 mb-1 font-display">{t('details.storageTitle')}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {t('details.storageDesc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-white/5 border border-white/10 text-center">
                    <span className="text-2xl block mb-2">⏳</span>
                    <h4 className="text-xs uppercase font-bold text-slate-300 mb-1 font-display">{t('details.shelfTitle')}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {t('details.shelfDesc')}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-sage/5 border border-sage/10 text-xs text-slate-300 flex justify-between items-center">
                  <span><strong>{t('details.statusTitle')}</strong> {t('details.statusDesc')}</span>
                  <span><strong>{t('details.formulationTitle')}</strong> {t('details.formulationDesc')}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
