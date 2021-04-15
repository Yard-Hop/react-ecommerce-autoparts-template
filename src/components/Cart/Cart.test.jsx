import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Cart from './Cart';
import { StateProvider } from '../../StateProvider';
import reducer from '../../reducer';

const initialState = {
  cart: [
    {
      id: '0000000000',
      title: 'OE Ford 2007 Mustang Part LH Left Driver Tail Light Lamp Assembly Taillight',
      image: 'https://i.pinimg.com/originals/3b/21/ae/3b21aeed0898505c1b02cf56aee15ab5.jpg',
      price: 96.98,
      location: { borough: 'Queens' },
      condition: 'Good',
    },
    {
      id: '0000000001',
      title: '2016 2017 2018 2019 2020 Chevrolet Camaro ZL1 Front Bumper Cover OEM',
      image: 'https://i.ebayimg.com/images/g/iIUAAOSwo0RfDJJq/s-l300.jpg',
      price: 445.98,
      location: { borough: 'Brooklyn' },
      condition: 'Good',
    },
  ],
  user: null,
};

let cartEl;
let cartProductTitleEls;

beforeEach(() => {
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <Cart />
    </StateProvider>,
  );
  cartEl = screen.getByTestId('cart');
  cartProductTitleEls = screen.getAllByTestId('cart-product-title');
});

test('Renders without crashing', () => {
});

test('Has the correct welcome text', () => {
  expect(cartEl).toBeInTheDocument();
});

test('It adds the correct number of items to the cart', () => {
  expect(cartProductTitleEls.length).toBe(2);
});

test('It renders the correct titles for each item in the cart', () => {
  expect(cartProductTitleEls.length).toBe(2);
  expect(cartProductTitleEls[0].textContent).toBe(initialState.cart[0].title);
  expect(cartProductTitleEls[1].textContent).toBe(initialState.cart[1].title);
});

test('It displays the correct subtotal', () => {
  const subTotalEl = screen.getByTestId('subtotal');
  const price = initialState.cart[0].price + initialState.cart[1].price;
  expect(subTotalEl.textContent).toBe(`Subtotal (2 items): $${price}`);
});

test('Remove from cart button removes item from cart', () => {
  const removeFromCartEls = screen.getAllByTestId('remove-from-cart');

  // Remove item from cart
  fireEvent.click(removeFromCartEls[0]);

  // Check item is removed
  const cartProductTitleEl = screen.getByTestId('cart-product-title');
  expect(cartProductTitleEl.textContent).toBe(initialState.cart[1].title);
});

test('Remove from cart button correctly updates the subtotal', () => {
  const removeFromCartEls = screen.getAllByTestId('remove-from-cart');

  // Remove item from cart
  fireEvent.click(removeFromCartEls[0]);

  // Check subtotal has been updated correctly
  const { price } = initialState.cart[1];
  const subTotalEl = screen.getByTestId('subtotal');
  expect(subTotalEl.textContent).toBe(`Subtotal (1 items): $${price}`);
});
