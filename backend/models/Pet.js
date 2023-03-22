const mongoose = require('mongoose');
const { Schema } = mongoose;

const PetSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    name: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ["male", "female"]
    },
    tag: {
        type: String,
        required: true
    },
    breed: {
        type: String,
        required: true,
        default: "stray"
    },
    description: {
        type: String,
        required: true,
    },
    location: {
        city: {
            type: String,
            required: true
        },
        state: {
            type: String,
            required: true
        }
    },
    contact: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    date: {
        type: Date,
        default: Date.now
    },
    img:
    {
        type: String
    }
});

module.exports = mongoose.model('pet', PetSchema);