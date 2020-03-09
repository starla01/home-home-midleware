const express = require("express");
const app = express();
const Schema = require("./schema");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { PORT = 2020 } = process.env;
const GraphqlFX = graphqlHttp({ schema: Schema, graphiql: true });

function customMiddleware(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
  );
  res.statusCode = 200;
  if (req.method === "OPTIONS") return res.send();
}

function listenCallback() {
  console.log(`Server listen on ${PORT}`);
}

const middlewares = [
  bodyParser.urlencoded({ extended: true, limit: "5mb" }),
  bodyParser.json({ limit: "5mb" }),
  customMiddleware,
  GraphqlFX
];

app.use(middlewares);

app.listen(PORT, listenCallback);
