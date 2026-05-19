import { useState } from 'react'

function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [submittedData, setSubmittedData] = useState(null)

  function handleSubmit(e) {
    e.preventDefault()

    setSubmittedData({
      name: name,
      email: email,
    })
  }

  return (
    <section className="form-section">
      <h2 className="section-title">Form studente</h2>

      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-field">
          <label className="input-label" htmlFor="name">
            Nome
          </label>
          <input
            className="text-input"
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Scrivi il tuo nome"
          />
        </div>

        <div className="form-field">
          <label className="input-label" htmlFor="email">
            Mail
          </label>
          <input
            className="text-input"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Scrivi la tua mail"
          />
        </div>

        <button className="submit-button" type="submit">
          Invia
        </button>
      </form>

      {submittedData && (
        <div className="result-card">
          <h3 className="result-title">Dati inviati</h3>
          <p>Nome: {submittedData.name}</p>
          <p>Mail: {submittedData.email}</p>
        </div>
      )}
    </section>
  )
}

export default Form
