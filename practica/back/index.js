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
        { id: 88888888, nombre: 'Towa Chama', edad: 666, seudonimo: 'TMT' }
    ];
    res.json(autores);
});

app.listen(3001, () => {
    console.log('Backend ejecutándose en http://localhost:3001');
});

app.put('/modificarAutor', (req, res) => {
    const { autor, edad } = req.query; // Obtener parámetros de la URL
    
    console.log(`Modificando autor: ${autor}, nueva edad: ${edad}`);
    
    // Aquí deberías actualizar la base de datos
    // Por ejemplo con MySQL:
    const query = 'UPDATE autores SET edad = ? WHERE nombre = ?';
    
    db.query(query, [edad, autor], (error, results) => {
        if (error) {
            console.error('Error al actualizar:', error);
            return res.status(500).json({ 
                success: false, 
                mensaje: 'Error al modificar autor' 
            });
        }
        
        res.json({ 
            success: true, 
            mensaje: `Autor ${autor} actualizado con edad ${edad}`,
            resultados: results
        });
    });
});


