import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBfti6ehTrhH6h_TKn3Y6IyvEixCL-CB84",
    authDomain: "jobsearch-winfohackathon.firebaseapp.com",
    databaseURL: "https://jobsearch-winfohackathon.firebaseio.com",
    projectId: "jobsearch-winfohackathon",
    storageBucket: "jobsearch-winfohackathon.appspot.com",
    messagingSenderId: "518869610756"
};
firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
