import { useState } from 'react'
import { Header } from '../components/Header'
import { GenerateButton } from '../components/GenerateButton'
import { Input } from '../components/Input'
import { List } from '../components/List'
import { Error } from '../components/Error'
import { sattoloShuffle } from '../utils/sattolo'

export function SecretSanta() {
  const [people, setPeople] = useState<string[]>([])
  const [assignments, setAssignments] = useState<Record<string, string> | null>(
    null
  )
  const [error, setError] = useState<string | null>(null)

  const handleGenerate = (): void => {
    if (people.length < 3) {
      setError('You need at least 3 people to generate Secret Santas!')
      return
    }
    const shuffled = sattoloShuffle(people)
    const newAssignments: Record<string, string> = {}
    people.forEach((person, i) => {
      newAssignments[person] = shuffled[i]
    })
    setAssignments(newAssignments)
    setError(null)
  }

  const handleRemove = (name: string): void => {
    const trimmedName = name.trim()
    const newPeople = [...people].filter((n) => n !== trimmedName)
    setPeople(newPeople)
    setAssignments(null)
    setError(null)
  }

  return (
    <>
      <Header />
      <GenerateButton handleGenerate={handleGenerate} />
      <Error message={error} />
      <Input
        people={people}
        setPeople={setPeople}
        setAssignments={setAssignments}
        setError={setError}
      />
      <List
        people={people}
        assignments={assignments}
        handleRemove={handleRemove}
      />
    </>
  )
}
