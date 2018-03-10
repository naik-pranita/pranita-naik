import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import './navbar.scss';

const onClick = (e) => {
    var element = document.getElementById(e.target.getAttribute('data-target'));
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};

const NavBar = (props) => {
    return (
        <Navbar inverse collapseOnSelect fixedTop={true}>
            <Navbar.Header>
                <Navbar.Brand>
                    <a onClick={onClick} data-target="about"> Pranita Naik</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem onClick={onClick} data-target="experience">
                        Experience
                    </NavItem>
                    <NavItem onClick={onClick} data-target="education">
                        Education
                        </NavItem>
                    <NavItem onClick={onClick} data-target="skills">
                        Skills
                        </NavItem>
                    <NavItem onClick={onClick} data-target="interests">
                        Interests
                        </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;