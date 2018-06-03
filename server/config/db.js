import mongoose from 'mongoose';

export default () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/bandowl');
  mongoose.connection
    .once('open', () => console.log('MongoDB running'))
    .on('error', err => console.log(err));
};