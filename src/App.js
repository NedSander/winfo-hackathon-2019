import React, { Component } from 'react';
import './App.css';
import { Header } from "./Header";
import { HashRouter } from 'react-router-dom';



class App extends Component {
    render() {
        return (

            <div id="app">
                <HashRouter>
                    {/* firebase here */}
                    {/* <Navigation user={this.state.user}></Navigation> */}
                    <Header />

                </HashRouter>
            </div>

        );
    }
}

export default App;
