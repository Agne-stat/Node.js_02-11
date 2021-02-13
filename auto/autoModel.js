const mongoose = require('mongoose');
const validator = require('validator')

let AutoSchema = new mongoose.Schema({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String
    },
    year: {
        type: String,
        validate: {
            validator: validator.isDate,
            message: 'Wrong year format'
        }
    },
    mileage: {
        type: Number
    },
    gearbox: {
        type: String
    }
})

let Auto = mongoose.model('Auto', AutoSchema)

module.exports = Auto;