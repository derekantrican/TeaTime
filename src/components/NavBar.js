import React, { useState } from "react";

export function NavBar() {
    const [collapsed, setCollapsed] = useState(true);

    return (
        <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
            <a className="navbar-brand" href="/">
                <img className="m-2" src="turkish_teacup.png" height="50"/>
                Tea Time
            </a>
            <button className="navbar-toggler me-2" onClick={() => setCollapsed(!collapsed)}>
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`${collapsed ? 'collapse' : ''} navbar-collapse me-2`} id="navbarCollapse">
                <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    <NavLink name="Home" target="/"/>
                    <NavLink name="About" target="/about"/>
                    <NavLink name="Guidelines" target="/guidelines"/>
                    <NavLink name="Find a Group" target="/groups"/>
                </ul>
            </div>
        </nav>
    );
};

function NavLink(props) {
    return (
        <li className="nav-item m-2">
            <a className="nav-link" href={props.target}>{props.name}</a>
        </li>
    );
}

export default NavBar;