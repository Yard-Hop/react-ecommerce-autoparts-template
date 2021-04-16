import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import mockProducts from '../../../../config/mockProducts';
import { StateProvider } from '../../../StateProvider';
import reducer from '../../../reducer';
import Inventory from './Inventory';
import { server, rest } from '../../../testServer';

const initialState = {
  cart: [],
  user: {
    name: 'Tom',
    id: '60667a89a08ccaa3ed89c386',
  },
};

beforeEach(async () => {
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Inventory />
    </StateProvider>,
  );
  // Wait for the fetch request to resolve
  await screen.findAllByText(/OE Ford 2007/i);
});

test('It renders without crashing', () => {});

test('It renders with the correct number of items', () => {
  const itemEls = screen.getAllByTestId('inventory-item');
  expect(itemEls.length).toBe(mockProducts.products.length);
});

test('Renders the correct item titles', () => {
  // Get all the item titles
  const titleEls = screen.getAllByTestId('inventory-item-title');

  // Checks each item has the correct title
  for (let i = 0; i < titleEls.length; i += 1) {
    expect(titleEls[i].textContent).toBe(`Title: ${mockProducts.products[i].title}`);
  }
});

test('Renders the correct item prices', () => {
  // Get all the item prices
  const priceEls = screen.getAllByTestId('inventory-item-price');

  // Checks each item has the correct price
  for (let i = 0; i < priceEls.length; i += 1) {
    expect(priceEls[i].textContent).toBe(`Price: ${mockProducts.products[i].price}`);
  }
});

test('Renders the correct item makes', () => {
  // Get all the item makes
  const makeEls = screen.getAllByTestId('inventory-item-make');

  // Checks each item has the correct make
  for (let i = 0; i < makeEls.length; i += 1) {
    expect(makeEls[i].textContent).toBe(`Make: ${mockProducts.products[i].make}`);
  }
});

test('Renders the correct item years', () => {
  // Get all the item years
  const yearEls = screen.getAllByTestId('inventory-item-year');

  // Checks each item has the correct year
  for (let i = 0; i < yearEls.length; i += 1) {
    expect(yearEls[i].textContent).toBe(`Year: ${mockProducts.products[i].year.slice(0, 4)}`);
  }
});

test('Renders the correct item descriptions', () => {
  // Get all the item descriptions
  const descEls = screen.getAllByTestId('inventory-item-desc');

  // Checks each item has the correct description
  for (let i = 0; i < descEls.length; i += 1) {
    expect(descEls[i].textContent).toBe(`Description: ${mockProducts.products[i].description}`);
  }
});

test('Renders the correct item boroughs', () => {
  // Get all the item boroughs
  const boroughEls = screen.getAllByTestId('inventory-item-borough');

  // Checks each item has the correct borough
  for (let i = 0; i < boroughEls.length; i += 1) {
    expect(boroughEls[i].textContent).toBe(`Borough: ${mockProducts.products[i].borough}`);
  }
});

test('Handles errors from the server', async () => {
  // Set it up so that the test server returns a 404 response
  server.use(
    rest.get('http://localhost/api/productsByUser/*', (req, res, ctx) => res(ctx.status(404))),
  );

  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Inventory />
    </StateProvider>,
  );

  // Expect to find an error warning
  const element = await screen.findByText(/There was an error!/i);
  expect(element).toBeInTheDocument();
});
