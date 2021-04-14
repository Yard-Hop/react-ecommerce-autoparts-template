import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Catalog from './Catalog';
import { StateProvider } from '../../StateProvider';
import reducer, { initialState } from '../../reducer';
import mockProducts from '../../../config/mockProducts';
import { server, rest } from '../../testServer';

beforeEach(async () => {
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Catalog />
      </MemoryRouter>
    </StateProvider>,
  );
  // Wait for the fetch request to resolve
  await screen.findAllByText(/OE Ford 2007/i);
});

test('Catalog renders without crashing', () => {
});

test('Renders the correct amount of products', () => {
  // Get all the product titles
  const titleEls = screen.getAllByTestId('catalog-product-title');

  // Check there are the correct amount
  expect(titleEls.length).toBe(mockProducts.products.length);
});

test('Renders the correct product titles', () => {
  // Get all the product titles
  const titleEls = screen.getAllByTestId('catalog-product-title');

  // Checks each product has the correct title
  for (let i = 0; i < titleEls.length; i += 1) {
    expect(titleEls[i].textContent).toBe(mockProducts.products[i].title);
  }
});

test('Renders the correct product prices', () => {
  // Get all the product prices
  const priceEls = screen.getAllByTestId('catalog-product-price');

  // Checks each product has the correct price
  for (let i = 0; i < priceEls.length; i += 1) {
    expect(priceEls[i].textContent).toBe(mockProducts.products[i].price.toString());
  }
});

test('Renders the correct product makes', () => {
  // Get all the product makes
  const makeEls = screen.getAllByTestId('catalog-product-make');

  // Checks each product has the correct make
  for (let i = 0; i < makeEls.length; i += 1) {
    expect(makeEls[i].textContent).toBe(mockProducts.products[i].make);
  }
});

test('Renders the correct product years', () => {
  // Get all the product years
  const yearEls = screen.getAllByTestId('catalog-product-year');

  // Checks each product has the correct year
  for (let i = 0; i < yearEls.length; i += 1) {
    expect(yearEls[i].textContent).toBe(mockProducts.products[i].year.slice(0, 4));
  }
});

test('Renders the correct product descriptions', () => {
  // Get all the product descriptions
  const descEls = screen.getAllByTestId('catalog-product-desc');

  // Checks each product has the correct description
  for (let i = 0; i < descEls.length; i += 1) {
    expect(descEls[i].textContent).toBe(mockProducts.products[i].description);
  }
});

test('Renders the correct product boroughs', () => {
  // Get all the product boroughs
  const boroughEls = screen.getAllByTestId('catalog-product-borough');

  // Checks each product has the correct borough
  for (let i = 0; i < boroughEls.length; i += 1) {
    expect(boroughEls[i].textContent).toBe(mockProducts.products[i].borough);
  }
});

test('Handles errors from the server', async () => {
  // Set it up so that the test server returns a 404 response
  server.use(
    rest.get('http://localhost/api/products', (req, res, ctx) => res(ctx.status(404))),
  );

  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Catalog />
      </MemoryRouter>
    </StateProvider>,
  );

  // Expect to find an error warning
  const element = await screen.findByText(/There was an error!/i);
  expect(element).toBeInTheDocument();
});
