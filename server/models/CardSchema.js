const mongoose = require('mongoose');
const userSchema = require('./UserSchema.js');

const card = new mongoose.Schema({
    number : { type: Number, 
    required: [true, "Número do cartão obrigatório"],
    },
    
    user: [userSchema],

    date : { type: Date, 
    required: [true, "Data de vencimento é obrigatório"],
    min: ["2020-01-01"],
    },
});

module.exports = card;