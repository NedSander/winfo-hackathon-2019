import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

import React from 'react';
import { Table } from 'reactstrap';

export default class JobTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null,
        }
    }

    componentDidMount() {
        if (this.props.user) {
            this.currentRef = firebase.database().ref(`${this.props.user.uid}/jobHistory`);
            this.currentRef.on('value', (snapshot) => {
                let values = snapshot.val();
                if (!values) {
                    this.setState({
                        jobs: null,
                    });
                } else {
                    //do some crap
                }
            })
        }
    }


    render() {
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        );
    }
}