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
                    <li className="nav-item m-2">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item m-2">
                        <a className="nav-link" href="/about">About</a>
                    </li>
                    <li className="nav-item m-2">
                        <a className="nav-link" href="/guidelines">Guidelines</a>
                    </li>
                    <li className="nav-item m-2">
                        <a className="nav-link" href="/groups">Find a Group</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;