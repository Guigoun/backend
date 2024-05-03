const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
    nome: {
        type: String,
        trim: true,
        uppercase: true,
        required: [true, "Nome é obrigatorio"],
        minlength: [3, "Nome tem no minimo 3 caracteres"]
      },
      preco: { type: Number, required: [true, "Preco é obrigatorio"] },
      quantidade: { type: Number, default: 0 },
      min: [0, "Preco deve ser >= 0"]
    
})

module.exports = mongoose.model("Produto", produtoSchema);