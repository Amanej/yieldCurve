const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
 
const RateSchema = new Schema({
  _id: {
      type:ObjectId,
      //index: true,
      auto: true
  },
  instrument: String,
  title: String,
  data: [{
      date: String,
      value: String
  }],
  lastUpdated: Date
});

module.exports = Rate = mongoose.model('Rates',RateSchema);