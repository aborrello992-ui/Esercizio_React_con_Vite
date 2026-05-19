function List({ children, title }) {
  return (
    <section className="list-section">
      <h2 className="list-title">{title}</h2>

      <ul className="names-list">{children}</ul>
    </section>
  )
}

function ListItem({ children }) {
  return <li className="name-item">{children}</li>
}

List.Item = ListItem

export default List
