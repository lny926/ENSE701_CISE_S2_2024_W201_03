import Cors from 'cors';
import connectDB from '../../../db';
import Article from '../../../models/Article';

// Initialize CORS middleware
const cors = Cors({
  origin: 'http://localhost:3000',  // Allow requests from the frontend
  methods: ['GET', 'PUT', 'POST'],  // Allowed HTTP methods
});

// Helper function to run the CORS middleware
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

  if (req.method === 'GET') {
    try {
      await connectDB();  // Ensure the database connection is established
      const articles = await Article.find({ status: 'pending' });
      if (articles.length === 0) {
        return res.status(200).json({ message: 'No pending articles found' });
      }
      return res.status(200).json({ articles });
    } catch (error) {
      return res.status(500).json({ error: 'Failed to fetch articles' });
    }
  } else {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
