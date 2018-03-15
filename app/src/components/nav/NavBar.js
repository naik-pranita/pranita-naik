import React from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import './navbar.scss';

const onClick = (e) => {
    var element = document.getElementById(e.target.getAttribute('data-target'));
    element.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
};

const NavBar = (props) => {
    return (
        <Navbar inverse collapseOnSelect fixedTop>
            <Navbar.Header>
                <Navbar.Brand><Nav>
                    <NavItem onClick={onClick} data-target="about" className="text-uppercase">Pranita Naik
                </NavItem>
                </Nav>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                    <NavItem onClick={onClick} data-target="experience" className="text-uppercase">
                        Experience
                    </NavItem>
                    <NavItem onClick={onClick} data-target="skills" className="text-uppercase">
                        Skills
                        </NavItem>
                    <NavItem onClick={onClick} data-target="education" className="text-uppercase">
                        Education
                        </NavItem>
                    <NavItem onClick={onClick} data-target="interests" className="text-uppercase">
                        Interests
                        </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
};

export default NavBar;