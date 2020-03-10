const { GraphQLID, GraphQLObjectType, GraphQLList } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Blog',
  description: 'Listado de post creados por los residentes',
  fields: {
    id: {
      type: GraphQLID,
    },
    posts: {
      type: GraphQLList(require('./post')),
    },
  },
});
