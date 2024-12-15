import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Reveal } from './pages/Reveal'
import { SecretSanta } from './pages/SecretSanta'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="text-center mx-auto max-w-sm flex flex-col min-h-screen flex-1">
      <div className="flex-1 my-4">
        <BrowserRouter>
          <Routes>
            <Route path="/reveal" element={<Reveal />} />
            <Route path="/*" element={<SecretSanta />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  )
}
