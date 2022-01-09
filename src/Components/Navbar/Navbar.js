import "./Navbar.css"

const Navbar = () => {
    return (
    <div className="navbar">
        <div className="navbar-left">
            <h3>Ahmed <span className="navbar-left-span">McGarry</span></h3>
        </div>
        <nav>
            <ul className="nav-list">
                <li className="nav-item">Projects</li>
                <li className="nav-item">About</li>
                <li className="nav-item">Contact</li>
            </ul>
        </nav>
    </div>
    )
}

export default Navbar