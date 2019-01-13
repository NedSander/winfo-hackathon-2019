import React, { Component } from 'react';

import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup, CardSubtitle, CardBody
} from 'reactstrap';

import { ApplicationInput } from "./AddApplication";
import { Switch, Route, Redirect, Link } from "react-router-dom";

import { HashLink } from 'react-router-hash-link';

export class Content extends Component {

    render() {
        return (

            <Switch>

                <Route exact path="/" component={CardView} /> 
                <Route path="/addApplication" component={ApplicationInput} />
                <Redirect to="/" />
            </Switch>

        )
    }
}


export class CardView extends Component {

    render() {
        return (

            <React.Fragment>
                <h1 style={{ paddingLeft: '30px', paddingTop: '20px' }}>Applications At A Glance</h1>

                <CardGroup>
                    <Card style={{ padding: '30px', margin: '50px' }}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card style={{ padding: '30px', margin: '50px' }}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This card has supporting text below as a natural lead-in to additional content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                    <Card style={{ padding: '30px', margin: '50px' }}>
                        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>Card title</CardTitle>
                            <CardSubtitle>Card subtitle</CardSubtitle>
                            <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Card>
                </CardGroup>

                <Button style={{ margin: '30px' }} color="primary" tag={Link} to="/addApplication" > Add New Application </Button>
                
            </React.Fragment>
        )
    }

}

