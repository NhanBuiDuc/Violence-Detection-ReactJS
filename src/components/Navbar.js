import React, {useState, useEffect} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from './Button'
import './Navbar.css'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
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
                    <i className='fab fa-typo3'/>
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
                
                    { !email? 
                        null    
                        :
                        <li className='nav-item'>
                        <Link to='/manage' className='nav-links' onClick={closeMobileMenu}>
                            <AccountCircleOutlinedIcon/>
                            <li className='nav-item'>
                                <Link to='manage/profile' className='nav-profile' onClick={closeMobileMenu}>
                                   <p> Profile</p>
                                </Link>
                                </li>
                        </Link>

                        </li>

                    }
                    { !email? 
                        <Button buttonStyle='btn--outline'link='/login'>LOG IN</Button>
                        :
                        <li className='nav-item'>
                        <Link className='nav-links' onClick={logOut}>

                            <LogoutOutlinedIcon >
                                
                            </LogoutOutlinedIcon>
                            <li className='nav-item'>
                                <Link to='manage/profile' className='nav-profile' onClick={closeMobileMenu}>
                                   <p> Logout</p>
                                </Link>
                                </li>
                        </Link>

                        </li>
                    }
                </ul>
                {/* {!email? <button onClick={logOut}></button>:<Button buttonStyle='btn--outline'link='/contact'>Contact</Button> } */}
                {/* {!email? null : <Button buttonStyle='btn--outline' link='/contact'>Contact</Button>}
                {!email? null : <Button buttonStyle='btn--outline'link='/profile'>Profile</Button>}
                {!email? <Button buttonStyle='btn--outline'link='/login'>LOG IN</Button> : <button onClick={logOut}>LOG OUT</button>}
                {!email? null :<Button buttonStyle='btn--outline'link='/profile'>Profile</Button> } */}
            </div> 
        </nav>
    </>
  );
}

export default Navbar