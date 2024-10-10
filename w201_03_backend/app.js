import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'; // Import the cors package
import authRoutes from './src/routes/auth.js';

const app = express();

// Enable CORS
app.use(
  cors({
    origin: 'http://localhost:3000', // Allow requests from your frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the HTTP methods you want to allow
    credentials: true, // Optional if you need to allow cookies or other credentials
  }),
);

app.use(express.json()); // Parse incoming JSON requests
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose
  .connect(
    'mongodb+srv://mdd2557:group3@speed.docah.mongodb.net/SPEED?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
