const { ApolloServer, gql } = require('apollo-server');

import * as grpc from 'grpc';
import * as recipe_grpc_pb from '../frontend/generated/recipe_grpc_pb';
import * as recipe_pb from '../frontend/generated/recipe_pb';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Recipe {
    title: String
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    recipes: [recipe]
  }
`;

const client = new recipe_grpc_pb.RecipeServiceClient(
  'localhost:8080',
  grpc.credentials.createInsecure(),
);

const req = new recipe_pb.GetByIdRequest();
req.setId(1)

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    recipes: () => {
      client.getById(req, function (error, result) {
        console.log(result.toObject())
        if (error) return({error});
        else return(result.toObject());
      });
    },
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
