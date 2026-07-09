import { useTranslation } from 'react-i18next';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#010906] border-t border-sage/10 py-16 relative overflow-hidden z-10 text-slate-400">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-glow-sage filter blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-sage to-sunset flex items-center justify-center">
                <span className="text-forest-dark font-bold text-base">N</span>
              </div>
              <span className="text-lg font-bold tracking-wider font-display text-white">
                NEUROLUME
              </span>
            </div>
            <p className="text-xs leading-relaxed max-w-sm">
              {t('footer.desc')}
            </p>
            <p className="text-[10px] text-slate-500">
              © {new Date().getFullYear()} Isshaan Healthcare Pvt Ltd. All rights reserved.
            </p>
          </div>

          {/* Manufacturer Panel */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white font-display">
              {t('footer.manufacturedBy')}
            </h4>
            <div className="text-xs space-y-1">
              <p className="font-bold text-slate-300">Surya Herbal Limited</p>
              <p>C-33, Noida Rd, D Block, Sector 59,</p>
              <p>Noida, Uttar Pradesh 201301</p>
              <p className="text-slate-500 italic">ISO 22000 & GMP Certified Facility</p>
            </div>
          </div>

          {/* Marketer Panel */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-white font-display">
              {t('footer.marketedBy')}
            </h4>
            <div className="text-xs space-y-1">
              <p className="font-bold text-slate-300">Isshaan Healthcare Pvt Ltd</p>
              <p>510, 5th Floor, S G Shopping Mall, DC Chowk,</p>
              <p>Sector-9, Rohini, Delhi, India.</p>
              <p>Email: info@isshaan.com</p>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer */}
        <div className="pt-8 border-t border-white/5 space-y-4">
          <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-[10px] sm:text-xs leading-relaxed text-slate-500">
            <strong className="text-slate-400">{t('footer.disclaimerTitle')}</strong> {t('footer.disclaimer')}
          </div>
          
          <div className="flex flex-wrap justify-between items-center text-[10px] text-slate-600 gap-4">
            <div className="flex space-x-4">
              <a href="#overview" className="hover:text-sage transition-colors">{t('footer.privacyPolicy')}</a>
              <span>•</span>
              <a href="#overview" className="hover:text-sage transition-colors">{t('footer.termsOfService')}</a>
              <span>•</span>
              <a href="#overview" className="hover:text-sage transition-colors">{t('footer.pharmacovigilance')}</a>
            </div>
            <div>
              {t('footer.designedBy')}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
