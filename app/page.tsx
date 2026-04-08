'use client'

import { motion } from 'framer-motion'
import { MagneticButton } from '@/components/effects/MagneticButton'
import { ParticleField } from '@/components/effects/ParticleField'
import { GlassCard } from '@/components/ui/GlassCard'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { AnimatedOrb } from '@/components/3d/AnimatedOrb'
import { ArrowRight, Code, Smartphone, Zap, CheckCircle, Sparkles, Rocket, Star } from 'lucide-react'
import { useLanguage } from '@/app/providers/LanguageProvider'

export default function Home() {
  const { t } = useLanguage()
  return (
    <>
      {/* Particle Background */}
      <ParticleField />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="container-custom py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
              >
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {t('home.hero.badge')}
                </span>
              </motion.div>

              <h1 className="text-6xl lg:text-8xl font-bold mb-6 leading-[1.1]">
                <span className="block text-gray-900 dark:text-white">{t('home.hero.title')}</span>
                <span className="gradient-text">{t('home.hero.titleHighlight')}</span>
              </h1>

              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                {t('home.hero.subtitle')}
              </p>

              <div className="flex flex-wrap gap-4">
                <MagneticButton>
                  {t('home.hero.cta')} <ArrowRight className="ml-2" size={20} />
                </MagneticButton>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 rounded-2xl border-2 border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors font-semibold"
                >
                  {t('home.hero.secondary')}
                </motion.button>
              </div>

              {/* Social Proof */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex items-center gap-8"
              >
                <div>
                  <div className="flex items-center gap-1 mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    50+ Five Star Reviews
                  </p>
                </div>
                <div className="h-12 w-px bg-gray-300 dark:bg-gray-700" />
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">4+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative h-[600px]"
            >
              <AnimatedOrb />

              {/* Floating badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute top-20 left-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">Fast Delivery</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">2-4 weeks</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute bottom-20 right-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-4 shadow-2xl border border-gray-200 dark:border-gray-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">100% Satisfied</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">50+ clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '50+', label: t('home.stats.projects'), icon: Rocket },
              { value: '100%', label: t('home.stats.satisfaction'), icon: Star },
              { value: '4+', label: t('home.stats.experience'), icon: Sparkles },
              { value: '<24h', label: 'Response Time', icon: Zap },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <GlassCard className="text-center p-8" hover={false}>
                  {/* <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-500" /> */}
                  <div className="text-5xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-32 relative">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-purple-500" />
              <span className="text-sm font-medium text-purple-600 dark:text-purple-400">
                {t('home.services.badge')}
              </span>
            </motion.div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              {t('home.services.title')} <span className="gradient-text">{t('home.services.titleHighlight')}</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              {t('home.services.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code size={40} />,
                title: t('home.services.landing.title'),
                description: t('home.services.landing.description'),
                cta: t('home.services.landing.cta'),
                color: 'from-blue-500 to-cyan-500'
              },
              {
                icon: <Smartphone size={40} />,
                title: t('home.services.ecommerce.title'),
                description: t('home.services.ecommerce.description'),
                cta: t('home.services.ecommerce.cta'),
                color: 'from-purple-500 to-pink-500'
              },
              {
                icon: <Zap size={40} />,
                title: t('home.services.custom.title'),
                description: t('home.services.custom.description'),
                cta: t('home.services.custom.cta'),
                color: 'from-orange-500 to-red-500'
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <SpotlightCard className="h-full p-8">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
                  >
                    {service.cta}
                  </motion.button>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container-custom">
          <GlassCard className="text-center py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                {t('home.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
                {t('home.cta.subtitle')}
              </p>
              <MagneticButton className="text-lg">
                {t('home.cta.button')} <ArrowRight className="ml-2" size={24} />
              </MagneticButton>
            </motion.div>
          </GlassCard>
        </div>
      </section>
    </>
  )
}
