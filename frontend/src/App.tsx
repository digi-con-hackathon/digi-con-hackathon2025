import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [apiHealth, setApiHealth] = useState<string>('checking...')
  const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL as string) || 'http://localhost:8080'

  useEffect(() => {
    fetch(`${apiBaseUrl}/health`)
      .then((res) => res.json())
      .then((data) => setApiHealth(data.status || 'unknown'))
      .catch(() => setApiHealth('unreachable'))
  }, [apiBaseUrl])

  return (
    <div style={{ padding: 24, fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif' }}>
      <h1>Digi-Con Hackathon Frontend</h1>
      <p>API health: <strong>{apiHealth}</strong></p>
      <p>Fetching API via <code>VITE_API_BASE_URL</code>: <code>{apiBaseUrl}</code></p>
    </div>
  )
}

export default App
