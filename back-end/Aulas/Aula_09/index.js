require('dotenv').config();
const mongoose = require('mongoose');
const Produto = require('./modelo')

const url = process.env.MONGODB_URL;

async function main() {
    try{
     await mongoose.connect(url);
     console.log("De boas");
    } catch (err){
        console.log("Deu ruim!", err.menssage)
    }
   
    const produto = new Produto({
        nome: "u     ",
        preco: -21
    });
    try {
        await produto.save();
    } catch (err){
        for(let key in err.errors){
            console.log(err.errors[key].message);
        }
    }

    await produto.save();
    console.log(produto);

    //inserir 1 produto
   /* const produto = await Produto.create({
        nome: "uva",
        preco: 32.5,
        quantidade: 10
    })
    console.log(produto);*/

    // inserir N produtos
    /*const produtos = await Produto.insertMany([
        {nome: 'pera', preco: 10, quantidade: 1},
        {nome: 'maca', preco: 15, quantidade: 7},
        {nome: 'mamao', preco: 20, quantidade: 5}
    ]);
    console.log(produtos);*/

    // consultar produto
    // const produto = await Produto.findOne(({ nome: "maca" }));
    // console.log(produto);

    // atualaizar produto
    // const produto = await Produto.findOneAndUpdate(
    //     { nome: "banana" }, 
    //     { nome: "banana nanica", preco: 8.5, quantidade: 20 }
    // );

    // console.log(produto);

    // remover produto
    // const produto = await Produto.findOneAndDelete({ nome: "banana" });
    // const produto = await Produto.deleteOne({ nome: "banana" });
    // console.log(produto);

    await mongoose.disconnect();
}

main();