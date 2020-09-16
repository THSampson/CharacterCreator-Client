import React from 'react';
import { Nav, NavItem, NavLink, Navbar } from 'reactstrap'
import Signout from './Signout/Signout';
import './Navbar.css'

const NavbarComponent = (props) => {
    const createToggleClick = (event) => {
        event.preventDefault();
        props.createToggle();
    }

    return (
        <div>
            <Navbar color="light" light expand="md">
            <Nav id="navbar" className="ml-auto">
                <NavItem onClick={createToggleClick}>
                    <NavLink href="">Create</NavLink>
                </NavItem>
                <NavItem onClick={() => {props.setSessionToken(''); localStorage.clear()}}>
                    <NavLink href="">Sign Out</NavLink>
                </NavItem>
            </Nav>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
