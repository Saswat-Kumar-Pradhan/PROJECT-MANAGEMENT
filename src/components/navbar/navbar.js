import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/hypernextlogo.png';
import Button from '@mui/material/Button';
import './navbar.css';

import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';


const Navbar = () => {
    return (
        <div className="navbar">
            <img src={logo} alt="Logo" className="com-logo" />
            <div className='profile'>
                <div>
                <h4>Saswat Kumar Pradhan</h4>
                <p>Frontend Developer</p>
                </div>
                <img src="https://www.georgetown.edu/wp-content/uploads/2022/02/Jkramerheadshot-scaled-e1645036825432-1050x1050-c-default.jpg" alt="Logo" />

            </div>
        </div>
    );
};

export default Navbar;
