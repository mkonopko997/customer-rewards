import "whatwg-fetch";
import "@testing-library/jest-dom";
import { handlers } from "@/test/mocks/handlers";
import { setupServer } from "msw/node";

export const server = setupServer(...handlers);

beforeAll(() => {
  server.listen();
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => {
  server.close();
});
