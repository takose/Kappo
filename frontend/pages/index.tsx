import Link from 'next/link';
import Header from '../components/Header';

import * as grpc from 'grpc';
import * as recipe_grpc_pb from '../generated/recipe_grpc_pb';
import * as recipe_pb from '../generated/recipe_pb';

import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { onError } from 'apollo-link-error';
import { ApolloLink } from 'apollo-link';
import gql from 'graphql-tag';
import fetch from 'node-fetch';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: 'http://localhost:4000/', fetch: fetch });

const gqlClient = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
          ),
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    link,
  ]),
  cache: new InMemoryCache()
});

const Index = () => {
  gqlClient.query({
    query: gql`
      {
        books {
          title
          author
        }
      }
    `
  }).then(result => console.log(result['data']));
  // const client = new recipe_grpc_pb.RecipeServiceClient(
  //   'localhost:8080',
  //   grpc.credentials.createInsecure(),
  // );

  // const req = new recipe_pb.GetByIdRequest();
  // req.setId(1)

  // client.getById(req, function (error, result) {
  //   if (error) console.log('Error: ', error);
  //   else console.log(result.toObject());
  // });
  return (
    <div>
      <Header />
      <Link href="/about">
        <a>About Page</a>
      </Link>
      <p>Hello Next.js</p>
    </div>
  )
};

export default Index;
