import { MovieCard } from "./MovieCard";
import movies from "./movies.json"
import styles from "./MovieGrid.module.css"


export const MovieGrid = () => {
    return (
        <ul className={styles.MovieGrid}>
            {movies.map((movies) => (
                <MovieCard key={movies.id} movies={movies}/>
            ))}
        </ul>
    );
}