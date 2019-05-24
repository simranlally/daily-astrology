const fetch = require("node-fetch");

const getHoroscope = async (sunsign) => {
    const promise = await fetch(`http://horoscope-api.herokuapp.com/horoscope/today/${sunsign}`)
    const data = await promise.json();
    return data;
};