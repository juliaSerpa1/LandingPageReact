import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light">
            <div class="container">
                <Link class="navbar-brand" to="/">LOGO</Link>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <NavLink class="nav-link active text-secondary">Home</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" href="Features">Features</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" href="Pricing">Pricing</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink class="nav-link" href="About">About</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

};

export default Header;