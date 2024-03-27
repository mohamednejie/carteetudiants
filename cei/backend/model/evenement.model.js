const mongoose = require('mongoose');

const evenementSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true // Le champ "name" est requis
    },
    date: {
        type: Date,
        required: false // Le champ "date" est requis
    },
    lieu: {
        type: String,
        required: true // Le champ "lieu" est requis
    },
    description: {
        type: String,
        required: true // Le champ "description" est requis
    },
    duree: {
        type: String,
        required: true // Le champ "duree" est requis
    }
});

const evenement = mongoose.model('evenement',evenementSchema);

module.exports = evenement;
