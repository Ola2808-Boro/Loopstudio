import { rest } from "msw";
import { products } from "mocks/data/products";

export const handlers = [
  rest.get("/products", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ products }));
  }),
];
