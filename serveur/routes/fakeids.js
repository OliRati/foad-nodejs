const express = require('express');
const router = express.Router();
const FakeID = require('../models/fakeid.js');

router.get('/', async (req, res) => {
    try {
        const fakeids = await FakeID.find();
        res.json(fakeids);
    } catch {
        res.status(500).json(
            {
                error: err.message
            }
        );
    }
});

router.get('/:id', async (req, res) => {
    try {
        const fakeid = await FakeID.findById(req.params.id);
        if (!fakeid)
            return res.status(404).json({ error: "FakeID non trouvée !" });ù

        res.json(fakeid);
    } catch (err) {
        req.status(500).json({ error: err.message });
    }
});

router.post('/', async (req, res) => {
    try {
        const newFakeID = new FakeID(req.body);
        const savedFakeID = await newFakeID.save();
        res.status(201).json(savedFakeID);
    } catch {
        res.status(400).json(
            {
                error: err.message
            }
        );
    }
});


module.exports = router;