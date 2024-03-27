
const reunion = require('../model/reunion.model');


const createreunion = async (req, res) => {
    try {
        const reunions = await reunion.create(req.body);
        res.status(201).json(reunions);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getallreunion = async (req, res) => {
    try {
        const reunions = await reunion.find();
        res.json(reunions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
const getonereunion = async (req, res) => {
    const reunionId = req.params.id; 
    try {
        const reunions = await reunion.findById(reunionId); 
        if (!reunions) {
            return res.status(404).json({ message: 'reunion non trouvé' });
        }
        res.json(reunions);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération de la reunions' });
    }
};
const updatereunion = async (req, res) => {
    try {
        const reunion = await reunion.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(formation);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deletereunion= async (req, res) => {
    try {
        await reunion.findByIdAndDelete(req.params.id);
        res.json({ message: 'reunion supprimée avec succès.' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createreunion,
    getallreunion,
    updatereunion,
    deletereunion,
    getonereunion
};
