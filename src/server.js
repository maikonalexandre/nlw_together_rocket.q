const express = require('express');
const route = require('./route');
const path = require('path');
//inicializando o express
const server = express();
//definindo a engine que vai ser lida no caso ejs
server.set('view engine', 'ejs');
//buscando styles view dentro do public
server.use(express.static('public'));   
//usando a pasta views 
server.set('views', path.join(__dirname, 'views') );

//midlere para poder pegar a senha que vem através de um controller
server.use(express.urlencoded({extended: true}));

//dizendo para o sever usar as rotas
server.use(route);
//definindo a porta onde o server vai ser iniciado 
server.listen(3000, () => console.log("RODANDO"));

 