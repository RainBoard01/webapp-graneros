import React from 'react';
import logo from '../media/logo2.svg';
import profilePhoto from '../media/profilePhoto.jpg';

const profile = {
    name: 'Ulises',
    lastName: 'Acuña'
};

const NavBar = () => {
    return (
        <div className='NavBar'>
            <button>
                <img className='logo' src={ logo } alt='logo'/>
            </button>
            <button>Tablero</button>
            <button>Listas</button>
            <button>Estadisticas</button>
            <button>
                <div><img className='profilePhoto' src={ profilePhoto } alt="profilePhoto"/></div>
                { profile.name }
            </button>
        </div>
    )
}

export default NavBar;