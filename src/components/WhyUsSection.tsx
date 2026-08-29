import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Award, 
  Sparkles, 
  Clock, 
  Car, 
  Headphones, 
  CheckCircle2, 
  Star,
  Users,
  Compass
} from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';

interface WhyUsSectionProps {
  isPage?: boolean;
}

export default function WhyUsSection({ isPage = false }: WhyUsSectionProps) {
  const { t } = useLanguage();

  const points = [
    {
      icon: <Award className="w-6 h-6 text-amber-400" />,
      title: t('whyUs.privateTourTitle'),
      desc: t('whyUs.privateTourDesc')
    },
    {
      icon: <Users className="w-6 h-6 text-amber-400" />,
      title: t('whyUs.guideTitle'),
      desc: t('whyUs.guideDesc')
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-amber-400" />,
      title: t('whyUs.priceTitle'),
      desc: t('whyUs.priceDesc')
    },
    {
      icon: <Compass className="w-6 h-6 text-amber-400" />,
      title: t('whyUs.customTitle'),
      desc: t('whyUs.customDesc')
    },
    {
      icon: <Car className="w-6 h-6 text-amber-400" />,
      title: t('whyUs.fleetTitle'),
      desc: t('whyUs.fleetDesc')
    },
    {
      icon: <Headphones className="w-6 h-6 text-amber-400" />,
      title: t('whyUs.supportTitle'),
      desc: t('whyUs.supportDesc')
    }
  ];

  const stats = [
    { label: t('whyUs.expYears'), value: '15+', icon: <Clock className="w-4 h-4 text-amber-400" /> },
    { label: t('whyUs.happyGuests'), value: '50K+', icon: <Users className="w-4 h-4 text-amber-400" /> },
    { label: t('whyUs.satisfaction'), value: '4.9/5', icon: <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> },
    { label: t('whyUs.privateGuarantee'), value: '100%', icon: <CheckCircle2 className="w-4 h-4 text-amber-400" /> }
  ];

  return (
    <section
      id="why-us-section"
      className={`${
        isPage ? 'pt-28 pb-20' : 'py-16 sm:py-20 lg:py-24'
      } bg-neutral-950 text-gold-100 font-sans border-t border-neutral-800/80`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading with Decorative Line */}
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-widest uppercase mb-3"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('whyUs.badge')}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight"
          >
            {t('whyUs.title')}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-16 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 rounded-full mx-auto mt-3 sm:mt-3.5"
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-4 text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed"
          >
            {t('whyUs.subtitle')}
          </motion.p>
        </div>

        {/* 6 Key Advantage Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8" id="whyus-cards-grid">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="bg-neutral-900/70 p-6 sm:p-8 rounded-2xl border border-neutral-800 hover:border-amber-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 group flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                {/* Icon Container with subtle orange/gold glow on hover */}
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-xl w-fit transition-transform duration-300 group-hover:scale-110 group-hover:border-amber-500/50">
                  {point.icon}
                </div>

                <h3 className="font-serif text-lg sm:text-xl text-white font-bold tracking-wide group-hover:text-amber-300 transition-colors">
                  {point.title}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-sans font-light">
                  {point.desc}
                </p>
              </div>

              <div className="w-full h-[1px] bg-neutral-800 mt-6 group-hover:bg-gradient-to-r group-hover:from-amber-500/40 group-hover:via-orange-500/40 group-hover:to-transparent transition-all" />
            </motion.div>
          ))}
        </div>

        {/* Trust Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 sm:mt-16 bg-neutral-900/50 border border-neutral-800/90 rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center space-y-1">
              <div className="flex items-center gap-1.5 text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500">
                <span>{stat.value}</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs sm:text-sm text-neutral-400 font-medium">
                {stat.icon}
                <span>{stat.label}</span>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
