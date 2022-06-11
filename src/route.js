const express = require('express');
const Questioncontroller = require('./controllers/Questioncontroller');
const RoomController = require('./controllers/RoomController');
//iniciando as rotas com exprees 
const route = express.Router();

//criando as rotas para serem usadas.
route.get('/', (req, res) => res.render("index", {page:'enter-room'}));
route.get('/create-pass', (req,res) => res.render('index', {page:'create-pass'}));

route.post('/create-room', RoomController.create);
route.get('/room/:room', RoomController.open);
route.post('/enterroom', RoomController.enter);

//passando a url para o controler. 
route.post('/question/:room/:question/:action', Questioncontroller.index );
route.post('/question/create/:room', Questioncontroller.create)

module.exports = route;

   