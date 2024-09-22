export const typeDefs = `#graphql

  type Book {
    title: String
    author: String
  }

  type Product {
    id: ID!
    name: String
    image: String
    description: String
    price: Float
    quantity: Int
    onStock: Boolean
    category: Category
    reviews: [Review]
}

  type Category {
    id: ID!
    name: String
    products: [Product]
  }

  type Review {
    id: ID!
    review: String
    rating: Float
    date: String
    productId: String
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
    categories: [Category]
    category(categoryId: ID!): Category
    product(productId: ID!): Product
  }
`;
