import { FormEvent, useState } from 'react'

export function Input({
  people,
  setPeople,
  setAssignments,
  setError,
}: {
  people: string[]
  setAssignments: (value: Record<string, string> | null) => void
  setPeople: (value: string[]) => void
  setError: (value: string | null) => void
}) {
  const [input, setInput] = useState<string>('')

  const handleAdd = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    const trimmedName = input.trim()
    if (!trimmedName) return
    if (people.includes(trimmedName)) {
      setError(`${trimmedName} is already in the list!`)
      setInput('')
      return
    }
    setPeople([...people, trimmedName])
    setAssignments(null)
    setError(null)
    setInput('')
  }

  const handlePaste = (e: React.ClipboardEvent): void => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text')
    const newPastedPeople = pastedData
      .split(/[\n ]/)
      .map((n) => n.trim())
      .filter((n) => n !== '')
    const newPeople = [...people, ...newPastedPeople]

    const namesSet = new Set()
    const hasDuplicate = newPeople.some((person) => {
      if (namesSet.has(person)) {
        setError(`${person} is already in the list!`)
        setInput('')
        return true
      }
      namesSet.add(person)
    })
    if (hasDuplicate) return

    setPeople([...newPeople])
    setAssignments(null)
    setError(null)
    setInput('')
  }

  return (
    <form onSubmit={handleAdd} className="w-full flex items-center my-1">
      <input
        className="w-full outline-none bg-zinc-900 rounded-l-xl leading-normal p-5"
        type="text"
        placeholder="enter name..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onPaste={handlePaste}
      />
      <button className="flex bg-green-600 active:bg-green-700 rounded-r-xl leading-normal p-5">
        <span>🎉</span>
        <p className="px-1">add</p>
      </button>
    </form>
  )
}
