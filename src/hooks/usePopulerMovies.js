import { useDispatch, useSelector } from "react-redux";
import { addPopulerMovies, addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";


const usePopulerMovies = () => {
    const dispatch = useDispatch();
    const { populerMovies, trendingMovies } = useSelector(store => store.movies)


    useEffect(() => {
        const getPopulerMovies = async () => {
            const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-IN&page=1", API_OPTIONS);
            const json = await data.json();
            dispatch(addPopulerMovies(json.results));
        }
        const getTrendingMovies = async () => {
            const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-IN&page=4", API_OPTIONS);
            const json = await data.json();
            dispatch(addTrendingMovies(json.results));
        }


        !populerMovies && getPopulerMovies();
        !trendingMovies && getTrendingMovies()
    }, [dispatch, populerMovies, trendingMovies])
}

export default usePopulerMovies;