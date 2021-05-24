import { MongoClient } from 'mongodb';
import { url } from 'db/mongo';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email } = req.body;

    const Mongo = new MongoClient(url, { useUnifiedTopology: true });
    const client = await Mongo.connect();
    const db = await client.db();

    const newSubscription = await db.collection('emails').insertOne({ email });

    client.close();

    return res.status(201).json(newSubscription.ops[0]);
  }
  return res.status(200).json({ name: 'John Doe' });
};
