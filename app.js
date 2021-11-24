
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');


console.clear;


crearArchivo(argv.b, argv.l, argv.h).then(salida => console.log(salida.rainbow,'creado')).catch(err => consol.log(err));


 