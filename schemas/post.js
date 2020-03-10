const { GraphQLID, GraphQLObjectType, GraphQLList, GraphQLString } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Post',
  description: 'Post creados por los residentes',
  fields: {
    id: {
      type: GraphQLID,
    },
    date: {
      type: require('./primitives/date'),
    },
    tittle: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
    comments: {
      type: GraphQLList(require('./comments')),
    },
    user: {
      type: require('./user'),
    },
  },
});
