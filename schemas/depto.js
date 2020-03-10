const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Depto',
  description: 'Departamento',
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
