'use client'

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/Card'
import { GlassCard } from '@/components/ui/GlassCard'
import { Button } from '@/components/ui/Button'
import { useLanguage } from '@/app/providers/LanguageProvider'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Linkedin,
  Github,
  Twitter,
  CheckCircle
} from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: '',
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

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
            {t('contact.hero.title')} <span className="gradient-text">{t('contact.hero.titleHighlight')}</span>
          </h1>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
            {t('contact.hero.subtitle')}
          </p>
        </motion.div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-gray-50 dark:bg-dark-surface/50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">{t('contact.info.title')}</h2>
              <p className="text-light-text-secondary dark:text-dark-text-secondary mb-8">
                {t('contact.info.subtitle')}
              </p>

              <div className="space-y-6">
                <GlassCard className="flex items-start gap-4 hover:shadow-lg transition-shadow" hover={false}>
                  <div className="p-3 rounded-lg bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:your@email.com"
                      className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                    >
                      your@email.com
                    </a>
                  </div>
                </GlassCard>

                <GlassCard className="flex items-start gap-4 hover:shadow-lg transition-shadow" hover={false}>
                  <div className="p-3 rounded-lg bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+97699999999"
                      className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                    >
                      +976 9999 9999
                    </a>
                  </div>
                </GlassCard>

                <GlassCard className="flex items-start gap-4 hover:shadow-lg transition-shadow" hover={false}>
                  <div className="p-3 rounded-lg bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary">
                      Ulaanbaatar, Mongolia
                    </p>
                  </div>
                </GlassCard>

                <GlassCard className="flex items-start gap-4 hover:shadow-lg transition-shadow" hover={false}>
                  <div className="p-3 rounded-lg bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary">
                    <MessageSquare size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Social Media</h3>
                    <div className="flex gap-3 mt-2">
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                      >
                        <Linkedin size={20} />
                      </a>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-light-primary/10 dark:hover:bg-dark-primary/10 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                      >
                        <Twitter size={20} />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="mt-8 p-6 rounded-xl bg-light-primary/10 dark:bg-dark-primary/10">
                <h3 className="font-semibold mb-2">Response Time</h3>
                <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary">
                  I usually respond within 24 hours on business days. For urgent inquiries, please call directly.
                </p>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <GlassCard hover={false}>
                <h2 className="text-3xl font-bold mb-6">{t('contact.form.title')}</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 mb-4">
                      <CheckCircle size={32} />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{t('contact.form.success.title')}</h3>
                    <p className="text-light-text-secondary dark:text-dark-text-secondary">
                      {t('contact.form.success.description')}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block font-medium mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder={t('contact.form.namePlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block font-medium mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="input-field"
                        placeholder={t('contact.form.emailPlaceholder')}
                      />
                    </div>

                    <div>
                      <label htmlFor="projectType" className="block font-medium mb-2">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select a project type</option>
                        <option value="landing">Landing Page</option>
                        <option value="ecommerce">E-commerce Website</option>
                        <option value="webapp">Web Application</option>
                        <option value="fullstack">Full-Stack Development</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block font-medium mb-2">
                        Budget Range
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="input-field"
                      >
                        <option value="">Select your budget</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="5000+">$5,000+</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block font-medium mb-2">
                        {t('contact.form.message')} *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="input-field resize-none"
                        placeholder={t('contact.form.messagePlaceholder')}
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full"
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                            className="mr-2"
                          >
                            <Send size={20} />
                          </motion.div>
                          {t('contact.form.sending')}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2" size={20} /> {t('contact.form.submit')}
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            {t('contact.faq.title')}
          </h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary">
            {t('contact.faq.subtitle')}
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              q: 'How long does a typical project take?',
              a: 'Project timelines vary based on complexity. A landing page takes 1-2 weeks, while a full e-commerce site takes 4-6 weeks.',
            },
            {
              q: 'What is your pricing model?',
              a: 'Pricing depends on project scope and requirements. After our initial consultation, I provide a detailed quote with milestones.',
            },
            {
              q: 'Do you provide ongoing support?',
              a: 'Yes! All projects include a warranty period, and I offer maintenance packages for ongoing updates and support.',
            },
            {
              q: 'Can you work with my existing design?',
              a: 'Absolutely! I can work with your designs or create new ones from scratch based on your brand guidelines.',
            },
          ].map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <GlassCard hover={false}>
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary">
                  {faq.a}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-gray-200 dark:bg-gray-800 flex items-center justify-center">
        <div className="text-center">
          <MapPin size={48} className="mx-auto mb-4 text-light-primary dark:text-dark-primary" />
          <p className="text-xl font-semibold">Ulaanbaatar, Mongolia</p>
          <p className="text-light-text-secondary dark:text-dark-text-secondary">
            Map integration coming soon
          </p>
        </div>
      </section>
    </>
  )
}
