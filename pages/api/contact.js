import { MongoClient } from 'mongodb';
import { url } from 'db/mongo';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { email, name, message } = req.body;

    if (!email || !name || !message) {
      return res.status(422).json({ message: 'Incorrect Data' });
    }

    let client = null;
    let result = null;
    try {
      const Mongo = new MongoClient(url, { useUnifiedTopology: true });
      client = await Mongo.connect();
    } catch (error) {
      return res.status(500).json({ message: 'Could not connect to the db.' });
    }

    const db = await client.db();

    try {
      result = await db.collection('messages').insertOne({ email, name, message });
    } catch (error) {
      client.close();
      return res.status(500).json({ message: 'Error when try to store data' });
    }

    client.close();
    return res.status(201).json({ message: 'Successfully stored', data: result.ops[0] });
  }
  return res.status(200).json({ name: 'John Doe' });
};
