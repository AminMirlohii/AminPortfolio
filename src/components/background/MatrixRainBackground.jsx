import { useEffect, useRef } from 'react'

const CHARSET = '01'
const FONT_SIZE = 15
const TRAIL_ALPHA = 0.09

function createColumns(width) {
  const count = Math.ceil(width / FONT_SIZE)
  return Array.from({ length: count }, () => ({
    y: Math.random() * -100,
    speed: Math.random() * 0.6 + 0.4,
  }))
}

export default function MatrixRainBackground() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    let animationId
    let columns = []
    let width = 0
    let height = 0

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      columns = createColumns(width)
    }

    const drawStatic = () => {
      ctx.fillStyle = '#0a0a0f'
      ctx.fillRect(0, 0, width, height)
      ctx.font = `${FONT_SIZE}px "JetBrains Mono", ui-monospace, monospace`
      ctx.textAlign = 'center'

      for (let i = 0; i < columns.length; i++) {
        const x = i * FONT_SIZE + FONT_SIZE / 2
        const y = Math.random() * height
        ctx.fillStyle = `rgba(37, 99, 235, ${0.06 + Math.random() * 0.1})`
        ctx.fillText(CHARSET[Math.floor(Math.random() * 2)], x, y)
      }
    }

    const draw = () => {
      ctx.fillStyle = `rgba(7, 12, 26, ${TRAIL_ALPHA})`
      ctx.fillRect(0, 0, width, height)

      ctx.font = `${FONT_SIZE}px "JetBrains Mono", ui-monospace, monospace`
      ctx.textAlign = 'center'

      for (let i = 0; i < columns.length; i++) {
        const column = columns[i]
        const x = i * FONT_SIZE + FONT_SIZE / 2
        const char = CHARSET[Math.floor(Math.random() * 2)]

        const isHead = Math.random() > 0.965
        ctx.fillStyle = isHead
          ? 'rgba(147, 197, 253, 0.82)'
          : `rgba(29, 78, 216, ${0.1 + Math.random() * 0.24})`

        ctx.fillText(char, x, column.y)

        column.y += FONT_SIZE * column.speed

        if (column.y > height + FONT_SIZE * 4) {
          if (Math.random() > 0.975) {
            column.y = Math.random() * -height * 0.2
            column.speed = Math.random() * 0.6 + 0.4
          }
        }
      }

      animationId = requestAnimationFrame(draw)
    }

    resize()

    if (prefersReducedMotion) {
      drawStatic()
    } else {
      ctx.fillStyle = '#0a0a0f'
      ctx.fillRect(0, 0, width, height)
      draw()
    }

    window.addEventListener('resize', resize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden
    />
  )
}
