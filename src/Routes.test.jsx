import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Routes from './Routes';

let homeTitleEl;
let headerEl;
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
    <MemoryRouter initialEntries={['/']} initialIndex={0}>
      <Routes />
    </MemoryRouter>,
  );
  homeTitleEl = screen.getByTestId('home-title');
  headerEl = screen.getByTestId('header');
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

test('Starts on the home page', () => {
  expect(homeTitleEl).toBeInTheDocument();
});

test('Homepage contains a header', () => {
  expect(headerEl).toBeInTheDocument();
});

test('Homepage contains a navbar', () => {
  expect(navEl).toBeInTheDocument();
});

test('Home route works', () => {
  fireEvent.click(navHomeEl);
  expect(homeTitleEl).toBeInTheDocument();
});

test('Logo home route works', () => {
  fireEvent.click(navLogoEl);
  expect(homeTitleEl).toBeInTheDocument();
});

test('Catalogue route works', () => {
  fireEvent.click(navCatalogEl);
  const catalogEl = screen.getByTestId('catalog');
  expect(catalogEl).toBeInTheDocument();
});

test('Track order route works', () => {
  fireEvent.click(navTrackEl);
  const orderEl = screen.getByTestId('order');
  expect(orderEl).toBeInTheDocument();
});

test('Login route works', () => {
  fireEvent.click(navLoginEl);
  const loginEl = screen.getByTestId('login');
  expect(loginEl).toBeInTheDocument();
});

test('Sign up route works', () => {
  fireEvent.click(navSignupEl);
  const signupEl = screen.getByTestId('signup');
  expect(signupEl).toBeInTheDocument();
});

test('Shopping cart route works', () => {
  fireEvent.click(navCartEl);
  const cartEl = screen.getByTestId('cart');
  expect(cartEl).toBeInTheDocument();
});

test('Switches between multiple routes correctly', () => {
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
