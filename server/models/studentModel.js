const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  grade: {
    type: String,
    default: '6'
  },
  contact: {
    type: String,
    required: true
  },
  district: {
    type: String,
    default: '1'
  },
  city: {
    type: String,
    required: true
  },
  firstSegment: {
    type: String,
    default: '1'
  },
  secondSegment: {
    type: String,
    default: '6'
  },
  thirdSegment: {
    type: String,
    default: '12'
  },
  artistic: {
    type: String,
    default: '6'
  },
  registerDate: {
    type: Date,
    required: true
  },
});

// Set firstSegment, secondSegment, and thirdSegment based on grade
studentSchema.pre('save', function(next) {
  if (this.grade === '10' || this.grade === '11') {
    this.firstSegment = '1';
    this.secondSegment = '6';
    this.thirdSegment = '12';
    this.artistic = undefined;
  } else {
    this.firstSegment = undefined;
    this.secondSegment = undefined;
    this.thirdSegment = undefined;
    this.artistic = '6';
  }
  next();
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
