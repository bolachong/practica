const express = require('express');
const cors = require('cors');
const app = express();
const session = require('express-session');
const MySQL = require('./modulos/mysql');
const { realizarQuery } = require('./modulos/mysql');

app.use(cors());
app.use(express.json());

const LISTEN_PORT = 4000;

const server = app.listen(LISTEN_PORT, () => {
    console.log(`Servidor NodeJS corriendo en http://localhost:${LISTEN_PORT}/`);
});;

const io = require('socket.io')(server, {
    cors: {
        // IMPORTANTE: REVISAR PUERTO DEL FRONTEND
        origin: ["http://localhost:3000", "http://localhost:3001"], // Permitir el origen localhost:3000
        methods: ["GET", "POST", "PUT", "DELETE"],   // Métodos permitidos
        credentials: true                           // Habilitar el envío de cookies
    }
});

const sessionMiddleware = session({
    //Elegir tu propia key secreta
    secret: "pedocaca",
    resave: false,
    saveUninitialized: false
});

app.use(sessionMiddleware);

/*app.get('/saludo', (req, res) => {
    res.json({
        mensaje: 'Hola desde el backend!',
        timestamp: new Date().toISOString()
    });
});
*/

/*app.get('/autores', (req, res) => {
    const autores = [
        { id: 12345678, nombre: 'Gen Urobuchi', edad: 52, seudonimo: null },
        { id: 13579246, nombre: 'Akira Toriyama', edad: 68, seudonimo: 'Toriyama' },
        { id: 45678912, nombre: 'Eiichiro Oda', edad: 50, seudonimo: 'Odacchi' },
        { id: 37483973, nombre: 'Nio Nakatani', edad: 38, seudonimo: 'Rireba' },
        { id: 88888888, nombre: 'Towa Chama', edad: 666, seudonimo: 'TMT' }
    ];
    res.json(autores);
});
*/

app.get('/autores', async function(req,res){
    try {
        let respuesta;
            respuesta = await realizarQuery("SELECT * FROM Autores");
            console.log(respuesta)  
            res.send(respuesta);
    } catch (error) {
        res.send({mensaje:"Tuviste un error", error:error.message});
    }
})



app.listen(3001, () => {
    console.log('Backend ejecutándose en http://localhost:3001');
});




