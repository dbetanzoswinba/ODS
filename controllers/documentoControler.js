import fs from 'fs'
import  cvs from 'csv-parser';
import { generarODS } from './ordenServicio.js';
const result = [];

export const leerDocumentos = (doc)=>{
    try{
        fs.createReadStream(doc)
        .setEncoding('UTF8')
        .pipe(cvs())
        .on('data',data =>{
            generarODS(data)
        })
        .on('end',()=>{
            console.log('Hemos terminado la lectura del documento');
        })
    return true;
    }catch(error){
        console.log(error.message);
    }
}
