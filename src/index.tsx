import "core-js/stable";
import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './styles/spinner.scss';
import './styles/container.scss';
import './styles/button.scss';
import './styles/stars.scss';
import * as serviceWorker from './serviceWorker';
import ListHotels from "./components/ListHotels";

ReactDOM.render(<ListHotels/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
