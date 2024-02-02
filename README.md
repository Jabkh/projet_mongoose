# Cinéma en Ligne

## Description du Projet

Le projet du cinéma en ligne est une application web permettant aux utilisateurs de gérer une collection de films, d'ajouter de nouveaux films, de les emprunter et de les rendre. L'application suit l'architecture MVC (Modèle-Vue-Contrôleur) pour garantir une structure logique et maintenable.

## Technologies Utilisées

- **Express.js:** Framework côté serveur basé sur Node.js, utilisé pour la gestion des routes, des contrôleurs et des middleware.
- **Pug (Jade):** Moteur de template pour la création de vues HTML de manière concise et élégante.
- **Mongoose:** Bibliothèque pour la connexion à MongoDB et la gestion des modèles de données.

## Structure du Projet

- **controllers:** Contient les contrôleurs pour chaque entité du modèle (film, utilisateur, emprunt).
- **models:** Définit les modèles de données pour chaque entité du projet.
- **views:** Les vues Pug pour l'affichage des pages HTML.
- **public:** Fichiers statiques tels que les feuilles de style
- **routes:** Gestion des routes de l'application.
- **app.js:** Le point d'entrée de l'application Express.
- **config.js:** Configuration de la base de données et d'autres paramètres.
- **package.json:** Fichier de configuration npm pour les dépendances du projet.

## Installation et Utilisation

1. Clonez le repository : `git clone https://github.com/Jabkh/projet_express.git`
2. Installez les dépendances : `npm install`
3. Configurez la base de données dans le fichier `config.js`.
4. Exécutez l'application : `node app.js` ou `npm start`

L'application sera accessible à l'adresse http://localhost:3000.
