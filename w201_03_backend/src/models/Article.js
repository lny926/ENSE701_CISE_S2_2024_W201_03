import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  journal: { type: String, required: true },
  year: { type: Number, required: true },
  status: {
    type: String,
    default: 'pending',
    enum: ['pending', 'approved', 'rejected'],
  },
});

export default mongoose.models.Article ||
  mongoose.model('Article', ArticleSchema);
