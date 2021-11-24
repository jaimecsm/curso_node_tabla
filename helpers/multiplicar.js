
const fs = require('fs');
const colors = require('colors');



const crearArchivo = async(n = 5, listar = false, h = 10) => {
     
        try {
                let salida,consola = '';
            
                for (let i = 1; i <= h; i++){
                    salida += `${n} * ${i} = ${n * i}\n`;
                    consola += `${n} ${'*'.green} ${i} ${'='.green} ${n * i}\n`;
                }

                if(listar){

                    console.log(colors.underline.blue.cyan('========================'));
                    console.log(colors.bgMagenta(`Tabla del ${n}`));
                    console.log(colors.underline.blue.cyan('========================'));

                    console.log(colors.italic.red(consola));
                }

                fs.writeFileSync(`./salida/tabla-${n}.txt`,salida);  
                return `tabla ${n}.txt`;          
                
            } catch (err) {
                throw err
            }               
    }
    
module.exports = {
crearArchivo
}