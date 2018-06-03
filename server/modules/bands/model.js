import mongoose, { Schema } from 'mongoose';

const BandSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  desription: {
    type: String,
    required: true
  },
  genre: String
});

export default mongoose.model('Band', BandSchema);