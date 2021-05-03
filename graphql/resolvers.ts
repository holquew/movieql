import {getById, movies, addMovie, deleteMovie} from "./db";

const resolvers = {
    Query: {
        movies: () => movies, 
        movie: (_: any, {id}: any) => getById(id),
    }, 
    Mutation: {
        addMovie: (_: any, {name, score}: any) => addMovie(name, score),
        deleteMovie: (_: any, {id}: any) => deleteMovie(id),
    }

};

export default resolvers;