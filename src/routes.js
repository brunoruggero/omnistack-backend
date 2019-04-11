const express = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');
const routes = express.Router();

const BoxController = require('./controllers/BoxController');
const FileController = require('./controllers/FileController');

//GET    -> buscar alguma informação do serviço
//POST   -> criar
//PUT    -> editar
//DELETE -> deletar

routes.post("/boxes", BoxController.store);
routes.get("/boxes/:id", BoxController.show);

routes.post("/boxes/:id/files", multer(multerConfig).single('file'), FileController.store);

// EXEMPLO
//req -> requisição feita ao servidor
//res -> retorna uma resposta ao cliente
/*
routes.get('/teste', (req, res) => {
    return res.send('Hello Rocket');
})
*/

//exporta a variavel routes, exportando de um arquivo e importando para outro arquivo
module.exports = routes;

