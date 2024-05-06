import { Link, NavLink } from "react-router-dom"

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
      <div className="container-fluid">
        <Link className="navbar-brand" href="#">Use Context</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className={({isActive}) => {
                return `nav-link ${isActive ? "active" : ""}`
              }}>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({isActive}) => {
                return `nav-link ${isActive ? "active" : ""}`
              }}>
                About
              </NavLink>
            </li>
             <li className="nav-item">
              <NavLink to="/login" className={({isActive}) => {
                return `nav-link ${isActive ? "active" : ""}`
              }}>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
  </nav>
  )
}