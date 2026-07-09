import { motion } from 'framer-motion';

export default function Hero() {
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
        
        {/* Subtle lines or particles can go here */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
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
              <span className="text-xs uppercase tracking-widest font-semibold text-sage-pale font-display">
                Premium Anxiolytic & Adaptogen
              </span>
            </motion.div>

            {/* Main Page SEO H1 */}
            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-display text-white leading-[1.1]"
              id="hero-title"
            >
              Restore Inner Peace. <br />
              Regulate Cortisol with <br />
              <span className="amber-glow-text">Neurolume</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-300 max-w-xl font-normal leading-relaxed"
            >
              Neurolume is a synergistic herbal formula engineered to alleviate chronic stress and nervous tension. By calming the nervous system and regulating the body’s cortisol levels, it promotes mental clarity, emotional balance, and natural relaxation.
            </motion.p>

            {/* Core Pill Features */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 max-w-lg pt-2 text-sm text-slate-200"
            >
              <div className="flex items-center space-x-2.5">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-sage/15 border border-sage/30 flex items-center justify-center text-sage">
                  ✓
                </div>
                <span>Cortisol Regulation</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-sage/15 border border-sage/30 flex items-center justify-center text-sage">
                  ✓
                </div>
                <span>5 Botanical Extracts</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-sage/15 border border-sage/30 flex items-center justify-center text-sage">
                  ✓
                </div>
                <span>Serotonin & GABA Balance</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <div className="flex-shrink-0 h-5 w-5 rounded-full bg-sage/15 border border-sage/30 flex items-center justify-center text-sage">
                  ✓
                </div>
                <span>No Prescription Required</span>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="#stress-dashboard"
                className="px-8 py-3.5 rounded-full bg-gradient-to-r from-sage to-sage-light hover:from-sunset hover:to-sunset-light text-forest-dark font-bold text-base shadow-lg shadow-sage/15 hover:shadow-sunset/15 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Assess Your Stress
              </a>
              <a
                href="#ingredients"
                className="px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-sage/30 text-white font-semibold text-base transition-all duration-300"
              >
                Explore Science
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
              <div className="absolute -inset-4 rounded-3xl border border-sage/20 bg-gradient-to-b from-sage/5 to-transparent backdrop-blur-[2px] -z-10 shadow-2xl" />
              
              <img
                src="/neurolume-package.png"
                alt="Neurolume Herbal Capsule packaging showing meditation silhouette"
                className="w-full h-auto object-contain rounded-2xl shadow-black/50 shadow-2xl border border-white/10"
                id="hero-product-image"
              />

              {/* Float Tags */}
              <div className="absolute -top-3 -right-3 px-3 py-1.5 rounded-lg bg-sunset text-forest-dark text-xs font-bold shadow-lg transform rotate-6 border border-sunset-pale/30">
                30 & 60 Capsules
              </div>
              <div className="absolute -bottom-4 -left-4 px-3.5 py-2 rounded-xl bg-forest border border-sage/30 shadow-2xl text-slate-100 flex items-center space-x-2">
                <span className="h-2 w-2 rounded-full bg-sage-light animate-ping" />
                <span className="text-[11px] font-bold tracking-wider uppercase font-display text-sage-pale">
                  100% Herbal Formula
                </span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
