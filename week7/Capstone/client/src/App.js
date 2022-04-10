import { useState, useEffect } from 'react'
import axios from 'axios';
import Movie from './components/Movie';
import MovieFormHandler from './components/MovieFormHandler';
import './App.css';

function App() {
  const [movies, setMovies] = useState([])

  const getMovies = () => {
    axios.get('/movies')
    .then(res => setMovies(res.data))
    .catch(err => console.log(err.response.data.errMsg))
  }

  const addMovie = (newMovie) => {
    axios.post('/movies', newMovie)
    .then(res => {
      setMovies(prevMovies => [...prevMovies, res.data])
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  const editMovie = (updates, movieId) => {
    axios.put(`/movies/${movieId}`, updates)
    .then(res => {
      setMovies(prevMovies => prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  const deleteMovie = (movieId) => {
    axios.delete(`/movies/${movieId}`)
    .then(res => {
      setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
    })
    .catch(err => console.log(err.response.data.errMsg))
  }

  useEffect(() => {
    getMovies()
  }, [])

  const moviesList = movies.map(movie =>
    <Movie 
      {...movie}
      deleteMovie={deleteMovie}
      editMovie={editMovie}
      key={movie._id}
    />
  )

  return (
    <div className="App">
      <MovieFormHandler btnText="Add Movie" submit={addMovie}/>
      {moviesList}
    </div>
  );
}

export default App;
