import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { StateProvider } from '../../StateProvider';
import reducer from '../../reducer';
import Dashboard from './Dashboard';

const initialState = {
  cart: [],
  user: {
    name: 'Tom',
    id: '60667a89a08ccaa3ed89c386',
  },
};

const originalWarn = global.console.warn;
beforeAll(() => {
  // Purposely suppress the following warning:
  // Warning: componentWillReceiveProps has been renamed, and is not recommended for use.
  // I have done this because this warning is being triggered by the third party
  // <XYPlot /> component from 'react-vis'
  global.console.warn = jest.fn((...args) => {
    if (
      typeof args[0] === 'string'
      && args[0].includes('Warning: componentWillReceiveProps has been renamed, and is not recommended for use.')
    ) {
      return;
    }
    // eslint-disable-next-line consistent-return
    return originalWarn.call(console, args);
  });
});

beforeEach(async () => {
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <MemoryRouter initialEntries={['/dashboard']} initialIndex={0}>
        <Dashboard />
      </MemoryRouter>
    </StateProvider>,
  );
});

test('It renders without crashing', () => {});

test('It renders the sidebar', () => {
  const sideBarEl = screen.getByTestId('sidebar');
  expect(sideBarEl).toBeInTheDocument();
});

test('It starts on the main page', () => {
  const mainEl = screen.getByTestId('main');
  expect(mainEl).toBeInTheDocument();
});

test('It renders the main cards', () => {
  const mainCardsEl = screen.getByTestId('main-cards');
  expect(mainCardsEl).toBeInTheDocument();
});

test('It renders the chart', () => {
  const chartEl = screen.getByTestId('chart');
  expect(chartEl).toBeInTheDocument();
});

test('It renders the stats reports', () => {
  const statsEl = screen.getByTestId('stats-reports');
  expect(statsEl).toBeInTheDocument();
});

test('It changes to the New Listing page when the use clicks New Listing', () => {
  const newListingNavEl = screen.getByTestId('sidebar-new-listing');

  // Navigate to the the new listing page
  fireEvent.click(newListingNavEl);

  // Expect the product form to render
  const productFormEl = screen.getByTestId('product-form');
  expect(productFormEl).toBeInTheDocument();
});

test('It changes to the Inventory page when the use clicks Inventory', () => {
  const inventoryNavEl = screen.getByTestId('sidebar-inventory');

  // Navigate to the the Inventory page
  fireEvent.click(inventoryNavEl);

  // Expect the inventory to render
  const inventoryEl = screen.getByTestId('inventory');
  expect(inventoryEl).toBeInTheDocument();
});

test('It changes to the Purchases page when the use clicks Purchases', () => {
  const purchasesNavEl = screen.getByTestId('sidebar-purchases');

  // Navigate to the the purchases page
  fireEvent.click(purchasesNavEl);

  // Expect the purchases to render
  const purchasesEl = screen.getByTestId('purchases');
  expect(purchasesEl).toBeInTheDocument();
});

test('It changes to the Messages page when the use clicks Messages', () => {
  const messagesNavEl = screen.getByTestId('sidebar-messages');

  // Navigate to the the messages page
  fireEvent.click(messagesNavEl);

  // Expect the messages to render
  const messagesEl = screen.getByTestId('messages');
  expect(messagesEl).toBeInTheDocument();
});
