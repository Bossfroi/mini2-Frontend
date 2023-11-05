const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Ito ay naglalikha ng schema para sa user registration
const registerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    family_name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
    },
    picture: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true // Nagdaragdag ng mga timestamps (created_at at updated_at) sa bawat rekord
});

// Ito ay naglilikha ng model para sa 'authgoogles' collection sa database
const register = mongoose.model('authgoogles', registerSchema);

module.exports = register; // Inilalabas ang model para sa paggamit sa iba't-ibang bahagi ng server application
