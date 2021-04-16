import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Sidebar from './Sidebar';

beforeEach(() => {
  render(
    <MemoryRouter initialEntries={['/Sidebar']} initialIndex={0}>
      <Sidebar />
    </MemoryRouter>,
  );
});

test('It renders without crashing', () => {});

test('It contains a Dashboard link', () => {
  const dashboardLinkEl = screen.getByTestId('sidebar-dashboard');
  expect(dashboardLinkEl).toBeInTheDocument();
});

test('It contains a New Listing link', () => {
  const newListingLinkEl = screen.getByTestId('sidebar-new-listing');
  expect(newListingLinkEl).toBeInTheDocument();
});

test('It contains a Inventory link', () => {
  const inventoryLinkEl = screen.getByTestId('sidebar-inventory');
  expect(inventoryLinkEl).toBeInTheDocument();
});

test('It contains a Purchases link', () => {
  const purchasesLinkEl = screen.getByTestId('sidebar-purchases');
  expect(purchasesLinkEl).toBeInTheDocument();
});

test('It contains a Messages link', () => {
  const messagesLinkEl = screen.getByTestId('sidebar-messages');
  expect(messagesLinkEl).toBeInTheDocument();
});

test('It contains a Settings link', () => {
  const settingsLinkEl = screen.getByTestId('sidebar-settings');
  expect(settingsLinkEl).toBeInTheDocument();
});
