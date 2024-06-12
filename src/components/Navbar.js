import React from 'react'
import PropTypes from 'prop-types'
import '../css/style.css';

export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-transparent ">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="/ "><strong>{props.title}</strong>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto  custom-gap">
                        <li className="nav-item">
                            <a className="nav-link active primary" aria-current="page" href="/ "><strong>Home</strong></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ ">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ ">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/ ">Contact</a>
                        </li>

                    </ul>

                </div>
            </div>
        </nav>
    )
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title: 'set title here'
}