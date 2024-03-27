// controllers/formationsController.js
const Formation = require('../model/formation.model');
const moment = require('moment');

// CREATE: Créer une nouvelle formation

const createFormation = async (req, res) => {
    try {
        const { titre, description, date_debut, date_fin } = req.body;
        console.log('Données reçues :', req.body); 
        // Valider le format de la date de début
        const dateDebutRegex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateDebutRegex.test(date_debut) || !dateDebutRegex.test(date_fin)) {
            return res.status(400).json({ message: 'Format de date de début invalide.' });
        }

        const formation = await Formation.create({ titre, description, date_debut, date_fin });
        res.status(201).json(formation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// READ: Obtenir toutes les formations
const getAllFormations = async (req, res) => {
    try {
        const formations = await Formation.find();
        res.json(formations);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// UPDATE: Mettre à jour une formation existante
const updateFormation = async (req, res) => {
    try {
        const formation = await Formation.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(formation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// DELETE: Supprimer une formation existante
const deleteFormation = async (req, res) => {
    try {
        await Formation.findByIdAndDelete(req.params.id);
        res.json({ message: 'Formation supprimée avec succès.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const getoneformation=async(req,res)=>{
    try{
        const formation = await Formation.findById(req.params.id);
        res.json(formation);
    }catch(error){
        console.log("error")
    }
}
module.exports = {
    createFormation,
    getAllFormations,
    updateFormation,
    deleteFormation,
    getoneformation
};
