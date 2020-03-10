const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Tickets',
  description: 'Tickets generados por los residentes',
  fields: {
    id: {
      type: GraphQLID,
    },
    type: {
      type: GraphQLString,
    },
    date: {
      type: GraphQLString,
    },
    hour: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLString,
    },
  },
});
