import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

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

beforeEach(() => {
  render(
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <App />
    </MemoryRouter>,
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

// Test shopping cart
test('Changes to the shopping cart page when you click the shopping cart', () => {
  fireEvent.click(navCartEl);
  const cartEl = screen.getByTestId('cart');
  expect(cartEl).toBeInTheDocument();
});

// Navigate between multiple pages

// Test items near you exist
