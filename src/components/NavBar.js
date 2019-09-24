import React from 'react';
import logo from '../media/logo2.svg';

const NavBar = () => {
    return (
        <div className='NavBar'>
            <img className='logo' src={ logo } alt='logo'/>
        </div>
    )
}

export default NavBar;