import React, { Component } from 'react';

import { Link } from "react-router-dom";
import {
    InputGroup,
    InputGroupButtonDropdown,
    Input,
    Button,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

export class ApplicationInput extends Component {

    constructor(props) {
        super(props);

        this.toggleDropDown = this.toggleDropDown.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggleDropDown() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }



    render() {
        return (

            <React.Fragment>
                <InputGroup>
                    <Input placeholder="Company Name" />
                </InputGroup>

                <br />

                <InputGroup>
                    <Input placeholder="Position Title" />
                </InputGroup>

                <br />

                <InputGroup>

                    <InputGroupButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
                        <DropdownToggle caret>
                            Button Dropdown
                        </DropdownToggle>

                        <DropdownMenu>
                            <DropdownItem>Need To Apply</DropdownItem>
                            <DropdownItem>Applied</DropdownItem>
                            <DropdownItem>Phone Screen</DropdownItem>
                            <DropdownItem>Onsite</DropdownItem>
                            <DropdownItem>Offer</DropdownItem>
                        </DropdownMenu>

                    </InputGroupButtonDropdown>


                </InputGroup>

                <Button style={{ margin: '30px' }} color="primary" tag={Link} to="/" > Submit </Button>

            </React.Fragment>




        )
    }
}

