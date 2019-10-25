import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import './styles/spinner.css';
import './styles/container.css';
import './styles/button.css';
import './styles/stars.css';
import * as serviceWorker from './serviceWorker';
import ListHotels from "./components/ListHotels";

ReactDOM.render(<ListHotels/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
