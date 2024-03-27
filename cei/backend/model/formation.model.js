// models/formation.js
const mongoose = require('mongoose');

const formationSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    description: { type: String },
    date_debut: { type: Date },
    date_fin: { type: Date }
    

});

module.exports = mongoose.model('Formation', formationSchema);
