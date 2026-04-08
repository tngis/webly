'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

export function Card({ children, className, hover = true, onClick }: CardProps) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={hover ? {
        y: -8,
        boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
      } : undefined}
      transition={{ duration: 0.3 }}
      className={cn(
        'card',
        hover && 'card-hover',
        className
      )}
    >
      {children}
    </motion.div>
  )
}
