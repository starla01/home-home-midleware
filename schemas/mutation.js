const { GraphQLObjectType } = require("graphql");

module.exports = new GraphQLObjectType({
  name: "Mutation",
  description: "Metodos de actualizacion",
  fields: {
    viewer: {
      type: require("./viewer")
    }
  }
});
