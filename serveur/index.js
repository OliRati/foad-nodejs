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

app.use('/api/fakeid', fakeidRoutes);

app.listen(portServer, "0.0.0.0", () => {
    console.log(`Le serveur tourne sur le port ${portServer}`);
})
