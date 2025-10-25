import { useRef } from 'react';
import lang from '../utils/languageConstants';
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGPTMovieResult } from '../utils/gptSlice';

const GPTSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null);
    const dispatch = useDispatch()

    const searchMovieTMDB = async (movie) => {
        const data = await fetch
            (
                'https://api.themoviedb.org/3/search/movie?query='
                + movie +
                '&include_adult=false&language=en-US&page=1',
                API_OPTIONS
            );

        const json = await data.json();
        return json.results;
    }

    const handleGPTSearchClick = async () => {

        //Make an API call to GPT and get Movie Reasults
        const gptResult = await openai(searchText.current.value);
        if (!gptResult) {
            console.log("Not finding data related to Input")
            return;
        }
        const gptMovies = gptResult.movies;
        const promiseArray = gptMovies.map(movie => searchMovieTMDB(movie));
        const TMDBResult = await Promise.all(promiseArray);
        dispatch(addGPTMovieResult({ movieNames: gptMovies, movieResults: TMDBResult }));
    }

    return (

        <div className='bg-gray-800 w-1/2 m-auto translate-y-[30vh] rounded-sm'>
            <form className='flex ' onSubmit={(e) => e.preventDefault()}>
                <input type="text" ref={searchText} className='py-2 px-4 m-4 w-2/3 rounded-sm' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='py-2 px-6 my-4 mr-4 bg-red-700 text-white font-semibold flex-grow rounded-sm' onClick={handleGPTSearchClick}>{lang[langKey].search}</button>
            </form>
        </div>

    )
}

export default GPTSearchBar;

