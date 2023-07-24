import React from 'react';
import MovieCard from '../components/MovieCard';
import './MoviesGrid.css';

const moviesURL = import.meta.env.VITE_API;
const apikey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = React.useState([]);
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setTopMovies(data.results);
  };

  React.useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${apikey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <div className="container">
      <h2 className="title">Melhores filmes: </h2>
      <div className="moviesContainer">
        {topMovies.length === 0 && <p>Carregando...</p>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard movie={movie} key={movie.id} />)}
      </div>
    </div>
  );
};

export default Home;
