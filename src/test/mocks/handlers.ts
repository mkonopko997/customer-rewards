import { rest } from "msw";
import transactions from "@/test/mocks/transactions.json";

export const handlers = [
  rest.get("/transactions", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(transactions));
  }),
];
