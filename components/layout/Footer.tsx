'use client'

import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-dark-surface border-t border-gray-200 dark:border-gray-800">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-bold gradient-text mb-4">
              Portfolio
            </div>
            <p className="text-light-text-secondary dark:text-dark-text-secondary mb-4">
              Building fast, modern, and beautiful websites for 4+ years.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:your@email.com"
                className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Services', 'Portfolio', 'About', 'Contact'].map(item => (
                <li key={item}>
                  <Link
                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-light-text-secondary dark:text-dark-text-secondary hover:text-light-primary dark:hover:text-dark-primary transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-light-text-secondary dark:text-dark-text-secondary">
              <li>Landing Pages</li>
              <li>E-commerce</li>
              <li>Custom Apps</li>
              <li>Full-stack Dev</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-light-text-secondary dark:text-dark-text-secondary">
          <p>© {new Date().getFullYear()} Portfolio. Made with Next.js & ❤️</p>
        </div>
      </div>
    </footer>
  )
}
