import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <Link className="navbar-link" to="/">
        Home
      </Link>
      <Link className="navbar-link" to="/posts">
        Posts
      </Link>
    </nav>
  )
}

export default Navbar
