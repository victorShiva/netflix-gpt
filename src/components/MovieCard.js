import React from 'react'
import { POSTER_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {

    return posterPath && (
        <div className='w-24 h-44 hover:w-28  md:w-36 md:h-64 opacity-70 hover:opacity-100 md:hover:w-44  hover:transition-all duration-1000'>
            <img className='h-full w-full object-fill ' src={POSTER_URL + posterPath} alt="posterLogo" />
        </div>
    )
}

export default MovieCard;