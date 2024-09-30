import mongoose from 'mongoose';

const ArticleSchema = new mongoose.Schema({
  title: String,
  author: String,
  journal: String,
  year: Number,
  status: String,
});

export default mongoose.models.Article || mongoose.model('Article', ArticleSchema);
