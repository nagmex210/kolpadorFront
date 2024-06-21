const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: String,
  winsTotal: { type: Number, default: 0 },
  wins: { type: Number, default: 0 },
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
