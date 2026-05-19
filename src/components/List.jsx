function List({ names }) {
  return (
    <section className="list-section">
      <h2 className="list-title">Lista studenti</h2>

      <ul className="names-list">
        {names.map((name) => (
          <li className="name-item" key={name}>
            {name}
          </li>
        ))}
      </ul>
    </section>
  )
}

export default List
