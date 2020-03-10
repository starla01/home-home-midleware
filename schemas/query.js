const { GraphQLObjectType } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Query",
  description: "Metodos de consulta",
  fields: {
    viewer: {
      type: require("./viewer")
    }
  }
});
