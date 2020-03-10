const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Payments',
  description: 'Descripcion del pago (concepto)',
  fields: {
    idTransaction: {
      type: GraphQLID,
    },
    amount: {
      type: GraphQLString,
    },
    description: {
      type: GraphQLString,
    },
  },
});
