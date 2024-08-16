import mongoose from 'mongoose';

const EmergencySchema = new mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  illness: {
    type: String,
    required: true,
  },
  priority: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

const Emergency = mongoose.model('Emergency', EmergencySchema);
export default Emergency;
