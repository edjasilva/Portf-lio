import { useEffect, useRef } from 'react'

type Dot = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
  a: number
}

export function Backdrop() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouse = useRef({ x: 0, y: 0, has: false })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let raf = 0
    const dots: Dot[] = []

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1)
      const { innerWidth: w, innerHeight: h } = window
      canvas.width = Math.floor(w * dpr)
      canvas.height = Math.floor(h * dpr)
      canvas.style.width = `${w}px`
      canvas.style.height = `${h}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      dots.length = 0
      const count = Math.min(140, Math.floor((w * h) / 14000))
      for (let i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          r: 0.8 + Math.random() * 1.6,
          a: 0.18 + Math.random() * 0.28,
        })
      }
    }

    const step = () => {
      const w = window.innerWidth
      const h = window.innerHeight

      ctx.clearRect(0, 0, w, h)

      // Background glow
      const g = ctx.createRadialGradient(w * 0.65, h * 0.3, 0, w * 0.65, h * 0.3, Math.max(w, h) * 0.75)
      g.addColorStop(0, 'rgba(124, 92, 255, 0.18)')
      g.addColorStop(0.5, 'rgba(0, 214, 255, 0.06)')
      g.addColorStop(1, 'rgba(0, 0, 0, 0)')
      ctx.fillStyle = g
      ctx.fillRect(0, 0, w, h)

      const mx = mouse.current.x
      const my = mouse.current.y

      // Lines + dots
      for (let i = 0; i < dots.length; i++) {
        const a = dots[i]
        a.x += a.vx
        a.y += a.vy
        if (a.x < -20) a.x = w + 20
        if (a.x > w + 20) a.x = -20
        if (a.y < -20) a.y = h + 20
        if (a.y > h + 20) a.y = -20

        // mild mouse repulsion
        if (mouse.current.has) {
          const dx = a.x - mx
          const dy = a.y - my
          const d2 = dx * dx + dy * dy
          if (d2 < 240 * 240) {
            const f = 0.0009
            a.vx += dx * f
            a.vy += dy * f
          }
        }

        a.vx *= 0.985
        a.vy *= 0.985
        a.vx = Math.max(-0.8, Math.min(0.8, a.vx))
        a.vy = Math.max(-0.8, Math.min(0.8, a.vy))

        for (let j = i + 1; j < dots.length; j++) {
          const b = dots[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d2 = dx * dx + dy * dy
          if (d2 < 130 * 130) {
            const t = 1 - d2 / (130 * 130)
            ctx.strokeStyle = `rgba(255,255,255,${0.09 * t})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }

      for (const d of dots) {
        ctx.fillStyle = `rgba(255,255,255,${d.a})`
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }

      raf = window.requestAnimationFrame(step)
    }

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY, has: true }
    }
    const onLeave = () => {
      mouse.current.has = false
    }

    resize()
    raf = window.requestAnimationFrame(step)
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
      window.cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full"
    />
  )
}

