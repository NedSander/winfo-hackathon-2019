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
            <Navbar color="light" light expand="md" className="navbar navbar-expand-sm navbar-dark fixed-top">
                <NavbarBrand tag={Link} to="/">
                    JobAppTrackr
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink tag={HashLink} to="/home" onClick={() => {
                                if (window.innerWidth <= 760) {
                                    this.setState({ isOpen: !this.state.isOpen })
                                }
                            }}>Home</NavLink>
                        </NavItem>

                        <NavItem>
                            <NavLink tag={HashLink} to="/login" onClick={() => {
                                if (window.innerWidth <= 760) {
                                    this.setState({ isOpen: !this.state.isOpen })
                                }
                            }}>Login</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>

        )
    }
}