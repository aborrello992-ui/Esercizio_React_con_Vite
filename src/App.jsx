import Counter from './components/Counter.jsx'
import Form from './components/Form.jsx'
import Header from './components/Header.jsx'
import List from './components/List.jsx'
import LoadingData from './components/LoadingData.jsx'
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

        <List title="Lista studenti">
          {students.map((student) => (
            <List.Item key={student}>{student}</List.Item>
          ))}
        </List>

        <Counter />

        <Form>
          <Form.Input
            field="name"
            label="Nome"
            type="text"
            placeholder="Scrivi il tuo nome"
          />
          <Form.Input
            field="email"
            label="Mail"
            type="email"
            placeholder="Scrivi la tua mail"
          />
          <Form.SubmitButton>Invia</Form.SubmitButton>
          <Form.ResultCard />
        </Form>

        <LoadingData />
      </main>
    </>
  )
}

export default App
