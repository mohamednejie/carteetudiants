const express = require('express');
const router = express.Router();

// Import des contrôleurs

const controllerevenement = require('../controller/evenement.controller');



// Routes pour les événements
router.get('/getevent', controllerevenement.getAllevenement);
router.post('/createevent', controllerevenement.createevenement);
router.put('/updateevent/:id', controllerevenement.updateevenement);
router.delete('/deleteevent/:id', controllerevenement.deleteevenement);
router.get('/getoneevenent/:id',controllerevenement.getOneEvenement);


module.exports = router;