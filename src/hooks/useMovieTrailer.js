import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideos } from "../utils/moviesSlice";
import { useEffect } from "react";

function useMovieTrailer(movie_id) {
    const dispatch = useDispatch();
    const trailerVideos = useSelector(store => store.movies.trailerVideos)

    useEffect(() => {
        const getMovieVideos = async () => {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS);
            const json = await data.json();
            const filterData = json.results.filter(video => video.type === "Trailer")
            const trailer = filterData.length ? filterData[0] : json.results[0];
            dispatch(addTrailerVideos(trailer));
        }

        !trailerVideos && getMovieVideos()
    }, [movie_id, trailerVideos, dispatch])
}

export default useMovieTrailer
