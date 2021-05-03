import { GraphQLServer  } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const PORT = process.env.PORT || 4000;
const server = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
}); 

server.start({port: PORT}, () => console.log(`[HQ] GraphQl Server Running on http://localhost:${PORT}`))


