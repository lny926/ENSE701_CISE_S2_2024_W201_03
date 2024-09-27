import express from 'express';
import mongoose from 'mongoose';
import authRoutes from './routes/auth';

const app = express();

app.use(express.json()); // Parse incoming JSON requests
app.use('/api/auth', authRoutes);

// MongoDB connection
mongoose
  .connect(
    'mongodb+srv://mdd2557:<SCRAM>@speed.docah.mongodb.net/SPEED?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
