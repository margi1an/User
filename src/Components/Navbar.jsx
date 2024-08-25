import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'; // CSS fayli

function Navbar() {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <Link to="/" className={`navbar-logo ${currentPath === '/' ? 'active' : ''}`}>MyApp</Link>
                </div>
                <ul className="navbar-menu">
                    <li>
                        <Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className={currentPath === '/about' ? 'active' : ''}>About</Link>
                    </li>
                    <li>
                        <Link to="/contact" className={currentPath === '/contact' ? 'active' : ''}>Contact</Link>
                    </li>
                    <li>
                        <Link to="/create" className={currentPath === '/create' ? 'active' : ''}>Create</Link>
                    </li>
                </ul>
                <div className="navbar-right">
                    <Link to="/cart" className="cart-icon">
                        <FaShoppingCart size={24} />
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
