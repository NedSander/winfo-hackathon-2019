import React, { Component } from 'react';
import './App.css';
import { Header } from "./Header";
import { Content } from "./MainContent";
import { HashRouter } from 'react-router-dom';



class App extends Component {
    render() {
        return (

            <div id="app">
                <HashRouter >
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
