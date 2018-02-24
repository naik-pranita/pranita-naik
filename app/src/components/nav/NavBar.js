import React from 'react';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./navbar.scss";

const NavBar = (props) => {
    return (
        <Navbar inverse collapseOnSelect>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="summary">Pranita Naik</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem eventKey={1} href="#">
                        About
                </NavItem>
                    <NavItem eventKey={2} href="#">
                        Experience
                </NavItem>
                    <NavItem eventKey={2} href="#">
                        Education
                </NavItem>
                    <NavItem eventKey={2} href="#">
                        Skills
                </NavItem>
                    <NavItem eventKey={2} href="#">
                        Interests
                </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;