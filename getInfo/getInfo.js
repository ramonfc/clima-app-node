const axios = require('axios');

const lugar = require('../lugar/lugar');
const clima = require('../clima/clima');


const getInfo = async(dir) => {



    try {
        let lngLat = await lugar.getLugarLatLng(dir);
        let climaResul = await clima.getClima(lngLat.lat, lngLat.lng);

        return (`El clima de ${lngLat.direccion} es: ${climaResul}`);

    } catch (err) {
        return (`No se pudo determinar el clima de ${dir}`);
    };
    /* if (lngLat.data.cod === "404") {
        throw Error(`No se pudo determinar el clima de ${dir}`);
    } */
}

module.exports = {
    getInfo
}