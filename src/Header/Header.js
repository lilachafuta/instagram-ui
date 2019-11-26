import React, {Component} from 'react';
import './Header.scss';
import {Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/"><img src="https://www.goddess-c.com/assets/images/marketing/instagram/2475.new-instagram-text-logo.png" style={{height:'40px'}}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Link className="navbar-link" to="/profile">Profile</Link>
                            <Link className="navbar-link" to="/post/create">New Post</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;