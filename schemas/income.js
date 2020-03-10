const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Income',
  description: 'Ingresos por por fraccionamiento',
  fields: {
    id: {
      type: GraphQLID,
    },
    nameDepto: {
      type: GraphQLString,
    },
    numDepto: {
      type: GraphQLInt,
    },
    resident: {
      type: require('./user'),
    },
  },
});
