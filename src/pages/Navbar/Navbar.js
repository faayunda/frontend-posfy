import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './navbar.css';

export const Navbar = () => {
  
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  
    return (
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
          <div className='nav-profile'>
          <NavDropdown title="Profile" className='userprofile'>
          <NavDropdown.Item eventKey="4.1">Logout</NavDropdown.Item>
        </NavDropdown>
          </div>
      </Nav>
    );
  }
  
  export default Navbar;