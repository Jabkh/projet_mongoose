const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
require('dotenv').config();
const movieRoutes = require('./routes/movieRoutes');
const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.static('public')); // Permet d'utiliser les fichiers statiques dans public

// Configurer Express pour servir les fichiers statiques depuis node_modules
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

// Middleware pour configurer le type MIME pour les fichiers CSS
app.use('/node_modules/bootstrap/dist/css/bootstrap.min.css', (req, res, next) => {
  res.header('Content-Type', 'text/css');
  next();
});



const db = mongoose.connection;

// Connexion à la base de données MongoDB
mongoose.connect(process.env.MONGODB_URI, {});

// Configuration de Pug comme moteur de template
app.set('view engine', 'pug');
app.set('views', './views');

// Utilisation des routes définies dans movieRoutes
app.use('/', movieRoutes);


db.on('error', console.error.bind(console, 'Erreur de connexion à MongoDB :'));
db.once('open', () => {
  console.log('Connecté à MongoDB');
}); 

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution at http://localhost:${PORT}`);
});
