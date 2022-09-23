import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <div>
      {/* Footer Start */}
      <footer id="footer_main" className="container-fluid d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top bg-primary">
    <p className="col-md-4 mb-0 text-light">© 2022 mit, Inc</p>

    <a href="/" className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        </a>

    <ul className="nav col-md-4 justify-content-end">
    <li><Link to="/" className="nav-link px-2 link-light">Home</Link></li>
          <li><Link to="/about" className="nav-link px-2 link-light">About</Link></li>
          <li><Link to="/models" className="nav-link px-2 link-light">Models</Link></li>
          <li><Link to="/contact" className="nav-link px-2 link-light">Contact</Link></li>  
    </ul>
  </footer>
    </div>
  )
}

export default Footer