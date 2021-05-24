import { url } from 'db/mongo';
import { MongoClient } from 'mongodb';

export default async (req, res) => {
  const Mongo = new MongoClient(url, { useUnifiedTopology: true });
  const client = await Mongo.connect();
  const db = await client.db();

  if (req.method === 'POST') {
    const { email, text, name } = req.body;
    const newComment = await db.collection('comments').insertOne({
      eventId: req.query.id, email, text, name,
    });

    res.status(201).json(newComment.ops[0]);
  } else if (req.method === 'GET') {
    const comments = await db.collection('comments').find({ eventId: req.query.id }).toArray();

    client.close();
    res.status(200).json({ comments });
  }
};
