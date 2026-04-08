'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { GlassCard } from '@/components/ui/GlassCard'
import { useLanguage } from '@/app/providers/LanguageProvider'
import {
  Code,
  Smartphone,
  Zap,
  ShoppingCart,
  CheckCircle,
  Clock,
  DollarSign,
  ArrowRight
} from 'lucide-react'

export default function Services() {
  const { t } = useLanguage()

  const services = [
  {
    id: 'landing',
    icon: <Code size={48} />,
    title: t('services.landing.title'),
    subtitle: t('services.landing.subtitle'),
    description: t('services.landing.description'),
    features: [
      t('services.landing.features.responsive'),
      t('services.landing.features.seo'),
      t('services.landing.features.contact'),
      t('services.landing.features.social'),
      t('services.landing.features.fast'),
      t('services.landing.features.mobile'),
    ],
    pricing: t('services.landing.pricing'),
    timeline: t('services.landing.timeline'),
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'ecommerce',
    icon: <ShoppingCart size={48} />,
    title: t('services.ecommerce.title'),
    subtitle: t('services.ecommerce.subtitle'),
    description: t('services.ecommerce.description'),
    features: [
      t('services.ecommerce.features.catalog'),
      t('services.ecommerce.features.cart'),
      t('services.ecommerce.features.payment'),
      t('services.ecommerce.features.orders'),
      t('services.ecommerce.features.admin'),
      t('services.ecommerce.features.accounts'),
    ],
    pricing: t('services.ecommerce.pricing'),
    timeline: t('services.ecommerce.timeline'),
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'custom',
    icon: <Zap size={48} />,
    title: t('services.custom.title'),
    subtitle: t('services.custom.subtitle'),
    description: t('services.custom.description'),
    features: [
      t('services.custom.features.functionality'),
      t('services.custom.features.database'),
      t('services.custom.features.api'),
      t('services.custom.features.auth'),
      t('services.custom.features.access'),
      t('services.custom.features.integrations'),
    ],
    pricing: t('services.custom.pricing'),
    timeline: t('services.custom.timeline'),
    color: 'from-green-500 to-emerald-500',
  },
  {
    id: 'fullstack',
    icon: <Smartphone size={48} />,
    title: t('services.fullstack.title'),
    subtitle: t('services.fullstack.subtitle'),
    description: t('services.fullstack.description'),
    features: [
      t('services.fullstack.features.frontend'),
      t('services.fullstack.features.backend'),
      t('services.fullstack.features.database'),
      t('services.fullstack.features.cloud'),
      t('services.fullstack.features.devops'),
      t('services.fullstack.features.maintenance'),
    ],
    pricing: t('services.fullstack.pricing'),
    timeline: t('services.fullstack.timeline'),
    color: 'from-orange-500 to-red-500',
  },
]

  const technologies = [
    { name: 'React', category: 'Frontend' },
    { name: 'Next.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Language' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Vercel', category: 'Cloud' },
    { name: 'Git', category: 'Tools' },
    { name: 'Docker', category: 'DevOps' },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
            {t('services.hero.title')} <span className="gradient-text">{t('services.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
            {t('services.hero.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50 dark:bg-dark-surface/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard className="h-full flex flex-col">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-6 shadow-lg`}>
                    {service.icon}
                  </div>

                  <h3 className="text-3xl font-bold mb-2">{service.title}</h3>
                  <p className="text-light-accent dark:text-dark-accent font-medium mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-light-text-secondary dark:text-dark-text-secondary mb-6">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">{t('services.included')}</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start text-sm">
                          <CheckCircle size={16} className="mr-2 mt-0.5 text-light-accent dark:text-dark-accent flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        <DollarSign size={16} className="mr-1" />
                        <span className="font-semibold text-light-text dark:text-dark-text">
                          {service.pricing}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        <Clock size={16} className="mr-1" />
                        <span>{service.timeline}</span>
                      </div>
                    </div>
                    <Button className="w-full flex items-center justify-center" size="lg">
                      {t('services.landing.cta')} <ArrowRight className="ml-2" size={20} />
                    </Button>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('services.techStack.title')}
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
            {t('services.techStack.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="font-semibold mb-1">{tech.name}</div>
                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {tech.category}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              {t('services.process.title')}
            </h2>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
              {t('services.process.subtitle')}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: t('services.process.discovery.step'),
                title: t('services.process.discovery.title'),
                description: t('services.process.discovery.description'),
              },
              {
                step: t('services.process.design.step'),
                title: t('services.process.design.title'),
                description: t('services.process.design.description'),
              },
              {
                step: t('services.process.development.step'),
                title: t('services.process.development.title'),
                description: t('services.process.development.description'),
              },
              {
                step: t('services.process.launch.step'),
                title: t('services.process.launch.title'),
                description: t('services.process.launch.description'),
              },
            ].map((phase, index) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <GlassCard hover={false}>
                  <div className="text-5xl font-bold gradient-text mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{phase.title}</h3>
                  <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                    {phase.description}
                  </p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-light-primary rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-light-accent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }} />

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glass card container */}
            <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-12 md:p-16 shadow-2xl">
              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-8 backdrop-blur-xl"
              >
                <Zap size={16} className="text-yellow-400" />
                <span className="text-sm font-medium">Let&apos;s Build Something Great</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
              >
                Ready to Get{' '}
                <span className="bg-gradient-to-r from-yellow-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                  Started?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-10 text-white/80 max-w-2xl mx-auto"
              >
                Let&apos;s discuss your project and find the perfect solution for your business
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(152, 16, 250, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-light-primary to-light-accent rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  Contact Us <ArrowRight size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  View Pricing
                </motion.button>
              </motion.div>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
              >
                {[
                  { value: '50+', label: 'Projects' },
                  { value: '4+', label: 'Years' },
                  { value: '24/7', label: 'Support' },
                ].map((stat, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/60">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
