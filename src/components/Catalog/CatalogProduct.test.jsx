/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CatalogProduct from './CatalogProduct';

const product = {
  id: '6068c295b4485b3d41daf0df',
  title:
    'OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight',
  make: 'Ford',
  year: '2007-01-01T00:00:00.000Z',
  borough: 'Brooklyn',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
  price: 96.98,
  sellerID: '60688c651d1599c6eb2b2aad',
  __v: 0,
};

beforeEach(() => {
  render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <CatalogProduct {...product} />
    </MemoryRouter>,
  );
});

test('It renders without crashing', () => {});

test('It renders the correct title', () => {
  const titleEl = screen.getByTestId('catalog-product-title');
  expect(titleEl.textContent).toBe(product.title);
});

test('It renders the correct price', () => {
  const priceEl = screen.getByTestId('catalog-product-price');
  expect(priceEl.textContent).toBe(product.price.toString());
});

test('It renders the correct make', () => {
  const makeEl = screen.getByTestId('catalog-product-make');
  expect(makeEl.textContent).toBe(product.make);
});

test('It renders the correct year', () => {
  const yearEl = screen.getByTestId('catalog-product-year');
  expect(yearEl.textContent).toBe(product.year.slice(0, 4));
});

test('It renders the correct desc', () => {
  const descEl = screen.getByTestId('catalog-product-desc');
  expect(descEl.textContent).toBe(product.description);
});

test('It renders the correct borough', () => {
  const boroughEl = screen.getByTestId('catalog-product-borough');
  expect(boroughEl.textContent).toBe(product.borough);
});
