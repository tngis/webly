'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function GlassCard({ children, className, hover = true, onClick }: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? {
        y: -8,
        scale: 1.02,
        transition: { duration: 0.3, ease: 'easeOut' }
      } : undefined}
      onClick={onClick}
      className={cn(
        'relative group',
        'bg-white/10 dark:bg-white/5',
        'backdrop-blur-md',
        'border border-black/10 dark:border-white/10',
        'rounded-3xl p-8',
        'shadow-2xl',
        'hover:shadow-[0_20px_60px_-15px_rgba(59,130,246,0.3)]',
        'transition-all duration-500',
        'overflow-hidden',
        className
      )}
    >
      {/* Animated gradient border */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-[-2px] rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-75 blur-sm" />
        <div className="absolute inset-[2px] rounded-3xl bg-white dark:bg-gray-900" />
      </div>

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
        <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  )
}
