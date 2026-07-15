import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Hero() {
  const { t } = useTranslation();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <section className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Glows */}
        <div className="absolute top-[10%] right-[5%] w-[450px] h-[450px] rounded-full bg-glow-amber opacity-80 filter blur-[80px]" />
        <div className="absolute bottom-[10%] left-[5%] w-[500px] h-[500px] rounded-full bg-glow-sage opacity-70 filter blur-[90px]" />
        
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#223c30_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Tag / Category */}
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sage/10 border border-sage/20 shadow-inner"
            >
              <span className="h-2 w-2 rounded-full bg-sage animate-pulse" />
              <span className="text-xs uppercase tracking-widest font-semibold text-sage font-display">
                {t('hero.premiumTag')}
              </span>
            </motion.div>

            {/* Main Page SEO H1 */}
            <motion.h1 
              variants={itemVariants}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[0.95] mb-8 text-slate-900"
              id="hero-title"
            >
              {t('hero.titlePart1')} <br />
              {t('hero.titlePart2')} <br />
              <span className="amber-glow-text">Neurolume</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-slate-600 text-lg sm:text-xl leading-relaxed mb-10 max-w-lg"
            >
              {t('hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-6"
            >
              <a
                href="#stress-dashboard"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-sage to-sage-light hover:from-sunset hover:to-sunset-light text-white font-bold text-base shadow-lg shadow-sage/10 hover:shadow-sunset/10 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                {t('hero.ctaStress')}
              </a>
              <a
                href="#ingredients"
                className="px-8 py-3.5 rounded-full bg-transparent hover:bg-slate-100 border border-slate-300 hover:border-sage text-slate-700 font-semibold text-base transition-all duration-300"
              >
                {t('hero.ctaScience')}
              </a>
            </motion.div>
          </motion.div>

          {/* Floating Product Image Visual */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0"
          >
            {/* Visual backdrop radial glow */}
            <div className="absolute w-[300px] h-[300px] rounded-full bg-sunset/10 blur-[50px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 animate-pulse" />

            {/* The Image Container */}
            <div className="package-float relative z-10 w-full max-w-[340px] sm:max-w-[380px]">
              {/* Premium Floating Ring Frame */}
              <div className="absolute -inset-4 rounded-3xl border border-sage/10 bg-gradient-to-b from-sage/5 to-transparent backdrop-blur-[2px] -z-10 shadow-xl shadow-slate-100" />
              
              <img
                src="/neurolume-package.png"
                alt="Neurolume Herbal Capsule packaging"
                className="w-full h-auto object-contain rounded-2xl shadow-slate-300/30 shadow-2xl border border-slate-200"
                id="hero-product-image"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
