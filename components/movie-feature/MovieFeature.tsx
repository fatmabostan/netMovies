import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from "./styles.module.css"

type Movie = {
    id: number;
    poster_path: string | null;
    title: string;
    overview: string;
  };
  
  type MovieFeatureProps = {
    movie?: Movie;
    isCompact?: boolean;
  };

function MovieFeature({movie, isCompact = true}: MovieFeatureProps) { 
  return (
    <div className={styles.movieWrapper}>
      <h1 className={styles.movieTitle}>{movie?.title}</h1>
      <p className={`${styles.overwiev} ${ isCompact ? styles.shortOverview : "" }`}
      >{movie?.overview}</p>
      <div className={styles.actionButtons}>
        <Link className={styles.playButton} href={`/move/${movie?.id}`}>
        Play
        </Link>
      </div>
      <div className={styles.moviePoster}>
        <div className={styles.moviePosterOverlay}></div>
            <Image
            unoptimized
            src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
            alt={`title`}
            fill />
      </div>
    </div>
  ) 
}

export default MovieFeature
