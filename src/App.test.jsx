import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import { StateProvider } from './StateProvider';
import reducer, { initialState } from './reducer';

let homeTitleEl;
let headerEl;
let footerEl;
let navEl;
let navHomeEl;
let navCatalogEl;
let navTrackEl;
let navLoginEl;
let navSignupEl;
let navCartEl;
let navLogoEl;

beforeEach(() => {
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <App />
      </MemoryRouter>
    </StateProvider>,
  );
  homeTitleEl = screen.getByTestId('home-title');
  headerEl = screen.getByTestId('header');
  footerEl = screen.getByTestId('footer');
  navEl = screen.getByTestId('nav');
  navHomeEl = screen.getByTestId('nav-home');
  navCatalogEl = screen.getByTestId('nav-catalog');
  navTrackEl = screen.getByTestId('nav-track');
  navLoginEl = screen.getByTestId('nav-login');
  navSignupEl = screen.getByTestId('nav-signup');
  navCartEl = screen.getByTestId('nav-cart');
  navLogoEl = screen.getByTestId('nav-logo');
});

test('Renders without crashing', () => {
});

test('Has the correct welcome text', () => {
  expect(homeTitleEl).toBeInTheDocument();
});

test('Contains the header', () => {
  expect(headerEl).toBeInTheDocument();
});

test('Contains the footer', () => {
  expect(footerEl).toBeInTheDocument();
});

test('Contains the navbar', () => {
  expect(navEl).toBeInTheDocument();
});

test('Stays unchanged if the user clicks home', () => {
  fireEvent.click(navHomeEl);
  expect(homeTitleEl).toBeInTheDocument();
});

test('Stays unchanged if the user clicks the logo', () => {
  fireEvent.click(navLogoEl);
  expect(homeTitleEl).toBeInTheDocument();
});

test('Changes to the Catalogue page if you click on catalog', () => {
  fireEvent.click(navCatalogEl);
  const catalogEl = screen.getByTestId('catalog');
  expect(catalogEl).toBeInTheDocument();
});

test('Changes to the Order page when you click Track Order', () => {
  fireEvent.click(navTrackEl);
  const orderEl = screen.getByTestId('order');
  expect(orderEl).toBeInTheDocument();
});

test('Changes to the Login page when you click the Login button', () => {
  fireEvent.click(navLoginEl);
  const loginEl = screen.getByTestId('login');
  expect(loginEl).toBeInTheDocument();
});

test('Changes to the Sign up page when you click the Create an Account button', () => {
  fireEvent.click(navSignupEl);
  const signupEl = screen.getByTestId('signup');
  expect(signupEl).toBeInTheDocument();
});

test('Changes to the shopping cart page when you click the shopping cart', () => {
  fireEvent.click(navCartEl);
  const cartEl = screen.getByTestId('cart');
  expect(cartEl).toBeInTheDocument();
});

test('Changes between multiple pages accurately', () => {
  // Switch to the catalog page
  fireEvent.click(navCatalogEl);
  const catalogEl = screen.getByTestId('catalog');
  expect(catalogEl).toBeInTheDocument();

  // Switch the to the track order page
  fireEvent.click(navTrackEl);
  const orderEl = screen.getByTestId('order');
  expect(orderEl).toBeInTheDocument();

  // Switch the to the shopping cart
  fireEvent.click(navCartEl);
  const cartEl = screen.getByTestId('cart');
  expect(cartEl).toBeInTheDocument();

  // Switch back home
  fireEvent.click(navHomeEl);
  const homeEl = screen.getByTestId('home-title');
  expect(homeEl).toBeInTheDocument();

  // Go to the login page
  fireEvent.click(navLoginEl);
  const loginEl = screen.getByTestId('login');
  expect(loginEl).toBeInTheDocument();

  // Go to the sign up page
  const loginSignupEl = screen.getByTestId('login-signup-link');
  fireEvent.click(loginSignupEl);
  const signupEl = screen.getByTestId('signup');
  expect(signupEl).toBeInTheDocument();
});

test('Shopping cart count increments by 1 for each item added to the cart', () => {
  // Get add to cart buttons
  const addToCartEls = screen.getAllByTestId('add-to-cart');

  // Add two items to the cart
  fireEvent.click(addToCartEls[0]);
  fireEvent.click(addToCartEls[1]);

  // Expect there to be two items on the navbar cart counter
  const cartCountEl = screen.getByTestId('cart-count');
  expect(cartCountEl.textContent).toBe('2');
});

test('Shopping cart is correctly updated with the correct items in users basket', () => {
  // Get add to cart buttons
  const addToCartEls = screen.getAllByTestId('add-to-cart');

  // Get Product Titles
  const productTitleEls = screen.getAllByTestId('product-title');

  // Add two items to the cart
  fireEvent.click(addToCartEls[0]);
  fireEvent.click(addToCartEls[1]);

  // Navigate to the cart page
  fireEvent.click(navCartEl);

  // Get Product Titles in the Cart
  const cartProductTitleEls = screen.getAllByTestId('cart-product-title');

  // Expect to find the same products in the cart as added to the cart on the home page
  expect(cartProductTitleEls[0].textContent).toBe(productTitleEls[0].textContent);
  expect(cartProductTitleEls[1].textContent).toBe(productTitleEls[1].textContent);
});
