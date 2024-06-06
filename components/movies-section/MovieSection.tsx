import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from  "./styles.module.css";

interface SectionProb{
  id: number;
  title: string;
  poster_path: string;
};
  
interface SectionFeatureProps{
  title?: string;
  movies?: SectionProb[];
};

const MovieSection: React.FC<SectionFeatureProps> = ({ title, movies }) => {
  return (
    <div className={styles.MovieSection}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.movies}>
        {movies?.map((movie) => (
          <div className={styles.movie} key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
                <Image 
                    fill
                    unoptimized
                    alt={movie.title}
                    src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieSection;

