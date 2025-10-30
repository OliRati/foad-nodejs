const express = require('express');
const mongoose = require('mongoose');
const fakeidRoutes = require('./routes/fakeids')

const app = express();
const portServer = 8080;

// Extension pour gerer les fichiers json
app.use(express.json());

// Connexion sur la base de données
mongoose.connect('mongodb://host.docker.internal:27017/fakeid')
    .then(() => console.log('Connecté à mongodb'))
    .catch((err) => console.error('Erreur de connexion à mongodb !', err));

// Allowing CORS bypass for client at http://127.0.0.1:5500
app.use( (req, res, next) => {    
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
})

app.use('/api/fakeid', fakeidRoutes);

app.listen(portServer, "0.0.0.0", () => {
    console.log(`Le serveur tourne sur le port ${portServer}`);
})
