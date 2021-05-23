import fs from 'fs';
import path from 'path';

export default (req, res) => {
  if (req.method === 'POST') {
    const newFeedback = {
      id: new Date().getTime(),
      ...req.body,
    };

    const fullPath = path.join(process.cwd(), 'data', 'feedback.json');

    const fileData = fs.readFileSync(fullPath);
    const data = JSON.parse(fileData);

    data.push(newFeedback);

    fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));

    return res.status(201).json(newFeedback);
  }

  const fullPath = path.join(process.cwd(), 'data', 'feedback.json');

  const fileData = fs.readFileSync(fullPath);
  const data = JSON.parse(fileData);
  return res.status(200).json({ feedback: data });
};
