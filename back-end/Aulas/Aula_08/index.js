const { MongoClient, ObjectId } = require('mongodb')
const url = 'mongodb+srv://Guss:SuaIrma@cluster0.i5czwfv.mongodb.net/'
const client = new MongoClient(url);

async function conectar(){
    try {
        await client.connect()
    } catch(error) {
        console.log("Deu ruim", error)
    }
}

async function inserir(produto){
    const db = client.db('loja');
    return await db.collection('produtos')
    .insertOne(produto)
}

async function listar(){
    const db = client.db('loja');
    return await db.collection("produtos")
    .find({}).toArray()
}

async function atualizar(id, produto){
    const db = client.db('loja');
    return await db.collection('produtos')
    .updateOne({_id: new ObjectId(id) }, {$set: produto})
}

async function remover(id){
    const db = client.db('loja');
    return await db.collection('produtos')
    .deleteOne({_id: new ObjectId(id)})
}

async function main() {
    await conectar();
    let result = await inserir({
        nome: "Banana", preco: 18.00
    });
    console.log("Produto inserido", result);
    result = await listar();
    console.log("lista de produtos", result)
    result = await atualizar ("662a56a7a0b8db97dfba30bc", {nome: "maça", preco: 22.54})
    console.log("Produto atualizado", result)
    result = await remover("662a56df2c410b932d562868")
    console.log("Produto removido", result)

    await client.close();
}

main()