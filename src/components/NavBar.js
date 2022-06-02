import logo from '../assets/img/cinema-svgrepo-com.svg'
import burger from '../assets/img/menu-svgrepo-com.svg'
import React from 'react';
import { useNavigate } from "react-router-dom";


function NavBar() {
    let navigate = useNavigate();
    
    function goHome() {
        navigate("/");
    }


    return (
        <div className='app-navbar'>
            <img onClick={goHome} className='logo' src={logo} alt="Logo"/>
            <h2 onClick={goHome} className='app-name'>Cinema</h2>
            <img  className='burger' src={burger} alt="Burger" />
        </div>
    )
    
}

export default NavBar;