import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);

    return (
        <div className='bg-gray-800 w-1/2 m-auto relative translate-y-[30vh] rounded-sm'>
            <form className='flex '>
                <input type="text" className='py-2 px-4 m-4 w-2/3 rounded-sm' placeholder={lang[langKey].gptSearchPlaceholder} />
                <button className='py-2 px-6 m-4 bg-red-700 text-white font-semibold flex-grow rounded-sm'>{lang[langKey].search}</button>
            </form>
        </div>
    )
}

export default GPTSearchBar;
