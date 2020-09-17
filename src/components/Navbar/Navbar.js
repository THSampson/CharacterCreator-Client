import React from 'react';
import { Nav, NavItem, NavLink, Navbar, Button } from 'reactstrap'
import Signout from './Signout/Signout';
import './Navbar.css'

const NavbarComponent = (props) => {
    const createToggleClick = (event) => {
        event.preventDefault();
        props.createToggle();
    }
    return (
        <div className="random">

            <Navbar className="navClass" light expand="md">
            <Nav pills id="navbar" className="ml-auto">
                <NavItem onClick={createToggleClick}>
                    <Button color="outline-dark">Create</Button>
                </NavItem>
                <NavItem onClick={() => {props.setSessionToken(''); localStorage.clear()}}>
                    <Button color="outline-dark">Sign Out</Button>
                </NavItem>
            </Nav>
            </Navbar>
        </div>
    )
}
export default NavbarComponent
