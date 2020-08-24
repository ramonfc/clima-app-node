const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=c462bc157980cbb53e392c7023a63ab1&units=metric`)
    return resp.data.main.temp;
}

module.exports = {
    getClima
}