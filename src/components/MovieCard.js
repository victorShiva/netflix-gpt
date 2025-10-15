import React from 'react'
import { POSTER_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {

    return (
        <div className='w-64 h-36 opacity-50 hover:opacity-100 hover:w-72  hover:transition-all duration-1000'>
            <img className='h-full w-full object-fill ' src={POSTER_URL + posterPath} alt="posterLogo" />
        </div>
    )
}

export default MovieCard;