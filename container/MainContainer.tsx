import React from 'react'
import MovieFeature from '@/components/movie-feature/MovieFeature'
import Categories from '@/components/categories/Categories'
import MovieSection from "@/components/movies-section/MovieSection"

type Movie = {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type selectCategory = {
  id: string | null;
  movies: Movie[];
};

type Category = {
  [x: string]: any
  id: number | null;
  name: string;
};

type MainContainerProps = {
  selectedCategory: selectCategory;
  topRatedMovies: Movie[];
  popularMovies: Movie[];
  categories: Category;
};

const MainContainer: React.FC<MainContainerProps> = ({ topRatedMovies, selectedCategory, popularMovies, categories}) => {
  return (
    <div>
      <MovieFeature movie={topRatedMovies?.[4]} />
      <Categories categories={categories.slice(0, 10)} />
      {selectedCategory.movies.length > 0 && (
        <MovieSection
          title={categories.find((genre:{id:number, name:string}) => genre.id.toString() === selectedCategory.id)?.name}
          movies={selectedCategory.movies}
        />
      )}
      <MovieSection title="Popular Films" movies={topRatedMovies.slice(0, 13)} />
      <MovieSection title="Your Favorites" movies={popularMovies.slice(1, 13)} />
    </div>
  );
};

export default MainContainer;

