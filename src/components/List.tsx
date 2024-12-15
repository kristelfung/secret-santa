import { AnimatePresence } from 'framer-motion'
import { ListItem } from './ListItem'

export function List({
  people,
  assignments,
  handleRemove,
}: {
  people: string[]
  assignments: Record<string, string> | null
  handleRemove: (name: string) => void
}) {
  return (
    <div className="my-4 w-full bg-zinc-900 rounded-xl">
      <AnimatePresence>
        {people.map((santa, i) => (
          <ListItem
            key={santa}
            santa={santa}
            index={i + 1}
            recipient={assignments?.[santa]}
            handleRemove={handleRemove}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}
