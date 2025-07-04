
import React, {useState} from "react";
import coin from "../../resources/images/bsclogo.png"

const NavBar = () => {
    
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    };

    return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark bg-opacity-75 fixed-top">
    <div className="container-fluid">
        <a className="navbar-brand" href="#home">
        <img src={coin} alt="JRD Logo" style={{ height: "40px" }} />
        </a>
        <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
        <ul className="navbar-nav text-end">
            <li className="nav-item">
            <a className="nav-link" href="#home">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#how">How to work</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#tokens">JRD & JRDT</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#about">About Us</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="#gallery">Raccon's Gallery</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    );
};

export default NavBar;
