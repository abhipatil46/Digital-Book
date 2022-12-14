import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom bg-primary">
        <Link to="/" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
        MIT
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li><Link to="/" className="nav-link px-2 link-light">Home</Link></li>
          <li><Link to="/about" className="nav-link px-2 link-light">About</Link></li>
          <li><Link to="/models" className="nav-link px-2 link-light">Models</Link></li>
          <li><Link to="/contact" className="nav-link px-2 link-light">Contact</Link></li>
        </ul>

        <div className="col-md-3 me-4 text-end">
          <button type="button" className="btn btn-primary me-2">Login</button>
          <button type="button" className="btn btn-primary">Sign-up</button>
        </div>
      </header>
    </div>
  )
}

export default Navbar