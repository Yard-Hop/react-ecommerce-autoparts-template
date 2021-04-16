import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Messages from './Messages';

beforeEach(() => {
  render(<Messages />);
});

test('It renders without crashing', () => {
});

test('It contains the messages header', () => {
  const headerEl = screen.getByTestId('messages-header');
  expect(headerEl).toBeInTheDocument();
});

test('It contains an input field', () => {
  const inputEl = screen.getByTestId('messages-input');
  expect(inputEl).toBeInTheDocument();
});

test('It contains the send button', () => {
  const sendBtnEl = screen.getByTestId('messages-send-button');
  expect(sendBtnEl).toBeInTheDocument();
});
