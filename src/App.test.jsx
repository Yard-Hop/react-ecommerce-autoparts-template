import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App, { Routes } from './App';

let homeTitleEl;
let headerEl;
let navEl;
let navHomeEl;
let navCatalogEl;
let navTrackEl;

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
  render(<App />);
  const footerEl = screen.getByTestId('footer');
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

// test('Changes to the Login page when you click the Login button', () => {
//   fireEvent.CLICK
// }