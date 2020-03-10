const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
  name: 'UserType',
  values: {
    ADMIN: { value: 'ADMIN' },
    RESIDENT: { value: 'RESIDENT' },
  },
});
