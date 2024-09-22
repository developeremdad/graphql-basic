import { db } from "../../db.js";

export const resolvers = {
  Query: {
    // get all books
    books: () => db.books,
    // get all users
    users: () => db.users,
    // get all categories
    categories: () => db.categories,
    // get a single category by category id
    category: (_parent: any, args: { categoryId: string }, _context: any) => {
      return db.categories.find((cate) => cate.id === args.categoryId);
    },
    // Get all products
    products: () => db.products,
    // get a single product by product id
    product: (_parent: any, args: { productId: string }, _context: any) => {
      return db.products.find((product) => product.id === args.productId);
    },
  },
  Product: {
    category: ({ categoryId }, _args: any, _context: any) => {
      // console.log(parent.categoryId);
      const result = db.products.find(
        (product) => product.categoryId === categoryId
      );
      return result;
    },
    reviews: (parent: any, _args: any, _context: any) => {
      const result = db.reviews.filter(
        (review) => review.productId === parent.id
      );
      return result;
    },
  },
  Category: {
    products: ({ id }, _args: any, _context: any) => {
      // console.log(parent);
      const result = db.products.filter((product) => product.categoryId === id);
      return result;
    },
  },
};
