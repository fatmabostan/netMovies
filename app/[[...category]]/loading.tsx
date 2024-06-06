import CategoriesLoading from '@/components/categories/loading'
import MovieFeatureLoading from '@/components/movie-feature/loading'
import MovieSectionLoading from '@/components/movies-section/loading'
import React from 'react'


function Loading() {
  return (
    <div>
        <div style={{padding:"100px 0"}}><MovieFeatureLoading /></div>
        <CategoriesLoading />
        <MovieSectionLoading />
        <MovieSectionLoading />
        <MovieSectionLoading />
    </div>
  )
}

export default Loading
