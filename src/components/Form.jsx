import { createContext, useContext, useState } from 'react'

const FormContext = createContext()

function useFormContext() {
  return useContext(FormContext)
}

function Form({ children }) {
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

  const formValue = {
    email,
    name,
    setEmail,
    setName,
    submittedData,
  }

  return (
    <FormContext.Provider value={formValue}>
      <section className="form-section">
        <h2 className="section-title">Form studente</h2>

        <form className="student-form" onSubmit={handleSubmit}>
          {children}
        </form>
      </section>
    </FormContext.Provider>
  )
}

function FormInput({ field, label, placeholder, type }) {
  const { email, name, setEmail, setName } = useFormContext()
  const value = field === 'name' ? name : email
  const setValue = field === 'name' ? setName : setEmail

  return (
    <div className="form-field">
      <label className="input-label" htmlFor={field}>
        {label}
      </label>
      <input
        className="text-input"
        id={field}
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}

function FormSubmitButton({ children }) {
  return (
    <button className="submit-button" type="submit">
      {children}
    </button>
  )
}

function FormResultCard() {
  const { submittedData } = useFormContext()

  if (!submittedData) {
    return null
  }

  return (
    <div className="result-card">
      <h3 className="result-title">Dati inviati</h3>
      <p>Nome: {submittedData.name}</p>
      <p>Mail: {submittedData.email}</p>
    </div>
  )
}

Form.Input = FormInput
Form.SubmitButton = FormSubmitButton
Form.ResultCard = FormResultCard

export default Form
