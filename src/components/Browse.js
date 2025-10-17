import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopulerMovies from "../hooks/usePopulerMovies";
import GPTSearchPage from "./GPTSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
    const showGPTSearch = useSelector(store => store.gpt?.showGPTSearch);
    useNowPlayingMovies();
    usePopulerMovies();

    return <div>
        <Header />
        {
            showGPTSearch ? <GPTSearchPage />
                :
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
        }


    </div>
}

export default Browse;