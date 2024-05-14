// var http = require("http")
// const PORT = 3001
// // const characters = require("./utils/data.js")
// const getCharById = require("./controllers/getCharById.js")

// http.createServer((req, res) => {

//     const { url } = req


//     res.setHeader('Access-Control-Allow-Origin', '*');

//     if (url.includes("/rickandmorty/character")) {
//         const id = url.split("/").pop( )
//         getCharById(res, id)
//     }

// }).listen(PORT, "127.0.0.1", () => {
//     console.log(`Server listening in port ${PORT}`);
// } )

require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser')
const routes = require("./routes/index")
const server = express();
const { sequelize } = require("./DB_connection")

const {PORT} = process.env

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use(bodyParser.json());

server.use('/rickandmorty', routes);

server.listen(PORT, async () => {
   await sequelize.sync({force:true})
   console.log('Server is listening on port:' + PORT);
});