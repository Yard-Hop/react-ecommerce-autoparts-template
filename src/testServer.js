/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom/extend-expect';
import 'whatwg-fetch'; // May not be necessary
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import mockProducts from '../config/mockProducts';
import mockPurchases from '../config/mockPurchases';

const server = setupServer(
  rest.get('http://localhost/api/products', (req, res, ctx) => res(ctx.status(200), ctx.json(mockProducts))),
  rest.get('http://localhost/api/productsByUser/*', (req, res, ctx) => res(ctx.status(200), ctx.json(mockProducts.products))),
  rest.get('http://localhost/api/ordersByUser/*', (req, res, ctx) => res(ctx.status(200), ctx.json(mockPurchases.purchases))),
  rest.get('*', (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: 'Please add request handler' }),
    );
  }),
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers);

export { server, rest };
