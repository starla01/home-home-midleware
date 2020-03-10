const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLList } = require('graphql');

module.exports = new GraphQLObjectType({
  name: 'User',
  description: 'Esquema de usuario',
  fields: {
    id: {
      type: GraphQLID,
    },
    name: {
      type: GraphQLString,
    },
    lastName: {
      type: GraphQLString,
    },
    mail: {
      type: GraphQLString,
    },
    userType: {
      type: require('../enum/user.type'),
    },
    userStatus: {
      type: require('../enum/user.status'),
    },
    idLigthing: {
      type: GraphQLString,
    },
    address: {
      type: require('./address'),
    },
    payments: {
      type: GraphQLList(require('./payments')),
    },
    tickets: {
      type: GraphQLList(require('./tickets')),
    },
  },
});
