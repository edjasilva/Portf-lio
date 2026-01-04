import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useMemo, useState } from 'react'

function prefersFinePointer() {
  if (typeof window === 'undefined') return false
  return window.matchMedia?.('(pointer:fine)').matches ?? false
}

export function Cursor() {
  const enabled = useMemo(() => prefersFinePointer(), [])
  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const sx = useSpring(x, { stiffness: 900, damping: 60, mass: 0.25 })
  const sy = useSpring(y, { stiffness: 900, damping: 60, mass: 0.25 })

  const tx = useSpring(x, { stiffness: 320, damping: 40, mass: 0.8 })
  const ty = useSpring(y, { stiffness: 320, damping: 40, mass: 0.8 })

  const [mode, setMode] = useState<'default' | 'hover'>('default')

  useEffect(() => {
    if (!enabled) return

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement | null
      if (!t) return
      const hit = t.closest('a,button,[data-cursor="hover"],input,textarea')
      setMode(hit ? 'hover' : 'default')
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [enabled, x, y])

  if (!enabled) return null

  return (
    <div className="pointer-events-none fixed inset-0 z-[60]">
      {/* Trailing ring */}
      <motion.div
        style={{
          x: tx,
          y: ty,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="h-10 w-10 rounded-full"
        animate={mode === 'hover' ? { scale: 1.5, opacity: 0.22 } : { scale: 1, opacity: 0.14 }}
        transition={{ duration: 0.18 }}
      >
        <div className="h-full w-full rounded-full border border-[#F9E29E]" />
      </motion.div>

      {/* Core dot */}
      <motion.div
        style={{
          x: sx,
          y: sy,
          translateX: '-50%',
          translateY: '-50%',
        }}
        className="h-2 w-2 rounded-full bg-[#DFB969]"
        animate={mode === 'hover' ? { scale: 0.65 } : { scale: 1 }}
        transition={{ duration: 0.12 }}
      />
    </div>
  )
}

