const { GraphQLObjectType, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Address',
  description: 'Listado de direcciones',
  fields: {
    street: {
      type: GraphQLString,
    },
    state: {
      type: GraphQLString,
    },
    city: {
      type: GraphQLString,
    },
    country: {
      type: GraphQLString,
    },
    postalCode: {
      type: GraphQLString,
    },
    typeAddress: {
      type: require('../enum/address.type'),
    },
  },
});
