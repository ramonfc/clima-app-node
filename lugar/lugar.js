const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);


    const instance = axios.create({
        baseURL: `https://api.openweathermap.org/data/2.5/weather?q=${encodedUrl}&appid=c462bc157980cbb53e392c7023a63ab1`,
        //headers: { 'X-Custom-Header': 'foobar' }
    });

    const resp = await instance.get();

    if (resp.cod === "404")
        throw Error(`No hay resultados para ${dir}`);

    const data = resp.data.coord;

    const direccion = resp.data.name;
    const lat = data.lat;
    const lng = data.lon;
    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}