const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name : { type: String, 
    required: [true, "Nome do cliente obrigatório"],
    },
    
    email : { type: String, 
    required: [true, "Email é obrigatório",]
    },

    address : { type: String, 
    required: [true, "Endereço é obrigatório"],
    },

    password : { type: String, 
    required: [true, "Senha é obrigatório"],
    },
});

module.exports = mongoose.model("User", userSchema);