'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export function AnimatedOrb() {
  const orbRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!orbRef.current) return

      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window

      const x = (clientX / innerWidth - 0.5) * 20
      const y = (clientY / innerHeight - 0.5) * 20

      orbRef.current.style.transform = `translate(${x}px, ${y}px)`
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Main animated orb */}
      <motion.div
        ref={orbRef}
        className="relative w-96 h-96"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl animate-pulse" />

        {/* Middle layer */}
        <motion.div
          className="absolute inset-8 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          style={{
            filter: 'blur(2px)',
          }}
        />

        {/* Inner orb with glassmorphism */}
        <motion.div
          className="absolute inset-12 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {/* Shine effect */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              animate={{
                x: ['-100%', '100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'linear',
              }}
            />
          </div>
        </motion.div>

        {/* Floating particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-white/40"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [0, Math.cos(i * 45 * Math.PI / 180) * 150],
              y: [0, Math.sin(i * 45 * Math.PI / 180) * 150],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: 'easeInOut',
            }}
          />
        ))}

        {/* Rotating rings */}
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-blue-400/30"
          animate={{ rotate: -360 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border-2 border-purple-400/30"
          animate={{ rotate: 360 }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </motion.div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
    </div>
  )
}
