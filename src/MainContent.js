import React, { Component } from 'react';

import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody
} from 'reactstrap';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import hamburger from './img/iconfinder_-_Hamburger-Menu-More-Navigation-List_3844407.png';
import dots from './img/iconfinder_-_Dot-More-Option-Menu_3844414.png';
import thumbsUp from './img/iconfinder_-_Thumb-up-Like-Hand-Approve_3844396.png'

export class Content extends Component {

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
            <React.Fragment>

                <h1 style={{ paddingLeft: '30px', paddingTop: '40px', color: '#283655', textAlign: 'center', fontWeight: 'bold', fontSize: '400%', fontFamily: 'Exo' }}>Applications At A Glance</h1>

               

                <CardGroup>
                    <Card style={{ padding: '30px', margin: '50px', border: 'none', alignItems: 'center' }}>
                        <CardImg top src={hamburger} alt="Card image cap" />
                        <CardBody>
                            <Button outline color="primary" style={{ fontWeight: 'bold', fontSize: '200%', color: '#0392cf', fontFamily: 'Exo' }}>Active</Button>
                            {/* 
                            <CardSubtitle>Submitted Application</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                             */}
                            
                        </CardBody>
                    </Card>
                    <Card style={{ padding: '30px', margin: '50px', border: 'none', alignItems: 'center' }}>
                        <CardImg top src={dots} alt="Card image cap" />
                        <CardBody>
                            <Button outline color="danger" style={{ fontWeight: 'bold', fontSize: '200%', color: '#ee4035', fontFamily: 'Exo' }}>In Progress</Button>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Button</Button> */}
                        </CardBody>
                    </Card>
                    <Card style={{ padding: '30px', margin: '50px', border: 'none', alignItems: 'center' }}>
                        <CardImg top src={thumbsUp} alt="Card image cap" />
                        <CardBody>
                            <Button outline color="success" style={{ fontWeight: 'bold', fontSize: '200%', color: '#7bc043', textAlign: 'center', fontFamily: 'Exo' }}>Final Round</Button>
                            {/* <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                            <Button>Button</Button> */}
                        </CardBody>
                    </Card>
                </CardGroup>

                <Button style={{ margin: '30px', fontFamily: 'Titillium Web' }} color="primary">+ Add New Application</Button>

            </React.Fragment>



        )
    }
}

