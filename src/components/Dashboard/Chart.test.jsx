import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import Chart from './Chart';

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

let chartEl;
beforeEach(async () => {
  render(<Chart />);
  chartEl = screen.getByTestId('chart');
});

test('It renders without crashing', () => {});

test('Chart renders on the page', () => {
  expect(chartEl).toBeInTheDocument();
});

test('XYPlot renders on the page', () => {
  expect(chartEl.firstChild).toHaveClass('rv-xy-plot');
});
