const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Ito ay naglalikha ng schema para sa 'authGoogle' collection
const dataschema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },

    companyname: {
        type: String,
        required: true,
        trim: true
    },
    companyaddress: {
        type: String,
        required: true,
        trim: true
    },
    businesstype: {
        type: String,
        required: true,
        trim: true
    },
    companynumber: {
        type: String,
        required: true,
        trim: true
    },
}, {
    timestamps: true // Nagdaragdag ng mga timestamps (created_at at updated_at) sa bawat rekord
});

// Ito ay naglilikha ng model para sa 'authGoogle' collection sa doocument sa mongodb
const data = mongoose.model('UserData', dataschema);

module.exports = data; // Inilalabas ang model para sa paggamit sa iba't-ibang bahagi ng server application