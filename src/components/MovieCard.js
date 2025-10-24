import React from 'react'
import { POSTER_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {

    return posterPath && (
        <div className='w-36 h-64 opacity-70 hover:opacity-100 hover:w-44  hover:transition-all duration-1000'>
            <img className='h-full w-full object-fill ' src={POSTER_URL + posterPath} alt="posterLogo" />
        </div>
    )
}

export default MovieCard;