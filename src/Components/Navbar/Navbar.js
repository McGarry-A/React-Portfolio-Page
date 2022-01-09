import { NavLink } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {

    const scrollToProjects = () => window.scroll({
        top: 1300,
        left: 0,
        behavior: 'smooth'
      });
    
    const scrollToAbout = () => window.scroll({
        top: 2200,
        left: 0,
        behavior: 'smooth'
      });
    const scrollToContact = () =>  window.scroll({
        top: 3000,
        left: 0,
        behavior: 'smooth'
      });
    return (
    <div className="navbar">
        <div className="navbar-left">
            <h3>Ahmed <span className="navbar-left-span">McGarry</span></h3>
        </div>
        <nav>
            <ul className="nav-list">
                <li className="nav-item"><NavLink onClick={scrollToProjects} className="nav-item" to="/React-Portfolio-Page/">Projects</NavLink></li>
                <li className="nav-item"><NavLink onClick={scrollToAbout} className="nav-item" to="/about">About</NavLink></li>
                <li className="nav-item"><NavLink onClick={scrollToContact} className="nav-item" to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    </div>
    )
}

export default Navbar