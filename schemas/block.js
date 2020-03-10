const { GraphQLObjectType, GraphQLString, GraphQLList } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Block',
  description: 'Bloques (Privadas dentro del fraccionamiento)',
  fields: {
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    ltd: {
      type: GraphQLString,
    },
    lng: {
      type: GraphQLString,
    },
    deptos: {
      type: GraphQLList(require('./depto')),
    },
  },
});
