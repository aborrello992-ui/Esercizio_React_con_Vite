function App() {
  return (
    <main className="page">
      <h1 className="main-title">Specializzazione React</h1>

      <div className="form-field">
        <label className="input-label" htmlFor="student-name">
          Nome studente
        </label>
        <input
          className="text-input"
          id="student-name"
          type="text"
          placeholder="Scrivi il tuo nome"
        />
      </div>
    </main>
  )
}

export default App
