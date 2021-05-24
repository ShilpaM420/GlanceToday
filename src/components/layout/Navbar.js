 /* import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';
import Nav from 'react-bootstrap/Nav'
import SubMenu from "./SubMenu";
import styled from "styled-components";

/* eslint-disable-next-line */



 /* const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;


  
const SidebarWrap = styled.div`
  width: 100%;
`;

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
          <NavIcon to="#">
            <FaIcons.FaBars onClick={showSidebar} />
            </NavIcon>
          </Link>

         <Nav className="justify-content-end" activeKey="/">
           <Nav className="mr-auto">
              
              <h1
            style={{ textAlign: "center", 
                     marginLeft: "450px", 
                     color: "green" }} >
            Glance Today
          </h1> 
         </Nav>
         </Nav>
         
        </div>
        
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
          
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
              
              <NavIcon to="#">
                <AiIcons.AiOutlineClose onClick={showSidebar} />
                </NavIcon>
              </Link>
            </li>
           
            {SidebarData.map((item, index) => {
              return (
                
                <SidebarWrap>
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>     
               <SubMenu item={item} key={index} />
                  </Link>
                </li>
                
                </SidebarWrap>
                
              );
              
            })
            }
            
          </ul>
        
      </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar; */


import React from "react";
import "./Navbar.css";
import SidebarData from "./SidebarData";


const Navbar = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="menu">
        <SidebarData setCategory={setCategory} />
      </div>

     
              <h1
            style={{ textAlign: "center", 
                     marginLeft: "150px", 
                     color: "green" }} >
            Glance Today
          </h1> 
         
    </div>
  );
};

export default Navbar;