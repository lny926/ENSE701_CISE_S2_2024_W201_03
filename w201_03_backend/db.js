import mongoose from 'mongoose';

mongoose
  .connect(
    'mongodb+srv://mdd2557:<db_password>@speed.docah.mongodb.net/SPEED?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));
