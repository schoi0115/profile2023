import "./App.css";

import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Sidebar } from './Sidebar';



function NavBar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)


  return (
    <>
      <Link to="/" className='menu-bars'>
        <h4 onClick={showSidebar} className="nav-color"><br />Menu</h4>
      </Link>


      <nav className={sidebar ? 'nav-menu' : 'nav-menu active'}>
        <ul className='nav-menu-items'>
          <div className='navbar-toggle'>
            <Link to="/" className='menu-bars' />
          </div>
          {Sidebar.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}

        </ul>
      </nav>

    </>
  );

}

export default NavBar;

