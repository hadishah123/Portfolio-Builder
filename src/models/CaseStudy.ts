import mongoose from "mongoose";

const CaseStudySchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: String,
  overview: String,
  media: [String],
  timeline: [String],
  tools: [String],
  outcomes: String,
  views: { type: Number, default: 0 },
  clicks: { type: Number, default: 0 },
});

export default mongoose.models.CaseStudy || mongoose.model("CaseStudy", CaseStudySchema);