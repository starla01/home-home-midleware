const { GraphQLEnumType } = require('graphql');

module.exports = new GraphQLEnumType({
  name: 'AddressType',
  values: {
    RESIDENT: { value: 'RESIDENT' },
    DIVISION: { value: 'DIVISION' },
  },
});
