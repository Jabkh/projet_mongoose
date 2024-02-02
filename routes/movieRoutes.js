const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.get('/movies/add', movieController.showAddMovie);
router.post('/movies', movieController.addMovie);
router.get('/movies', movieController.getAllMovies);
router.get('/movies/:title', movieController.getMovieByTitle);
router.put('/movies/:id', movieController.updateMovieById);
router.delete('/movies/:id', movieController.deleteMovieById);

module.exports = router;

