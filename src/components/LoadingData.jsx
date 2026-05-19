import { useState } from 'react'

function LoadingData() {
  const [users, setUsers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  async function loadUsers() {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      if (!response.ok) {
        throw new Error('Errore durante il caricamento degli utenti')
      }

      const data = await response.json()

      setUsers(data)
    } catch (error) {
      setError(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="loading-section">
      <h2 className="section-title">Utenti da API</h2>

      <button className="submit-button" type="button" onClick={loadUsers}>
        Carica utenti
      </button>

      {isLoading && <p className="loading-message">Caricamento in corso...</p>}
      {error && <p className="error-message">{error}</p>}

      {users.length > 0 && (
        <ul className="users-list">
          {users.map((user) => (
            <li className="user-card" key={user.id}>
              <h3 className="user-name">{user.name}</h3>
              <p className="user-email">{user.email}</p>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default LoadingData
