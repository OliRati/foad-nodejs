const mongoose = require('mongoose');

const fakeidSchema = new mongoose.Schema(
    {
        prenom: { type: String, required: true },
        nom: { type: String, required: true },
        email: { type: String, required: true },
        age: { type: Number, required: true },
        rue: { type: String, required: true },
        ville: { type: String, required: true },
        pays: { type: String, required: true },
        avatar: { type: String, required: true }
    }
);

module.exports = mongoose.model('FakeID', fakeidSchema);