import Link from 'next/link';
import Header from '../components/Header';

import * as grpc from 'grpc';
import * as recipe_grpc_pb from '../generated/recipe_grpc_pb';
import * as recipe_pb from '../generated/recipe_pb';

const Index = () => {
  const client = new recipe_grpc_pb.RecipeServiceClient(
    'localhost:8080',
    grpc.credentials.createInsecure(),
  );

  const req = new recipe_pb.GetByIdRequest();
  req.setId(1)

  client.getById(req, function (error, result) {
    if (error) console.log('Error: ', error);
    else console.log(result.toObject());
  });
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
