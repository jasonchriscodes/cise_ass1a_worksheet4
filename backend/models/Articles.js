const mongoose = require('mongoose');
const { claimTypes } = require('../../config/claimTypes');
const { levelEvidence } = require('../../config/levelEvidence');

const EvidenceSchema = new mongoose.Schema({
  author: {
    type: String,
    required: false,
  },
  title: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: false,
  },
  year: {
    type: Number,
    required: false,
  },
  doi: {
    type: String,
    required: false,
  },
  claim_benefit: {
    type: String,
    enum: [claimTypes],
    required: true,
  },
  level_of_evidence: {
    type: String,
    enum: [levelEvidence],
    required: true,
  },
});

module.exports = Evidence = mongoose.model("evidence", EvidenceSchema);