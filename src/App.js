import React, { Component } from 'react';
import './App.css';
import { Header } from "./Header";
import firebase from 'firebase/app';
import 'firebase/auth';
import { Content } from "./MainContent";
import { HashRouter } from 'react-router-dom';



class App extends Component {
    
	// sets app state to store user info and stores in firebase
	componentDidMount() {
		firebase.auth().onAuthStateChanged((firebaseUser) => {
			if (firebaseUser) {
				this.setState({
					user: firebaseUser
				})
			} else {
				this.setState({
					user: null
				})
			}
		})
    }
    
    render() {
        return (

            <div id="app">
                <HashRouter>
                    <React.Fragment>
                        {/* firebase here */}
                        <Header />
                        <Content />
                        

                    </React.Fragment>

                </HashRouter>
            </div>

        );
    }
}

export default App;
