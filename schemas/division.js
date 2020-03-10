const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Division',
  description: 'Lista de fraccionamientos',
  fields: {
    id: {
      type: GraphQLID,
    },
    nameDivision: {
      type: GraphQLString,
    },
    address: {
      type: require('./address'),
    },
    blocks: {
      type: require('./block'),
    },
    incoms: {
      type: GraphQLList(require('./income')),
    },
  },
});
