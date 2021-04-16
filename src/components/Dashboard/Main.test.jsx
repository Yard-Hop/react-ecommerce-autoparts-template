import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Main from './Main';

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

beforeEach(() => {
  render(<Main />);
});

test('It renders without crashing', () => {});

test('It contains the main cards', () => {
  const mainCardsEl = screen.getByTestId('main-cards');
  expect(mainCardsEl).toBeInTheDocument();
});

test('It contains the chart', () => {
  const chartEl = screen.getByTestId('chart');
  expect(chartEl).toBeInTheDocument();
});

test('It contains the stats reports', () => {
  const statsReportEl = screen.getByTestId('stats-reports');
  expect(statsReportEl).toBeInTheDocument();
});
