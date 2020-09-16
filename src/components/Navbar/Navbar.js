import React from 'react';
import './Navbar.css';
import {Nav, NavLink, NavItem} from 'reactstrap';


const Navbar = () => {
    return (
        <div>
             <Nav className="justify-content-end" activeKey="/home">
    <NavItem>
      <NavLink eventKey="charaCreate"> + </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/home">Home</NavLink>
    </NavItem>
    <NavItem>
      <NavLink eventKey="getAll">Get All</NavLink>
    </NavItem>
    <NavItem>
      <NavLink eventKey="logOut" >
        Log Out
      </NavLink>
    </NavItem>
  </Nav>
        </div>
    )
}

export default Navbar;
