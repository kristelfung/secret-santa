import { Header } from '../components/Header'
import { decryptString } from '../utils/encryption'

export function Reveal() {
  const query = new URLSearchParams(window.location.search)
  const santa = query.get('santa')
  const encryptedRecipient = query.get('recipient')

  if (!santa || !encryptedRecipient) {
    return <div>invalid url</div>
  }

  const recipient = decryptString(encryptedRecipient)

  return (
    <>
      <Header />
      <div className="bg-zinc-900 rounded-xl p-8 text-xl">
        <p>
          hi <span className="text-red-500">{santa}</span>!
        </p>
        <p>
          you've been assigned <span className="text-red-500">{recipient}</span>
          .
        </p>
        <span className="text-5xl leading-loose">📨</span>
        <p>have fun!</p>
      </div>
    </>
  )
}
