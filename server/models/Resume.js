const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  title: {
    type: String,
    default: 'Untitled Resume'
  },
  theme: {
    type: String,
    default: '#10c4ec'
  },
  template: {
    type: String,
    default: 'divider'
  },
  visibleSections: {
    type: Object,
    default: {
      education: true,
      skills: true,
      work: true,
      projects: true,
      certificates: true,
      achievements: true
    }
  },
  about: {
    type: Object,
    default: {}
  },
  educationList: {
    type: Array,
    default: []
  },
  skills: {
    type: Array,
    default: []
  },
  workList: {
    type: Array,
    default: []
  },
  projects: {
    type: Array,
    default: []
  },
  certificates: {
    type: Array,
    default: []
  },
  achievementList: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Resume', ResumeSchema);