import Cors from 'cors';
import connectDB from '../../../db';
import Article from '../../../models/Article';

// Initialize the CORS middleware with allowed origin and credentials
const cors = Cors({
  origin: 'http://localhost:3000', // Allow requests from the frontend running on localhost:3000
  methods: ['GET', 'PUT', 'POST'], // Allow HTTP methods
  credentials: true, // Allow credentials (e.g., cookies, authorization headers)
});

// Helper function to run middleware in Next.js
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
  // Run the CORS middleware first
  await runMiddleware(req, res, cors);

  if (req.method === 'GET') {
    try {
      // Connect to MongoDB
      await connectDB();

      // Query for pending articles
      const articles = await Article.find({ status: 'pending' });

      if (!articles || articles.length === 0) {
        return res.status(200).json({ message: 'No pending articles found' });
      }

      // Respond with the articles
      return res.status(200).json({ articles });
    } catch (error) {
      console.error('Error fetching pending articles:', error);
      return res.status(500).json({ error: 'Failed to fetch articles' });
    }
  } else {
    // Handle unsupported methods
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ message: 'Method Not Allowed' });
  }
}
