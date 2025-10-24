import React from 'react'
import GPTSearchBar from './GPTSearchBar';
import GPTMovieSuggestion from './GPTMovieSuggestion';
import { BG_IMAGE } from '../utils/constants';

const GPTSearchPage = () => {
    return (
        <div>
            <img
                className='w-full h-full object-cover bg-gradient-to-b from-black fixed'
                src={BG_IMAGE}
                alt="bg-img" />
            <div>
                <GPTSearchBar />
                <GPTMovieSuggestion />
            </div>

        </div>
    )
}

export default GPTSearchPage;