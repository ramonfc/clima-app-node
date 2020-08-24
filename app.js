const lugar = require('./lugar/lugar');
const { getLugarLatLng } = require('./lugar/lugar');

const clima = require('./clima/clima');

const info = require('./getInfo/getInfo');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad a obtener el clima',
        demand: true
    }
}).argv;



// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log)
//     .catch(err => {
//         console.log(err);
//     });


// clima.getClima(40.42, -3.7)
//     .then(console.log)
//     .catch(console.log);


info.getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);

// info.getInfo(argv.direccion)
//     .then(console.log)
//     .catch(err => {
//         console.log(err);
//     });