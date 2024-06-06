import React from 'react'
import MovieContainer from "@/container/MovieContainer"
import { notFound } from 'next/navigation';
import { getTMovies } from '@/services';

async function MoviePage ({ params}: { params: { id: string } })  {

  const getMovie = await getTMovies(Number(params.id));

    if (!getMovie) {
      notFound()
    } 
    
    return <MovieContainer movieDetail={getMovie} /> 
   
}

export default MoviePage;