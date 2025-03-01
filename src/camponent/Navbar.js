import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props){
    return(
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
            <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav"    aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/">{props.About}</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">Pricing</a>
                </li>
                <div class="form-check form-switch">
                   <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                   <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                </div>
            </ul>
        </div>
    </div>
</nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string,
    About: PropTypes.string 
}

Navbar.defaultProps = {
    title: 'set your Title',
    About: 'About'
};