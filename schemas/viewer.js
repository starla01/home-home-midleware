const { GraphQLID, GraphQLObjectType } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Viewer",
  description: "Usuario que consulta la aplicación",
  fields: {
    id: {
      type: GraphQLID
    }
  }
});
