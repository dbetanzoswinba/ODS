import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import fs from 'fs';
import path  from "path";

const {pathname: root} = new URL('./', import.meta.url)

const content = fs.readFileSync(
    path.resolve(root, "plantillaODS.docx"),
    "binary"
);


const zip = new PizZip(content);

const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});

const dataODS = {
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
    total:'128,792.40'
}
doc.render(data);

const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
});

fs.writeFileSync((root,`output_${data.repse}.docx`), buf);