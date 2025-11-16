const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/saludo', (req, res) => {
    res.json({
        mensaje: 'Hola desde el backend!',
        timestamp: new Date().toISOString()
    });
});

app.get('/autores', (req, res) => {
    const autores = [
        { id: 12345678, nombre: 'Gen Urobuchi', edad: 52, seudonimo: null },
        { id: 13579246, nombre: 'Akira Toriyama', edad: 68, seudonimo: 'Toriyama' },
        { id: 45678912, nombre: 'Eiichiro Oda', edad: 50, seudonimo: 'Odacchi' },
        { id: 37483973, nombre: 'Nio Nakatani', edad: 38, seudonimo: 'Rireba' },
    ];
    res.json(autores);
});

app.listen(3001, () => {
    console.log('Backend ejecutándose en http://localhost:3001');
});


