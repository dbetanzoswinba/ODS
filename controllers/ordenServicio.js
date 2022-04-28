import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import fs from 'fs';
import convertir from 'numero-a-letras';

const nombre = 'ODSO';

export const generarODS = (dataODS)=>{
    dataODS.totalLetra = convertir.NumerosALetras(Number(dataODS.total)).toUpperCase();
    const content = fs.readFileSync(
        ".\\plantillaODS.docx",
        "binary"
    );
    const zip = new PizZip(content);
    const doc = new Docxtemplater(zip, {
        paragraphLoop: true,
        linebreaks: true,
    });
    doc.render(dataODS);
    const buf = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
    });
    fs.writeFile(`./docs/${nombre}.docx`,buf, (err) => {
        if (err) throw err;
        console.log("Archivo generado correctamente");
    }); 
} 