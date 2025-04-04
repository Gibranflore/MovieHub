import styles from "./MovieCard.module.css";
export function MovieCard( {movies} ) {
    console.log(styles)

 const imageurl = "https://image.tmbd.org/t/p/w300" + movies.poster_path;
    return (
        <li class="text-white" className={MovieCard.styles}>
            <img
            width={230}
            height={345}
            className="movieImage"
            src={imageurl}
            alt={movies.title} />
            <div>{movies.title}</div>
        </li>
    );
}