'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { ExternalLink, Github, Rocket } from 'lucide-react'
import { useLanguage } from '@/app/providers/LanguageProvider'
import { useState } from 'react'

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'E-commerce',
    description: 'Full-featured online store with payment integration and admin dashboard.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Stripe', 'MongoDB'],
    demoUrl: '#',
    githubUrl: '#',
    year: '2026',
    challenge: 'Build a scalable e-commerce platform that handles high traffic.',
    solution: 'Implemented server-side rendering with Next.js and optimized database queries.',
    results: ['50% faster load times', '99.9% uptime', '30% conversion increase'],
  },
  {
    id: 2,
    title: 'SaaS Dashboard',
    category: 'Web App',
    description: 'Analytics dashboard with real-time data visualization.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'D3.js', 'Node.js'],
    demoUrl: '#',
    githubUrl: '#',
    year: '2026',
    challenge: 'Display complex data in an intuitive, user-friendly interface.',
    solution: 'Created custom visualizations and implemented efficient data streaming.',
    results: ['Real-time updates', '10K+ active users', 'A+ Lighthouse score'],
  },
  {
    id: 3,
    title: 'Restaurant Website',
    category: 'Landing Page',
    description: 'Modern restaurant website with online ordering system.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Tailwind', 'Sanity CMS'],
    demoUrl: '#',
    githubUrl: '#',
    year: '2025',
    challenge: 'Create an engaging experience that drives online orders.',
    solution: 'Built with modern animations and integrated seamless ordering flow.',
    results: ['200% order increase', 'Mobile-first design', 'Sub-2s load time'],
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Landing Page',
    description: 'Creative portfolio for a photographer showcasing their work.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Framer Motion', 'Vercel'],
    demoUrl: '#',
    githubUrl: '#',
    year: '2025',
    challenge: 'Showcase high-quality images without sacrificing performance.',
    solution: 'Implemented progressive image loading and lazy loading strategies.',
    results: ['95+ Lighthouse score', 'Award-winning design', '5x engagement'],
  },
  {
    id: 5,
    title: 'Booking System',
    category: 'Web App',
    description: 'Appointment booking system for healthcare providers.',
    image: '/api/placeholder/600/400',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    demoUrl: '#',
    githubUrl: '#',
    year: '2025',
    challenge: 'Handle complex scheduling with multiple providers and locations.',
    solution: 'Built robust backend with conflict detection and email notifications.',
    results: ['1000+ bookings/day', 'Zero double-bookings', 'HIPAA compliant'],
  },
  {
    id: 6,
    title: 'Social Media App',
    category: 'Web App',
    description: 'Community platform with real-time chat and posts.',
    image: '/api/placeholder/600/400',
    tags: ['Next.js', 'Socket.io', 'Redis'],
    demoUrl: '#',
    githubUrl: '#',
    year: '2024',
    challenge: 'Enable real-time interactions for thousands of concurrent users.',
    solution: 'Implemented WebSocket connections with Redis for horizontal scaling.',
    results: ['50K+ users', 'Real-time messaging', 'High engagement'],
  },
]

export default function Portfolio() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null)

  const categories = [
    { key: 'all', label: t('portfolio.filter.all') },
    { key: 'ecommerce', label: t('portfolio.filter.ecommerce') },
    { key: 'webapp', label: t('portfolio.filter.webapp') },
    { key: 'landing', label: t('portfolio.filter.landing') },
  ]

  const categoryMap: { [key: string]: string } = {
    'ecommerce': 'E-commerce',
    'webapp': 'Web App',
    'landing': 'Landing Page',
  }

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === categoryMap[selectedCategory])

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
            {t('portfolio.hero.title')} <span className="gradient-text">{t('portfolio.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
            {t('portfolio.hero.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="container-custom mb-12">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((category) => (
            <Button
              key={category.key}
              variant={selectedCategory === category.key ? 'primary' : 'secondary'}
              onClick={() => setSelectedCategory(category.key)}
            >
              {category.label}
            </Button>
          ))}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section-padding bg-gray-50 dark:bg-dark-surface/50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <GlassCard className="h-full flex flex-col group cursor-pointer" onClick={() => setSelectedProject(project)}>
                  {/* Image Placeholder */}
                  <div className="relative w-full h-48 mb-4 bg-gradient-to-br from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-lg font-semibold">
                      {project.title}
                    </div>
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity" />
                  </div>

                  <div className="flex-1 flex flex-col">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-light-accent dark:text-dark-accent font-medium">
                        {project.category}
                      </span>
                      <span className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                        {project.year}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-4 flex-1">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs rounded-full bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="secondary" size="sm" className="flex-1">
                        <ExternalLink size={16} className="mr-2" /> Demo
                      </Button>
                      <Button variant="ghost" size="sm" className="flex-1">
                        <Github size={16} className="mr-2" /> Code
                      </Button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            className="bg-light-surface dark:bg-dark-surface rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-bold mb-2">{selectedProject.title}</h2>
                  <p className="text-light-accent dark:text-dark-accent">{selectedProject.category} • {selectedProject.year}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-2xl hover:text-light-primary dark:hover:text-dark-primary"
                >
                  ×
                </button>
              </div>

              {/* Image Placeholder */}
              <div className="w-full h-64 mb-6 bg-gradient-to-br from-light-primary to-light-accent dark:from-dark-primary dark:to-dark-accent rounded-lg flex items-center justify-center text-white text-xl font-semibold">
                {selectedProject.title}
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2">Challenge</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Solution</h3>
                  <p className="text-light-text-secondary dark:text-dark-text-secondary">
                    {selectedProject.solution}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Results</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, i) => (
                      <li key={i} className="flex items-center text-light-text-secondary dark:text-dark-text-secondary">
                        <span className="w-2 h-2 rounded-full bg-light-accent dark:bg-dark-accent mr-3" />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 rounded-full bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button className="flex-1">
                    <ExternalLink size={20} className="mr-2" /> View Live Demo
                  </Button>
                  <Button variant="secondary" className="flex-1">
                    <Github size={20} className="mr-2" /> View Code
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* CTA Section */}
      <section className="relative section-padding overflow-hidden bg-gradient-to-br from-gray-900 via-pink-900 to-gray-900">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
                <Rocket size={16} className="text-pink-400" />
                <span className="text-sm font-medium">Join Our Success Stories</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl font-display font-bold mb-6 text-white"
              >
                Want Your Project{' '}
                <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Here?
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-10 text-white/80 max-w-2xl mx-auto"
              >
                Let&apos;s create something amazing together and add your success to our portfolio
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(230, 0, 118, 0.6)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-light-accent to-light-primary rounded-xl font-semibold text-white shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
                >
                  Start Your Project <Rocket size={20} />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl font-semibold text-white hover:bg-white/20 transition-all duration-300 flex items-center gap-2"
                >
                  Schedule Call
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
                  { value: '60+', label: 'Completed' },
                  { value: '100%', label: 'Satisfaction' },
                  { value: '50+', label: 'Happy Clients' },
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
