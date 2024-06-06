import MovieFeature from '@/components/movie-feature/MovieFeature'
import React from 'react'

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
} 

interface MovieContainerProps {
  movieDetail: Movie;
}

const MovieContainer: React.FC<MovieContainerProps> = ({ movieDetail }) => {
  return (
    <MovieFeature movie={movieDetail} isCompact={true} />
  );
};

export default MovieContainer;