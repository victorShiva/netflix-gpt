import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { BG_IMAGE } from '../utils/constants';

const GPTSearchPage = () => {
    return (
        <div>
            <img
                className='absolute w-full h-full object-cover bg-gradient-to-b from-black'
                src={BG_IMAGE}
                alt="bg-img" />
            <GPTSearchBar />
            <GPTMovieSuggestion />
        </div>
    )
}

export default GPTSearchPage;