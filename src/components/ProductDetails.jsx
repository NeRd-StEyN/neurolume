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
    <section id="drug-profile" className="py-24 relative overflow-hidden bg-moss/20">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[20%] right-[10%] w-[350px] h-[350px] bg-glow-amber opacity-30 filter blur-[90px]" />
        <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-glow-sage opacity-45 filter blur-[80px]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-sunset font-display">
            {t('details.sectionTag')}
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900">
            {t('details.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-600 text-sm">
            {t('details.subtitle')}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-slate-200 pb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 relative ${
                activeTab === tab.id
                  ? 'text-white bg-gradient-to-r from-sage to-sage-light shadow-lg shadow-sage/10'
                  : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100 border border-transparent'
              }`}
              aria-label={`View ${tab.name}`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Contents */}
        <div className="wellness-card p-8 sm:p-10 border border-slate-200 min-h-[300px] flex flex-col justify-between">
          
          {/* Sleek Top Specifications Bar (decluttered from About) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-6 mb-8 border-b border-slate-200 text-xs text-slate-500">
            <div>
              <span className="block font-bold text-sage uppercase tracking-wider mb-1 font-display">{t('about.tradeName')}</span>
              <span className="text-slate-900 font-semibold text-sm">{t('about.tradeNameVal')}</span>
              <span className="block text-[10px] text-slate-400 mt-0.5">{t('about.tradeNameDesc')}</span>
            </div>
            <div>
              <span className="block font-bold text-sage uppercase tracking-wider mb-1 font-display">{t('about.dosageForm')}</span>
              <span className="text-slate-900 font-semibold text-sm">{t('about.dosageFormVal')}</span>
              <span className="block text-[10px] text-slate-400 mt-0.5">{t('about.dosageFormDesc')}</span>
            </div>
            <div>
              <span className="block font-bold text-sage uppercase tracking-wider mb-1 font-display">{t('details.formulationTitle')}</span>
              <span className="text-slate-900 font-semibold text-sm">{t('details.formulationDesc')}</span>
              <span className="block text-[10px] text-slate-400 mt-0.5">Standardized Dry Extracts</span>
            </div>
          </div>

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
                  <h3 className="font-serif text-xl font-bold text-slate-900 uppercase tracking-wide">
                    {t('details.indicationsTitle')}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-sunset font-semibold">
                    {t('details.indicationsTag')}
                  </p>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {t('details.indicationsDesc')}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200 text-sm text-slate-600">
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="text-xl mt-0.5 text-sage select-none font-bold">•</span>
                    <div>
                      <h4 className="font-bold text-slate-900">{t('details.tensionTitle')}</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {t('details.tensionDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="text-xl mt-0.5 text-sage select-none font-bold">•</span>
                    <div>
                      <h4 className="font-bold text-slate-900">{t('details.insomniaTitle')}</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {t('details.insomniaDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="text-xl mt-0.5 text-sage select-none font-bold">•</span>
                    <div>
                      <h4 className="font-bold text-slate-900">{t('details.fatigueTitle')}</h4>
                      <p className="text-xs text-slate-500 mt-1">
                        {t('details.fatigueDesc')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                    <span className="text-xl mt-0.5 text-sage select-none font-bold">•</span>
                    <div>
                      <h4 className="font-bold text-slate-900">{t('details.imbalanceTitle')}</h4>
                      <p className="text-xs text-slate-500 mt-1">
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
                <h3 className="font-serif text-xl font-bold text-slate-900 uppercase tracking-wide">
                  {t('details.posologyTitle')}
                </h3>
                
                <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/30 grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                  <div className="space-y-2">
                    <h4 className="text-xs uppercase tracking-widest text-slate-500 font-bold font-display">
                      {t('details.tabs.dosage')}
                    </h4>
                    <p className="text-3xl font-black text-sunset font-display">{t('details.posologyDose')}</p>
                    <p className="text-sm text-slate-600">
                      {t('details.posologyDaily')}
                    </p>
                  </div>
                  
                  <div className="space-y-4 sm:border-l sm:border-slate-200 sm:pl-6">
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        {t('details.timingTitle')}
                      </h5>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {t('details.timingDesc')}
                      </p>
                    </div>
                    <div>
                      <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                        {t('details.adminTitle')}
                      </h5>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {t('details.adminDesc')}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-500">
                  <strong className="text-slate-700">{t('details.pkNoteTitle')}</strong> {t('details.pkNoteDesc')}
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
                <h3 className="font-serif text-xl font-bold text-slate-900 uppercase tracking-wide">
                  {t('details.safetyTitle')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl border border-rose-200 bg-rose-50/30">
                      <h4 className="text-xs uppercase tracking-widest text-rose-800 font-bold font-display mb-1.5">
                        {t('details.contraTitle')}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {t('details.contraDesc')}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-amber-200 bg-amber-50/30">
                      <h4 className="text-xs uppercase tracking-widest text-amber-800 font-bold font-display mb-1.5">
                        {t('details.overdoseTitle')}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {t('details.overdoseDesc')}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
                      <h4 className="text-xs uppercase tracking-widest text-slate-700 font-bold font-display mb-1.5">
                        {t('details.effectsTitle')}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {t('details.effectsDesc')}
                      </p>
                    </div>

                    <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50">
                      <h4 className="text-xs uppercase tracking-widest text-slate-700 font-bold font-display mb-1.5">
                        {t('details.warningsTitle')}
                      </h4>
                      <p className="text-xs text-slate-600 leading-relaxed">
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
                <h3 className="font-serif text-xl font-bold text-slate-900 uppercase tracking-wide">
                  {t('details.packagingTitle')}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 text-center">
                    <h4 className="font-serif text-lg font-bold text-slate-800 mb-1">{t('details.packingTitle')}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t('details.packingDesc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 text-center">
                    <h4 className="font-serif text-lg font-bold text-slate-800 mb-1">{t('details.storageTitle')}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t('details.storageDesc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl border border-slate-200 bg-slate-50/50 text-center">
                    <h4 className="font-serif text-lg font-bold text-slate-800 mb-1">{t('details.shelfTitle')}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {t('details.shelfDesc')}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 text-xs text-slate-600 flex flex-wrap justify-between items-center gap-2">
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
