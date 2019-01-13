import React, { Component } from 'react';
import { Alert, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'email': '',
            'password': '',
            redirect: false,
        };
    }

    handleChange(event) {
        let field = event.target.name;
        let value = event.target.value;

        let changes = {};
        changes[field] = value;
        this.setState(changes);
    }

    handleSignUp(event) {
        event.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((firebaseUser) => {
                this.setState({
                    redirect:true,
                })
        }).catch((err) => this.setState({ errorMessage: err.message }));
    }

	handleSignIn(event) {
		event.preventDefault(); //don't submit
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
			.then((firebaseUser) => {
				this.setState({
					redirect: true
				})
			})
			.catch((err) => {
				this.setState({
					errorMessage: err.message
				}
				);
			});
    }
    
	render() {
		return (
			<div id="login-page" className="container container-fluid">
				<h1 style={{ textAlign: 'center' }}>Log In or Sign Up!</h1>
				<React.Fragment>
					{this.state.redirect && <Redirect to="/" />}
					<Form style={{ paddingTop: '1rem' }}>
						{/* email */}
						<FormGroup>
							<Label htmlFor="email">Email</Label>
							<Input placeholder="Input email here"
								id="email"
								type="email"
								name="email"
								autoComplete="email"
								onChange={(e) => this.handleChange(e)}
							/>
						</FormGroup>

						{/* password */}
						<FormGroup>
							<Label htmlFor="password">Password</Label>
							<Input placeholder="Input password here"
								id="password"
								type="password"
								name="password"
								autoComplete="current-password"
								onChange={(e) => this.handleChange(e)}
							/>
						</FormGroup>

						{/* buttons */}
						<FormGroup>
							<Button className="mr-3" color="secondary"
								onClick={(e) => this.handleSignUp(e)}
							>
								Sign-up
            				</Button>
							<Button color="success"
								onClick={(e) => this.handleSignIn(e)}
							>
								Sign-in
            				</Button>
						</FormGroup>
					</Form>
					{this.state.errorMessage &&
						<Alert color="danger" role="alert">{this.state.errorMessage}</Alert>}
				</React.Fragment>
			</div>
		)
	}
}