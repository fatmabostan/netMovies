import React from 'react'
import Skeleton from '../skeleton'
import styles from "./styles.module.css"

function MovieSectionLoading() {
  return (
    <div className={styles.moviesSection}>
        <Skeleton width={128} height={36} />
        <div className={styles.movies}>
       {Array(7).fill(null)
        .map((_, index) => ( <Skeleton key={index} />))
        }
        </div>
    </div>
  )
}

export default MovieSectionLoading
