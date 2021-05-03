import {getMovie, getMovies, getSuggestions} from "./db";

const resolvers = {
    Query: {
        movies: (_: any, {limit, rating}: any) => getMovies(limit, rating),
        movie: (_: any, {id}: any) => getMovie(id),
        suggestions: (_: any, {id}: any) => getSuggestions(id),
    }
};

export default resolvers;