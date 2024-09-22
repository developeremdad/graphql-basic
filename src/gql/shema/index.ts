export const typeDefs = `#graphql

  type Book {
    title: String
    author: String
  }

  type Product {
  id:                 ID!
  title:              String
  description:        String
  price:              Int
  discountPercentage: Int
  rating:             Int
  stock:              Int
  brand:              String
  category:           String
  thumbnail:          String
}


  type User{
  name: String
  email: String
  password: String
  age: Int
  }

  type Query {
    books: [Book]
    users: [User]
    products: [Product]
    product(productId: ID!): Product
  }
`;
