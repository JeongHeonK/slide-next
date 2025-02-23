import mongoose from 'mongoose'

const chartSchema = new mongoose.Schema({
  rank: { type: Number },
  title: { type: String },
  artist: { type: String },
})

// eslint-disable-next-line @typescript-eslint/dot-notation
const Chart = mongoose.models?.Chart || mongoose.model('Chart', chartSchema)

export default Chart
