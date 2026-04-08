'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { ReactNode, useRef, MouseEvent } from 'react'
import { cn } from '@/lib/utils'

interface SpotlightCardProps {
  children: ReactNode
  className?: string
  spotlight?: boolean
}

export function SpotlightCard({ children, className, spotlight = true }: SpotlightCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), {
    stiffness: 300,
    damping: 30,
  })
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), {
    stiffness: 300,
    damping: 30,
  })

  // Transform for spotlight position
  const spotlightX = useTransform(mouseX, [-0.5, 0.5], [0, 100])
  const spotlightY = useTransform(mouseY, [-0.5, 0.5], [0, 100])
  const spotlightBackground = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(600px circle at ${x}% ${y}%, rgba(59, 130, 246, 0.15), transparent 40%)`
  )

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseXPos = e.clientX - rect.left
    const mouseYPos = e.clientY - rect.top
    const xPct = mouseXPos / width - 0.5
    const yPct = mouseYPos / height - 0.5

    mouseX.set(xPct)
    mouseY.set(yPct)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      className={cn(
        'group relative rounded-2xl',
        'bg-white/10 dark:bg-gray-900/20',
        'backdrop-blur-md',
        'border border-gray-300/50 dark:border-gray-700/50',
        'shadow-xl hover:shadow-2xl',
        'transition-shadow duration-300',
        'overflow-hidden',
        className
      )}
    >
      {/* Spotlight effect */}
      {spotlight && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: spotlightBackground,
          }}
        />
      )}

      {/* Gradient border */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 blur-xl" />
      </div>

      {/* Content */}
      <div
        className="relative z-10"
        style={{ transform: 'translateZ(50px)' }}
      >
        {children}
      </div>
    </motion.div>
  )
}
