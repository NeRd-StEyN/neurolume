import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

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
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-glow-amber opacity-40 filter blur-[70px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-widest font-bold text-sunset font-display">
            {t('about.sectionTag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-white">
            {t('about.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-300 text-base leading-relaxed">
            {t('about.subtitle')}
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
              {/* Organic mask container */}
              <div className="leaf-mask aspect-square w-full flex items-center justify-center p-8 relative shadow-2xl">
                <div className="absolute inset-0 bg-[#051811]/90 mix-blend-multiply" />
                
                {/* Overlay content */}
                <div className="relative z-10 text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-sage/10 border border-sage/30 flex items-center justify-center mx-auto text-sage shadow-lg shadow-sage/10">
                    <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m12.728 12.728l.707-.707M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold font-display text-white uppercase tracking-wider">
                    {t('about.leafTitle')}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed max-w-xs mx-auto">
                    {t('about.leafDesc')}
                  </p>
                </div>
              </div>
              
              {/* Floating ambient badge */}
              <div className="absolute -bottom-6 -right-6 wellness-card px-5 py-4 border border-sage/20 shadow-xl max-w-[200px]">
                <span className="block text-2xl font-black text-sunset font-display">0%</span>
                <span className="block text-[10px] text-slate-300 font-bold uppercase tracking-wider">
                  {t('about.noAdditives')}
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
                  {t('about.tradeName')}
                </h4>
                <p className="text-lg font-bold text-white">{t('about.tradeNameVal')}</p>
                <p className="text-xs text-slate-400 mt-1">{t('about.tradeNameDesc')}</p>
              </div>

              <div className="wellness-card p-6 border-sage/10 hover:border-sage/20">
                <h4 className="text-sm font-bold text-sage-pale uppercase tracking-widest mb-1.5 font-display">
                  {t('about.dosageForm')}
                </h4>
                <p className="text-lg font-bold text-white">{t('about.dosageFormVal')}</p>
                <p className="text-xs text-slate-400 mt-1">{t('about.dosageFormDesc')}</p>
              </div>
            </div>

            <div className="wellness-card p-6 sm:p-8 border-sage/15">
              <h3 className="text-xl font-bold font-display text-white mb-4 flex items-center space-x-3">
                <span className="h-6 w-1 bg-sunset rounded-full" />
                <span>{t('about.modeOfActionTitle')}</span>
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {t('about.modeOfActionDesc')}
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-sage/20 text-sage flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t('about.point1Title')}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t('about.point1Desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-sage/20 text-sage flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t('about.point2Title')}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t('about.point2Desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-sage/20 text-sage flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t('about.point3Title')}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t('about.point3Desc')}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="h-5 w-5 rounded-full bg-sage/20 text-sage flex items-center justify-center font-bold text-xs mt-0.5 flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{t('about.point4Title')}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t('about.point4Desc')}
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
