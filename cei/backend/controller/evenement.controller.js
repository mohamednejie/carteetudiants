const evenement = require('../model/evenement.model');


exports.createevenement = async (req, res) => {
    try {
        const { name, date,    lieu  ,  description ,duree} = req.body;
        const newevenement = new evenement({ name, date,    lieu  ,  description ,duree });
        const savedevenement = await newevenement.save();
        res.json(savedevenement);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllevenement = async (req, res) => {
    try {
        const evenements = await evenement.find();
        res.json(evenements);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
exports.getOneEvenement = async (req, res) => {
    const eventId = req.params.id; 
    try {
        const evenements = await evenement.findById(eventId); 
        if (!evenements) {
            return res.status(404).json({ message: 'Événement non trouvé' });
        }
        res.json(evenements);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: 'Erreur lors de la récupération de l\'événement' });
    }
};

exports.updateevenement = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, date,    lieu  ,  description ,duree } = req.body;
        const updatedevenement = await evenement.findByIdAndUpdate(id, { name, date,    lieu  ,  description ,duree}, { new: true });
        res.json(updatedevenement);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.deleteevenement = async (req, res) => {
    try {
        const { id } = req.params;
        await evenement.findByIdAndDelete(id);
        res.json({ message: "evenement deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

