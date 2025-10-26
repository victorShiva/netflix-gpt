import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        movies &&
        <div className='px-3 md:pt-3 text-white'>
            <h1 className='text-lg md:text-3xl pb-2 font-mono font-semibold bg-gradient-to-r from-black '>{title}</h1>
            <div className='flex overflow-x-scroll scrollbar-hide'>
                <div className='flex gap-5'>
                    {
                        movies.map(movie => <MovieCard key={movie.id} posterPath={movie.poster_path} />)
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList