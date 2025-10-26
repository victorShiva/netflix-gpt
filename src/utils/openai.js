
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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const gptMovies = apiMovies.find(movies => {
                return category.toLowerCase().split(" ").some(word => word === movies.type)
            })
            if (gptMovies) {
                resolve(gptMovies)
            }
        }, 200);
    })
}

export default getMovies;