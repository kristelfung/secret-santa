import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Header() {
  const santaEmojis = ['🎅', '🎅🏻', '🎅🏼', '🎅🏽', '🎅🏾', '🎅🏿']
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % santaEmojis.length)
    }, 500)
    return () => clearInterval(timer)
  }, [])

  return (
    <Link to="/">
      <div className="text-center relative h-36 text-9xl m-4">
        <div key={`current-${currentIndex}`} className="absolute inset-0">
          {santaEmojis[currentIndex]}
        </div>
        <AnimatePresence>
          <motion.div
            key={`next-${currentIndex}`}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {santaEmojis[(currentIndex + 1) % santaEmojis.length]}
          </motion.div>
        </AnimatePresence>
      </div>
    </Link>
  )
}
