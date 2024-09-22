import { db } from "../../db.js";

export const resolvers = {
  Query: {
    books: () => db.books,
    users: () => db.users,
    categories: () => db.categories,
    category: (_parent: any, args: { categoryId: string }, _context: any) => {
      return db.categories.find((cate) => cate.id === args.categoryId);
    },
    products: () => db.products,
    product: (_parent: any, args: { productId: string }, _context: any) => {
      return db.products.find((product) => product.id === args.productId);
    },
  },
};
