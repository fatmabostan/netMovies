const fetchMovieApp = async (path: string, query= "") => {
   try{ 
    const response = await fetch(`https://api.themoviedb.org/3/${path}?api_key=${process.env.API_KEY}&${query}`)
    return response.json();
    }
    catch(error)
    {
        throw new Error("Error Happened");
    }
}


const getTopRatedMovies = async () => {
    return fetchMovieApp("movie/top_rated");
}

const getPopularMovies = async () => {
  return fetchMovieApp("movie/popular");
}

const getCategories = async () => {
  return fetchMovieApp("genre/movie/list");
}

const getCategoryMovies = async (genreId: number) => {
  return fetchMovieApp("discover/movie", `with_genres=${genreId}`);

}

const getTMovies = async (movieId: number) => {
    return fetchMovieApp(`movie/${movieId}`);
}


export { getCategories,
    getCategoryMovies,
    getPopularMovies,
    getTopRatedMovies,
    getTMovies}