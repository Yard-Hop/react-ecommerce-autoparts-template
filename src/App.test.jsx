import React from 'react';
import App from './App';
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

let homeTitleEl;
let headerEl;
let footerEl;
let navEl;

beforeEach(() => {
  render(<App />);
  homeTitleEl = screen.getByTestId('home-title');
  headerEl = screen.getByTestId('header');
  footerEl = screen.getByTestId('footer');
  navEl = screen.getByTestId('nav');
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
  // Click button
  fireEvent.click(screen.getByText('Home'));

  const title = screen.getByText(/Items near you:/i);
  expect(title).toBeInTheDocument();
});
