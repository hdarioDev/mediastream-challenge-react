import React from 'react';
import { movies } from 'data';
import { MovieItem } from '../MovieItem';

const MovieList = () => {
  return (
    <section className="movies__list">
      <ul>
        {movies.map((item) => (
          <MovieItem data={item} key={item.id} />
        ))}
      </ul>
    </section>
  );
};

export default MovieList;