'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/app/providers/LanguageProvider'
import {
  Code,
  Palette,
  Rocket,
  Users,
  Award,
  Coffee,
  Heart,
  Zap,
  Target,
  Lightbulb
} from 'lucide-react'

const skills = [
  { name: 'React / Next.js', level: 95, category: 'Frontend' },
  { name: 'TypeScript', level: 90, category: 'Language' },
  { name: 'Tailwind CSS', level: 95, category: 'Styling' },
  { name: 'Node.js', level: 85, category: 'Backend' },
  { name: 'MongoDB', level: 80, category: 'Database' },
  { name: 'PostgreSQL', level: 75, category: 'Database' },
  { name: 'UI/UX Design', level: 85, category: 'Design' },
  { name: 'Figma', level: 80, category: 'Design' },
]

const timeline = [
  {
    year: '2022',
    title: 'Started Freelancing',
    description: 'Began taking on web development projects for local businesses',
  },
  {
    year: '2023',
    title: 'Expanded Services',
    description: 'Grew to offer full-stack development and e-commerce solutions',
  },
  {
    year: '2024',
    title: 'Major Milestones',
    description: 'Completed 30+ projects, launched SaaS products',
  },
  {
    year: '2025',
    title: 'Agency Growth',
    description: 'Scaled operations and added specialized services',
  },
  {
    year: '2026',
    title: 'Current',
    description: '50+ successful projects delivered, continuous innovation',
  },
]

const values = [
  {
    icon: <Target size={32} />,
    title: 'Client-First Approach',
    description: 'Your success is our success. We prioritize understanding your goals and delivering solutions that work.',
  },
  {
    icon: <Code size={32} />,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable code that stands the test of time and is easy to extend.',
  },
  {
    icon: <Lightbulb size={32} />,
    title: 'Continuous Learning',
    description: 'Staying updated with the latest technologies and best practices to deliver modern solutions.',
  },
  {
    icon: <Heart size={32} />,
    title: 'Attention to Detail',
    description: 'Every pixel, every interaction matters. We sweat the small stuff so you don&apos;t have to.',
  },
]

export default function About() {
  const { t } = useLanguage()

  return (
    <>
      {/* Hero Section */}
      <section className="section-padding container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-display font-bold mb-6">
              {t('about.hero.greeting')} <span className="gradient-text">{t('about.hero.name')}</span>
            </h1>
            <p className="text-2xl text-light-text-secondary dark:text-dark-text-secondary mb-6">
              {t('about.hero.role')}
            </p>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-8">
              {t('about.hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">{t('about.hero.downloadCV')}</Button>
              <Button variant="secondary" size="lg">{t('about.hero.contactMe')}</Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Photo Placeholder */}
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent flex items-center justify-center text-white text-6xl font-bold">
              YN
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gray-50 dark:bg-dark-surface/50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { icon: <Award size={32} />, value: '4+', label: 'Years Experience' },
              { icon: <Users size={32} />, value: '50+', label: 'Happy Clients' },
              { icon: <Rocket size={32} />, value: '60+', label: 'Projects Completed' },
              { icon: <Coffee size={32} />, value: '1000+', label: 'Cups of Coffee' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-center mb-4 text-light-primary dark:text-dark-primary">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
            Technologies and tools I work with daily
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-light-text-secondary dark:text-dark-text-secondary">
                  {skill.level}%
                </span>
              </div>
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="h-full bg-gradient-to-r from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50 dark:bg-dark-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              My Journey
            </h2>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
              From beginner to professional developer
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-light-primary dark:bg-dark-primary" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-light-primary dark:bg-dark-primary border-4 border-light-bg dark:border-dark-bg transform -translate-x-1/2" />

                  <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <GlassCard className="ml-16 md:ml-0" hover={false}>
                      <div className="text-2xl font-bold gradient-text mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-light-text-secondary dark:text-dark-text-secondary">
                        {item.description}
                      </p>
                    </GlassCard>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What I Believe In
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
            Core principles that guide my work
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard>
                <div className="text-light-primary dark:text-dark-primary mb-4">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                  {value.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="section-padding bg-gray-50 dark:bg-dark-surface/50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Tools I Use
            </h2>
            <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
              My everyday development toolkit
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'VS Code', icon: <Code /> },
              { name: 'Figma', icon: <Palette /> },
              { name: 'Git', icon: <Zap /> },
              { name: 'React', icon: <Code /> },
              { name: 'Next.js', icon: <Rocket /> },
              { name: 'Tailwind', icon: <Palette /> },
            ].map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="relative overflow-hidden bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-2xl p-6 text-center cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex justify-center mb-3 text-light-primary dark:text-dark-primary">
                    {tool.icon}
                  </div>
                  <div className="font-semibold">{tool.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                <Users size={16} className="text-blue-400" />
                <span className="text-sm font-medium">Available for New Projects</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
              >
                Let&apos;s Work{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Together
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-10 text-white/80 max-w-2xl mx-auto"
              >
                Have a project in mind? I&apos;d love to hear about it and help bring your vision to life
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
                  Get in Touch <Users size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  Download CV
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
                  { value: '4+', label: 'Years Exp' },
                  { value: '50+', label: 'Clients' },
                  { value: '60+', label: 'Projects' },
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
