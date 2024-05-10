const supertest = require('supertest');

const app = require('../app');


const req = supertest(app);

describe('API Loja Virtual - Produtos', () => {
    // test("Deve retornar 201 e um JASON no POST /produtos", 
    // async() => {
    //     const res = await req.post('/produtos').send({
    //          nome: "banana",
    //          preco: 12.0, 
    //     });
    //     expect(res.status).toBe(201);
    //     expect(res.type).toBe("application/json");
    // });

    test("Deve retornar 422 e JSON no POST /produto", async() =>{
        const res = await req.post("/produtos").send({});
        expect(res.status).toBe(422);
        expect(res.type).toBe("application/json");
    })
}); 