// Variables de entorno
const { PORT = 5000 } = process.env;

// Librerias
const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const voyagerMiddleware = require('graphql-voyager/middleware').express;

// Dependencias
const schema = require('./schema');

// Constantes
const app = express();
const GraphqlFX = graphqlHttp({
  schema,
  graphiql: true,
});

function listenCallback() {
  console.log(`Server listen on ${PORT}`);
}

const middlewares = [
  bodyParser.urlencoded({ extended: true, limit: '5mb' }),
  bodyParser.json({ limit: '5mb' }),
  GraphqlFX,
];

app.use('/voyager', voyagerMiddleware({ endpointUrl: '/' }));
app.use(middlewares);
app.listen(PORT, listenCallback);
