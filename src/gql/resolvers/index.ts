import { db } from "../../db.js";

export const resolvers = {
  Query: {
    books: () => db.books,
    users: () => db.users,
    products: () => db.products,
    product: (_parent: any, args: { productId: string }, _context: any) => {
      const result = db.products.find(
        (product) => String(product.id) === args.productId
      );
      return result;
    },
  },
};
