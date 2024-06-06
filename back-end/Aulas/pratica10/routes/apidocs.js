const express = require('express');
const swaggerUI = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml');

const router = express.Router();
const File = fs.readFileSync('./swagger.yaml', 'utf-8');
const SwaggerDocument = YAML.parse(File);

router.swaggerUI.serve('/');

router.get('/', swaggerUI.setup())


