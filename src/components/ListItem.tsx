import { useState } from 'react'
import { encryptString } from '../utils/encryption'
import { motion } from 'framer-motion'

const COPY_TIMEOUT = 500

export function ListItem({
  santa,
  index,
  recipient,
  handleRemove,
}: {
  santa: string
  index: number
  recipient: string | undefined
  handleRemove: (name: string) => void
}) {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopyLink = (): void => {
    if (!recipient) return
    const encryptedName = encryptString(recipient)
    const encodedName = encodeURIComponent(encryptedName)
    const url = `${window.location.origin}/reveal?santa=${santa}&recipient=${encodedName}`
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, COPY_TIMEOUT)
  }

  return (
    <motion.div
      className="flex p-5 justify-between"
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      transition={{ duration: 0.1 }}
    >
      <p>
        <span className="mr-2 -ml-1 w-6 h-6 rounded-full inline-block bg-zinc-600">
          {index}
        </span>
        {santa}
      </p>
      {recipient && (
        <button className="text-sky-300" onClick={() => handleCopyLink()}>
          {copied ? 'copied' : 'copy link'}
        </button>
      )}
      {!recipient && (
        <button className="text-red-300" onClick={() => handleRemove(santa)}>
          remove
        </button>
      )}
    </motion.div>
  )
}
