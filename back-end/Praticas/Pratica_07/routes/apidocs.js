// Aqui estamos importando o módulo 'express' para criar um aplicativo Express.
const express = require('express');
// Aqui estamos importando o módulo 'swagger-ui-express' que nos permite visualizar a documentação do Swagger no navegador.
const swaggerUI = require('swagger-ui-express');
// Aqui estamos importando o módulo 'yaml' para trabalhar com arquivos YAML.
const YAML = require('yaml');
// Aqui estamos importando o módulo 'fs' (File System) que nos permite trabalhar com o sistema de arquivos do Node.js.
const fs = require('fs');


// Aqui estamos lendo o conteúdo do arquivo 'swagger.yaml' de forma síncrona usando o método `readFileSync` do módulo `fs`.
const file = fs.readFileSync('./swagger.yaml', 'utf-8');
// Aqui estamos analisando o conteúdo do arquivo YAML que lemos anteriormente e convertendo-o em um objeto JavaScript usando o método `parse` do módulo `YAML`.
const swaggerDoc = YAML.parse(file);
// Aqui estamos usando o método `Router()` do objeto `express` para criar um novo objeto de roteador.
const router = express.Router();
// Aqui estamos configurando o roteador para usar o middleware `swaggerUI.serve` para servir a interface do Swagger.
router.use('/', swaggerUI.serve);
// Aqui estamos configurando uma rota GET no roteador para renderizar a documentação do Swagger usando `swaggerUI.setup`.
router.get('/', swaggerUI.setup(swaggerDoc));

module.exports = router;
