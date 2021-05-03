import {getById, movies} from "./db";

const resolvers = {
    Query: {
        movies: () => movies, 
        movie: (_: any, {id}: any) => getById(id),
    }
};

export default resolvers;