import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function incrementCount() {
    setCount((prev) => prev + 1)
  }

  function decrementCount() {
    setCount((prev) => prev - 1)
  }

  return (
    <section className="counter-section">
      <h2 className="section-title">Contatore</h2>

      <p className="counter-value">{count}</p>

      <div className="counter-actions">
        <button className="counter-button" type="button" onClick={decrementCount}>
          Decrementa
        </button>
        <button className="counter-button" type="button" onClick={incrementCount}>
          Incrementa
        </button>
      </div>
    </section>
  )
}

export default Counter
