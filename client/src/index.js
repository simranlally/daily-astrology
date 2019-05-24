import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
const fetch = require("node-fetch");

const getHoroscope = async (sunsign) => {
    const promise = await fetch(`http://horoscope-api.herokuapp.com/horoscope/today/${sunsign}`)
    const data = await promise.json();
    return data;
};

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

export default getHoroscope;
