const  { MongoClient } = require("mongodb");

const url = "mongodb+srv://ShalabaMera:Eugostodepao09@cluster0.qzxoiow.mongodb.net/";

let db = null;

async function conectarDb() {
    if(db == null) {
        const client = new MongoClient(url);
        await client.connect();
        db = client.db("agenda");
    }

    return db;

}

module.exports = conectarDb;