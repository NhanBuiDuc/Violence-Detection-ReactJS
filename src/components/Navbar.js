import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'

function Navbar() {
    const[click, setClick] = useState(false)
    const[button, setButton] = useState(true)
    const[email, setEmail] = useState(null)
    const location = useLocation();

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
   
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
        
    }

    function logOut() {

        sessionStorage.clear();
        setEmail(null);
    }

    useEffect(() => {
        showButton();
        if(sessionStorage.length > 0) {
            setEmail(sessionStorage.getItem("Email"));
        }
    }, [location])
    window.addEventListener('resize', showButton);

return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    Group 5 
                    <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}> 
                    <i className={click ? 'fas fa-times' :  'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/services' className='nav-links' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/cameras' className='nav-links' onClick={closeMobileMenu}>
                            Cameras
                        </Link>
                    </li>
                    <li className='nav-item'>
                        {sessionStorage.length === 0? <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Login
                        </Link>: <Link to='#' className='nav-links-mobile' >
                            Logout
                        </Link>}
                        
                    </li>
                </ul>
                {!email? <Button buttonStyle='btn--outline'link='/login'>LOG IN</Button> : <button onClick={logOut}>LOG OUT</button>}
                
            </div> 
        </nav>
    </>
  );
}

export default Navbar