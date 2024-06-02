import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SidebarData } from './SidebarData.jsx';
import './Navbar.css';

function Navbar({ onLogout }) {
  const [sidebar, setSidebar] = useState(false);
  const navigate = useNavigate();

  const showSidebar = () => setSidebar(!sidebar);

  const handleSignOut = () => {
    onLogout();
    navigate('/');
  };

  return (
    <>
      <div className='navbar'>
      </div>
      <nav className='nav-menu'>
        <ul className='nav-menu-items'>
          {SidebarData.slice(0, -1).map((item, index) => (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
          ))}
          <li className='nav-textsignout nav-menu-bottom' onClick={handleSignOut}>
            <Link to="#">
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
