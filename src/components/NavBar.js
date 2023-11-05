import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from '../images/icon.png';

export function NavBar() {
    const [collapsed, setCollapsed] = useState(true);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        //If scrolling down, hide the website (but only on mobile)
        if (window.scrollY > lastScrollY && window.innerWidth <= 768) {
          setShow(false); 
        }
        else {
          setShow(true);  
        }
  
        setLastScrollY(window.scrollY); 
      }
    };
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        window.addEventListener('scroll', controlNavbar);
  
        return () => {
          window.removeEventListener('scroll', controlNavbar);
        };
      }
    }, [lastScrollY]);

    return (
        <nav className={`navbar navbar-dark bg-dark navbar-expand-lg ${show ? 'fixed-top' : ''}`}>
            <Link className="navbar-brand" to="/">
                <img className="m-2" src={icon} height="50"/>
                Tea Time
            </Link>
            <button className="navbar-toggler me-2" onClick={() => setCollapsed(!collapsed)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${collapsed ? 'collapse' : ''} navbar-collapse me-2`} id="navbarCollapse">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <NavLink name="Home" target="/" onClick={() => setCollapsed(true)}/>
                    <NavLink name="About" target="/about" onClick={() => setCollapsed(true)}/>
                    <NavLink name="Guidelines" target="/guidelines" onClick={() => setCollapsed(true)}/>
                    <NavLink name="Find a Group" target="/groups" onClick={() => setCollapsed(true)}/>
                </ul>
            </div>
        </nav>
    );
};

function NavLink(props) {
    return (
        <li className="nav-item m-2">
            <Link className="nav-link" style={{color: 'white'}} to={props.target} onClick={() => props.onClick()}>{props.name}</Link>
        </li>
    );
}

export default NavBar;