
const apiMovies = [
    {
        type: "funny",
        movies: ["Hera Pheri", "Andaz Apna Apna", "Chupke Chupke", "Golmaal", "Bhool Bhulaiyaa"]
    },
    {
        type: "drama",
        movies: ["3 Idiots", "Taare Zameen Par", "Swades", "Dangal", "The Lunchbox"]
    },
    {
        type: "action",
        movies: ["War", "Vikram Vedha", "Pathaan", "Baahubali", "KGF"]
    },
    {
        type: "horror",
        movies: ["Stree", "Bhoot", "Pari", "Bhoot Police", "Raat"]
    },

];

const getMovies = (category) => {
    const delay = Math.floor(Math.random() * 4000) + 1000;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const gptMovies = apiMovies.find(movies => {
                return category.toLowerCase().split(" ").some(word => word === movies.type)
            })
            if (gptMovies) {
                resolve(gptMovies)
            }
        }, delay);
    })
}

export default getMovies;