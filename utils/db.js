import { MongoClient } from 'mongodb';

const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@test-cluster.6boug.mongodb.net/${process.env.mongodb_name}?retryWrites=true&w=majority`;
// { useUnifiedTopology: true }

export async function connectToDatabase() {
  const client = await MongoClient.connect(url);

  return client;
}
