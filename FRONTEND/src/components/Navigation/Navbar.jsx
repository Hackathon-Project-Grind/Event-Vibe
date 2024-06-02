import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='navbar'>
      </div>
      <nav className='nav-menu'>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <h1>EventVibe</h1>
          {SidebarData.slice(0, -1).map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
          <li className='nav-textsignout nav-menu-bottom'>
            <Link to={SidebarData[SidebarData.length - 1].path}>
              {SidebarData[SidebarData.length - 1].icon}
              <span>{SidebarData[SidebarData.length - 1].title}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;