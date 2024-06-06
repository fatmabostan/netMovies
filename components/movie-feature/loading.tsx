import React from 'react'
import styles from  "./styles.module.css"
import Loading from '../loading/Loading'


function MovieFeatureLoading() {
  return (
    <div className={styles.movieWrapper}>
      <Loading />
    </div>
  )
}

export default MovieFeatureLoading
