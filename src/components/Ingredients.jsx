import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Ingredients() {
  const { t } = useTranslation();
  const [activeIngredient, setActiveIngredient] = useState(null);

  const ingredientsList = [
    {
      id: 'shankhpushpi',
      name: t('ingredients.items.shankhpushpi.name'),
      scientificName: t('ingredients.items.shankhpushpi.scientificName'),
      dose: t('ingredients.items.shankhpushpi.dose'),
      percentage: t('ingredients.items.shankhpushpi.percentage'),
      benefits: t('ingredients.items.shankhpushpi.benefits', { returnObjects: true }) || [],
      description: t('ingredients.items.shankhpushpi.description'),
      color: 'from-emerald-500/20 to-teal-500/20',
      borderColor: 'rgba(16, 185, 129, 0.3)'
    },
    {
      id: 'ashwagandha',
      name: t('ingredients.items.ashwagandha.name'),
      scientificName: t('ingredients.items.ashwagandha.scientificName'),
      dose: t('ingredients.items.ashwagandha.dose'),
      percentage: t('ingredients.items.ashwagandha.percentage'),
      benefits: t('ingredients.items.ashwagandha.benefits', { returnObjects: true }) || [],
      description: t('ingredients.items.ashwagandha.description'),
      color: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'rgba(52, 211, 153, 0.3)'
    },
    {
      id: 'tagar',
      name: t('ingredients.items.tagar.name'),
      scientificName: t('ingredients.items.tagar.scientificName'),
      dose: t('ingredients.items.tagar.dose'),
      percentage: t('ingredients.items.tagar.percentage'),
      benefits: t('ingredients.items.tagar.benefits', { returnObjects: true }) || [],
      description: t('ingredients.items.tagar.description'),
      color: 'from-teal-500/20 to-sage/20',
      borderColor: 'rgba(20, 184, 166, 0.3)'
    },
    {
      id: 'jayphal',
      name: t('ingredients.items.jayphal.name'),
      scientificName: t('ingredients.items.jayphal.scientificName'),
      dose: t('ingredients.items.jayphal.dose'),
      percentage: t('ingredients.items.jayphal.percentage'),
      benefits: t('ingredients.items.jayphal.benefits', { returnObjects: true }) || [],
      description: t('ingredients.items.jayphal.description'),
      color: 'from-amber-600/20 to-sunset/20',
      borderColor: 'rgba(245, 158, 11, 0.3)'
    },
    {
      id: 'basant',
      name: t('ingredients.items.basant.name'),
      scientificName: t('ingredients.items.basant.scientificName'),
      dose: t('ingredients.items.basant.dose'),
      percentage: t('ingredients.items.basant.percentage'),
      benefits: t('ingredients.items.basant.benefits', { returnObjects: true }) || [],
      description: t('ingredients.items.basant.description'),
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
          <span className="text-xs uppercase tracking-widest font-bold text-sunset font-display">
            {t('ingredients.sectionTag')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-display text-slate-900">
            {t('ingredients.title')}
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sage to-sunset mx-auto rounded-full" />
          <p className="text-slate-600 text-base">
            {t('ingredients.subtitle')}
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
                <div className="flex justify-end items-start mb-4">
                  <span className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded bg-slate-100 border border-slate-200 text-slate-600 font-display">
                    {item.dose}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sunset transition-colors duration-300 font-display leading-tight">
                  {item.name}
                </h3>
                <p className="text-xs italic text-sage/80 mt-1 font-sans">
                  {item.scientificName}
                </p>
              </div>

              <div className="mt-8 text-xs font-semibold text-sage flex items-center space-x-1 group-hover:text-sunset transition-colors duration-300">
                <span>{t('ingredients.viewChemistry')}</span>
                <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Excipients notice */}
        <div className="mt-8 text-center">
          <p className="text-xs text-slate-500">
            {t('ingredients.caption')}
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
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              >
                {/* Modal Container */}
                <motion.div
                  layoutId={`card-${activeIngredient.id}`}
                  onClick={(e) => e.stopPropagation()}
                  className="w-full max-w-lg bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden relative"
                >
                  <div className={`h-3 bg-gradient-to-r ${activeIngredient.color}`} />
                  
                  {/* Close button */}
                  <button
                    onClick={() => setActiveIngredient(null)}
                    className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors cursor-pointer"
                  >
                    ✕
                  </button>

                  <div className="p-8">
                    <div className="mb-4">
                      <div>
                        <h3 className="text-2xl font-bold font-display text-slate-900">
                          {activeIngredient.name}
                        </h3>
                        <p className="text-sm italic text-sage font-sans">
                          {activeIngredient.scientificName}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3 mb-6">
                      <div className="px-3 py-1 rounded bg-sage/10 border border-sage/20 text-sage font-bold text-xs uppercase tracking-widest font-display">
                        {t('ingredients.dose')}: {activeIngredient.dose}
                      </div>
                      <div className="px-3 py-1 rounded bg-sunset/10 border border-sunset/20 text-sunset text-xs font-bold font-display">
                        {t('ingredients.ratio')}: {activeIngredient.percentage}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2 font-display">
                          {t('ingredients.bioAction')}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {activeIngredient.benefits.map((benefit, idx) => (
                            <span
                              key={idx}
                              className="px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-semibold"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2">
                        <h4 className="text-xs uppercase tracking-widest font-bold text-slate-500 mb-2 font-display">
                          {t('ingredients.pharmDescription')}
                        </h4>
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {activeIngredient.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-slate-200 flex justify-end">
                      <button
                        onClick={() => setActiveIngredient(null)}
                        className="px-6 py-2.5 rounded-full bg-gradient-to-r from-sage to-sage-light hover:from-sunset hover:to-sunset-light text-white font-bold text-sm shadow-md cursor-pointer transition-all duration-300"
                      >
                        {t('ingredients.closePortal')}
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
