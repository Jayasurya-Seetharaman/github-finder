import React from 'react'
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {

    return (
        <nav className="navbar">
            <h1> <i className={icon}></i> {title}</h1>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Reddit',
    icon: 'fab fa-reddit'
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar;