const Movie = require('../models/movie');

const showAddMovie = (req, res) => {
  res.render('addMovie');
};

const addMovie = async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.render('movieDetails', { movie: newMovie }); // Utiliser res.render avec Pug
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.render('movieList', { movies }); // Utiliser res.render avec Pug
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const getMovieByTitle = async (req, res) => {
  const { title } = req.query;

  try {
    const movie = await Movie.findOne({ title });
    if (movie) {
      res.render('movieDetails', { movie }); // Utiliser res.render avec Pug
    } else {
      res.status(404).json({ message: 'Film non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const updateMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedMovie = await Movie.findOneAndUpdate({ _id: id }, req.body, { new: true });
    if (updatedMovie) {
      res.redirect('/movies'); // Rediriger vers la liste de tous les films après la mise à jour
    } else {
      res.status(404).json({ message: 'Film non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


const deleteMovieById = async (req, res) => {
  const { id } = req.params;

  try {
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (deletedMovie) {
      res.redirect('/movies'); // Rediriger vers la liste de tous les films après la suppression
    } else {
      res.status(404).json({ message: 'Film non trouvé' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


module.exports = {
  showAddMovie,
  addMovie,
  getAllMovies,
  getMovieByTitle,
  updateMovieById,
  deleteMovieById,
};
//

