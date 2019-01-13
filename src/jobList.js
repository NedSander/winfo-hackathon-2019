import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import { Table } from 'reactstrap';

export class JobList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jobs: null,
        }
    }

    //Ned at 5:20 says: I don't think this is working
    componentDidMount() {
        if (this.props.user) {
            //this.currentRef = firebase.database().ref(`${this.props.user.uid}`);
            this.currentRef = firebase.database().ref(`tester`);
            this.currentRef.on('value', (snapshot) => {
                let values = snapshot.val();
                if (!values) {
                    this.setState({
                        jobs: null,
                    });
                } else {
                    this.setState({
                        jobs: values,
                    })
                }
            })
        }
    }


    render() {
        return (
            <>
            {/* <Table striped>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{this.props.jobs.Title[0]}</td>
                        <td>{this.props.jobs.Company[0]}</td>
                        <td>{this.props.jobs.Status[0]}</td>
                    </tr>
                </tbody>
            </Table> */}

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
            </>
        );
    }
}