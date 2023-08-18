import React, { useState } from "react";
import { Link } from "react-router-dom";
import icon from '../images/icon.png';

export function NavBar() {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
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
            <Link className="nav-link" to={props.target} onClick={() => props.onClick()}>{props.name}</Link>
        </li>
    );
}

export default NavBar;