import { useSelector } from 'react-redux';
import MovieList from './MovieList'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        <div className='bg-black bg-gradient-to-r from-black'>
            <div className='top-0 md:-top-72 relative md:pl-8 z-40'>
                <MovieList
                    title={"Now Playing"}
                    movies={movies?.nowPlayingMovies}
                />
                <MovieList
                    title={"Papuler"}
                    movies={movies?.populerMovies}
                />
                <MovieList
                    title={"Trending"}
                    movies={movies?.trendingMovies}
                />
                <MovieList
                    title={"New Movies"}
                    movies={movies?.populerMovies}
                />
                <MovieList
                    title={"Comming Soon"}
                    movies={movies?.nowPlayingMovies}
                />
            </div>
        </div>
    )
}

export default SecondaryContainer;