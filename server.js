import express from "express";
import { leerDocumentos } from "./controllers/documentoControler.js";
import { generarODS } from "./controllers/ordenServicio.js";

//const app = express();

// app.use('/api')
// const PORT = 3000;
// app.listen(PORT,()=>{
//     console.log(`Servidor corriendo en el puerto ${PORT}`);
// });

/* const dataODS = {
    empresa:'BRDIGESTONE NEUMATICOS DE MONTERREY, SA DE CV',
    planta:'MONTERREY',
    repse:'AR62838/2021',
    ordenCompra:'5000184863',
    ordenServicio:'O000241',
    folio:'SERV-MTY-035/01-2022',
    representanteLegal1:'OMAR DÍAZ SOLANO',
    emailRepresentante1:'diazomar@bfusa.com',
    representanteLegal2:'EDGAR ERNESTO HERRERA HERNÁNDEZ',
    emailRepresentante2:'herreraedgar@bfusa.com',
    representantePrestador:'JONHATTAN DANIEL HERRERA VÁZQUEZ.',
    emailPrestador:'jherrera@proadinsa.com',
    rfc_prestador:'PRO160707R43',
    descripcion:'Retiro de lámina R101 en cubierta de cuarto de mymec.',
    trabajadores:'5 TRABAJADORES',
    inicio:'11 de abril del 2022',
    fin:'29 de abril del 2022',
    total:'152320.00'
} */

const resultado = leerDocumentos('.\\consolidado.csv');
console.log(resultado);