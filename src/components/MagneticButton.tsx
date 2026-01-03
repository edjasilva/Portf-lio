import { useMemo, useRef } from 'react'

type Props = {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  strength?: number
  target?: string
  rel?: string
}

export function MagneticButton({
  href,
  onClick,
  children,
  className,
  strength = 18,
  target,
  rel,
}: Props) {
  const linkRef = useRef<HTMLAnchorElement | null>(null)
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const isLink = useMemo(() => Boolean(href), [href])

  if (isLink) {
    return (
      <a
        ref={linkRef}
        href={href}
        target={target}
        rel={rel}
        className={className}
        onMouseMove={(e: React.MouseEvent) => {
          const el = linkRef.current
          if (!el) return
          const r = el.getBoundingClientRect()
          const x = e.clientX - (r.left + r.width / 2)
          const y = e.clientY - (r.top + r.height / 2)
          el.style.transform = `translate3d(${(x / r.width) * strength}px, ${(y / r.height) * strength}px, 0)`
        }}
        onMouseLeave={() => {
          const el = linkRef.current
          if (!el) return
          el.style.transform = 'translate3d(0,0,0)'
        }}
        style={{ willChange: 'transform', transition: 'transform 180ms cubic-bezier(.22,1,.36,1)' }}
      >
        {children}
      </a>
    )
  }

  return (
    <button
      ref={buttonRef}
      type="button"
      onClick={onClick}
      className={className}
      onMouseMove={(e: React.MouseEvent) => {
        const el = buttonRef.current
        if (!el) return
        const r = el.getBoundingClientRect()
        const x = e.clientX - (r.left + r.width / 2)
        const y = e.clientY - (r.top + r.height / 2)
        el.style.transform = `translate3d(${(x / r.width) * strength}px, ${(y / r.height) * strength}px, 0)`
      }}
      onMouseLeave={() => {
        const el = buttonRef.current
        if (!el) return
        el.style.transform = 'translate3d(0,0,0)'
      }}
      style={{ willChange: 'transform', transition: 'transform 180ms cubic-bezier(.22,1,.36,1)' }}
    >
      {children}
    </button>
  )
}

