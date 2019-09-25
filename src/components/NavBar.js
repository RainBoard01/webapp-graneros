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
            <div>
                <button className='logo'>
                    <img src={ logo } alt='logo'/>
                </button>
                <button>Tablero</button>
                <button>Listas</button>
                <button>Estadisticas</button>
            </div>
            <div>
                <button  className='profilePhoto'>
                    <div><img src={ profilePhoto } alt="profilePhoto"/></div>
                    <p>{ profile.name }</p>
                    <span>v</span>
                </button>
            </div>
        </div>
    )
}

export default NavBar;