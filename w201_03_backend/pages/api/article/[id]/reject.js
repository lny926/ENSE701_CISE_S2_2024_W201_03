import Cors from 'cors';
import connectDB from '../../../db';
import Article from '../../../../models/Article';

// Initialize CORS middleware
const cors = Cors({
  origin: 'http://localhost:3000',  // Allow your frontend's origin
  methods: ['GET', 'PUT', 'POST'],  // Allowed methods
});

// Helper function to run middleware
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);  // Apply CORS middleware

  if (req.method === 'PUT') {
    await connectDB();

    try {
      const article = await Article.findById(req.query.id);
      if (!article) return res.status(404).json({ error: 'Article not found' });

      article.status = 'rejected';  // Change the status to 'rejected'
      await article.save();

      return res.status(200).json({ message: 'Article rejected' });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to reject article' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
