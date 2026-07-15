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
    <section id="overview" className="py-24 relative overflow-hidden bg-moss/20">
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
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-slate-900">
            {t('about.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-600 text-base leading-relaxed">
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
            <div className="relative w-full max-w-[320px]">
              {/* Morphing Neural Orb container */}
              <div className="neural-orb aspect-square w-full flex items-center justify-center p-8 relative shadow-2xl">
                <div className="absolute inset-0 bg-[#d2dfd8]/65 mix-blend-multiply" />
                
                {/* Overlay content */}
                <div className="relative z-10 text-center space-y-4">
                  <div className="text-5xl text-sage filter drop-shadow-[0_0_10px_rgba(34,60,48,0.15)]">
                    ✨
                  </div>
                  <h3 className="text-xl font-bold font-display text-slate-900 uppercase tracking-wider">
                    {t('about.leafTitle')}
                  </h3>
                  <span className="inline-block text-[11px] font-bold tracking-widest text-sunset font-display uppercase">
                    Neuro-Regulation
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Detailed Product Mode of Action */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={cardVariants}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold font-display text-slate-900 flex items-center space-x-3">
                <span className="h-6 w-1 bg-sunset rounded-full" />
                <span>{t('about.modeOfActionTitle')}</span>
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {t('about.modeOfActionDesc')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-slate-200">
              <div className="space-y-2">
                <div className="flex items-center space-x-2.5">
                  <div className="h-6 w-6 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold text-xs flex-shrink-0">
                    1
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{t('about.point1Title')}</h4>
                </div>
                <p className="text-xs text-slate-600 pl-8.5 leading-relaxed">
                  {t('about.point1Desc')}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2.5">
                  <div className="h-6 w-6 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold text-xs flex-shrink-0">
                    2
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{t('about.point2Title')}</h4>
                </div>
                <p className="text-xs text-slate-600 pl-8.5 leading-relaxed">
                  {t('about.point2Desc')}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2.5">
                  <div className="h-6 w-6 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold text-xs flex-shrink-0">
                    3
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{t('about.point3Title')}</h4>
                </div>
                <p className="text-xs text-slate-600 pl-8.5 leading-relaxed">
                  {t('about.point3Desc')}
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center space-x-2.5">
                  <div className="h-6 w-6 rounded-full bg-sage/10 text-sage flex items-center justify-center font-bold text-xs flex-shrink-0">
                    4
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{t('about.point4Title')}</h4>
                </div>
                <p className="text-xs text-slate-600 pl-8.5 leading-relaxed">
                  {t('about.point4Desc')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
