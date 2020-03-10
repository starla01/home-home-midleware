const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
  name: 'UserStatus',
  values: {
    ACTIVE: { value: 'ACTIVE' },
    DELINQUENT: { value: 'DELINQUENT' },
  },
});
