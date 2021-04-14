import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import CartProduct from './CartProduct';

const product = {
  id: '0000000000',
  title: 'OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight',
  image: 'https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg',
  price: 96.98,
  location: { borough: 'Queens' },
  condition: 'Good',
};

const mockDeleteItemFunc = jest.fn();

beforeEach(() => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  render(<CartProduct {...product} deleteItem={mockDeleteItemFunc} />);
});

test('It renders without crashing', () => {
});

test('It renders the correct title', () => {
  const titleEl = screen.getByTestId('cart-product-title');
  expect(titleEl.textContent).toBe(product.title);
});

test('It renders the correct image', () => {
  const imageEl = screen.getByTestId('cart-product-image');
  expect(imageEl.src).toBe(product.image);
});

test('It renders the correct price', () => {
  const priceEl = screen.getByTestId('cart-product-price');
  expect(priceEl.textContent).toBe(product.price.toString());
});

test('It renders the correct location', () => {
  const locationEl = screen.getByTestId('cart-product-location');
  expect(locationEl.textContent).toBe(product.location.borough);
});

test('It renders the correct condition', () => {
  const conditionEl = screen.getByTestId('cart-product-condition');
  expect(conditionEl.textContent).toBe(`Condition: ${product.condition}`);
});

test('The remove from cart button works', () => {
  const removeBtnEl = screen.getByTestId('remove-from-cart');
  fireEvent.click(removeBtnEl);
  expect(mockDeleteItemFunc).toHaveBeenCalledTimes(1);
});
