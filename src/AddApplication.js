import React, { Component } from 'react';


import {
    InputGroup,
    InputGroupAddon,
    InputGroupButtonDropdown,
    InputGroupDropdown,
    Input,
    Button,
    Dropdown,
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
                            <DropdownItem header>Header</DropdownItem>
                            <DropdownItem disabled>Action</DropdownItem>
                            <DropdownItem>Another Action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Another Action</DropdownItem>
                        </DropdownMenu>
                    </InputGroupButtonDropdown>


                </InputGroup>
            </React.Fragment>




        )
    }
}

