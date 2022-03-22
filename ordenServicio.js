import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";

const {pathname: root} = new URL('./', import.meta.url)

import fs from 'fs';
import path  from "path";


const content = fs.readFileSync(
    path.resolve(root, "SERV-CUE-016-12-2021.docx"),
    "binary"
);


const zip = new PizZip(content);

const doc = new Docxtemplater(zip, {
    paragraphLoop: true,
    linebreaks: true,
});

const data = {
    repse : 'AR4421/2021',
    contrato_macro : 'SERV-CUE-016/12-2021',
    cliente : 'BRIDGESTONE DE MÉXICO, S.A. DE C.V.',
    representante_legal1_cliente:  'JOSÉ ANTONIO RAMON PEDRERO',
    representante_legal2_cliente: 'ENRIQUE RAFAEL VIÑAS OCAMPO',
    prestador : 'ASESORÍA Y EQUIPOS DE INSPECCIÓN, S.A. DE C.V.',
    pro : 'el',
    representante_prestador: 'EDGAR ESCALANTE GONZÁLEZ.',
    RFC_cliente: 'BFM910826TW6',
    RFC_prestador: 'AEI790419254',
    NSS_prestador: 'D502587610'
}
doc.render(data);

const buf = doc.getZip().generate({
    type: "nodebuffer",
    // compression: DEFLATE adds a compression step.
    // For a 50MB output document, expect 500ms additional CPU time
    compression: "DEFLATE",
});

fs.writeFileSync((root,`output_${data.repse}.docx`), buf);