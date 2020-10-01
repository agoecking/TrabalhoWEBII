const mongoose = require('mongoose');

const product = new mongoose.Schema({
    name : { type: String, 
    required: [true, "Nome do livro obrigatório"],
    },
    
    author : { type: String, 
    required: [true, "Autor do livro é obrigatório",]
    },

    genre : { type: String, 
    required: [true, "Gênero do livro obrigatório"],
    },

    publisher : { type: String, 
    required: [true, "Editora do livro obrigatório"],
    },

    status : { type: String, 
    required: [true, "Status do livro obrigatório"],
    uppercase: true,
    enum: ["DISPONIVEL, INDISPONIVEL"],
    },
});

module.exports = product;