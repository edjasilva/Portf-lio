import { motion } from 'framer-motion'

type Props = {
  items: string[]
  className?: string
  speedSeconds?: number
}

export function Marquee({ items, className, speedSeconds = 18 }: Props) {
  const content = items.join(' • ')
  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/60 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/60 to-transparent" />
        <motion.div
          className="flex whitespace-nowrap py-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: speedSeconds, ease: 'linear', repeat: Infinity }}
        >
          <div className="flex gap-10 px-8 text-xs font-semibold uppercase tracking-[0.28em] text-[#F9E29E]/80">
            <span>{content}</span>
            <span>{content}</span>
            <span>{content}</span>
            <span>{content}</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

