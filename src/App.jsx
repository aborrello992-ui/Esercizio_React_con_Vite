import Header from './components/Header.jsx'
import List from './components/List.jsx'
import Navbar from './components/Navbar.jsx'

function App() {
  const students = ['Augusto', 'Luca', 'Giulia', 'Marco']

  return (
    <>
      <Navbar />
      <Header />

      <main className="page">
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

        <List names={students} />
      </main>
    </>
  )
}

export default App
