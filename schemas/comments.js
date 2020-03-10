const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'Comments',
  description: 'Listado de comentarios creados por los residentes a un post',
  fields: {
    id: {
      type: GraphQLID,
    },
    title: {
      type: GraphQLString,
    },
    text: {
      type: GraphQLString,
    },
    user: {
      type: require('./user'),
    },
  },
});
