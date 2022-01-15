import React from 'react';
import PropTypes from 'prop-types';
import './Styles/Header.styles.css';

const Header = ({ title, handleDarkMode }) => {
    return (
        <header className='header'>
            <h1 className='header-title'>{title}</h1>
            <i style={{
                cursor: 'pointer',
                color: 'white'
            }} className="fas fa-moon fa-2x" onClick={handleDarkMode}></i>
        </header>
    );
}

Header.defaultProps = {
    title: 'Covid 19 Tracker'
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;