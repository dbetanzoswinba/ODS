import express from "express";

const app = express();

app.use('/api')
const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});