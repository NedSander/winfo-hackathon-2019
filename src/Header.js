import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export class Header extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false,
        }; 
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (

            <Navbar color="light" light expand="md">

                <NavbarBrand tag={Link} to="/">JobApplicationTrackr</NavbarBrand>

                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>

                        <NavItem>
                            <NavLink tag={HashLink} to="/login">Login</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}