import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Listing {
    description: String!
    id: ID!
    title: String!
  }

  type Query {
    listings: [Listing!]
  }
`;

export default typeDefs;




