import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GPTMovieSuggestion = () => {
    const { movieNames, movieResults } = useSelector(store => store.gpt)
    if (!movieNames) return null;
    return (
        <div className='py-4 m-2 z-50 translate-y-[30vh] bg-black/90 text-white'>
            {
                movieNames.map((movieNames, index) => <MovieList key={movieNames} title={movieNames} movies={movieResults[index]} />)
            }
        </div>
    )
}

export default GPTMovieSuggestion