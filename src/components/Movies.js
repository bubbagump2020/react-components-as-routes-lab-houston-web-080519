import React from 'react';
import { movies } from '../data';

let moviesArray = movies

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {moviesArray.map(movie => {
          return(
            <div>
              {movie.title}
              <br></br>
              {movie.time}
              <br></br>
              {movie.genres}
              <br></br>
              {movie.metascore}
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
