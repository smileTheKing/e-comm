import { Menu } from '@mui/icons-material'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav>
        <h4 className='logo'> <Link to={'/'}>React App</Link></h4>
        <div className="spacing"></div>
        <ul className='nav-link'>
            <li ><Link to={'/store'}>Explore Shop</Link></li>
            <li ><Link to={'/about'}>About</Link></li>
            <li><Link to={'/contact'}>Contact</Link></li>
        </ul> 
        <div className="breadMenu">
          <Menu sx={{color:'white'}}/>
        </div>  
    </nav>
    <Outlet/>
    </>
    
  )
}

export default NavBar