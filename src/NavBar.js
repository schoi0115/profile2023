import "./App.css";

import React, { useState } from "react";
import { Link } from 'react-router-dom'



function NavBar() {
const [sidebar, setSidebar] = useState(false)

const showSidebar = () => setSidebar(!sidebar)


    return (
      <>
        <Link  to="/" className='menu-bars'> 
            <h1 onClick={showSidebar} className="nav-color"><br />Home</h1>
        </Link>
        <Link  to="/page1" className='menu-bars'> 
            <h1>About me</h1>
        </Link>


        <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
          <ul className='nav-menu-items'>
            <div className='navbar-toggle'>
              <Link  to="/" className='menu-bars' /> 
            </div>            
          </ul>
        </nav>

      </>
    );
 
}

export default NavBar;

