import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        movies &&
        <div className='px-5 pt-7 text-white '>
            <h1 className='text-3xl py-2 font-mono font-semibold bg-gradient-to-r from-black '>{title}</h1>
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