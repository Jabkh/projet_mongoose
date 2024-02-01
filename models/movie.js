const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  titre: { type: String, required: true },
  description: { type: String, required: true },
  realisateur: { type: String, required: true },
  dateSortie: { type: Date, required: true },
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
