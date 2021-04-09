import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { render, fireEvent, act } from '@testing-library/react';
import mockProducts from '../config/mockProducts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import App from './App';

describe('App tests', () => {
  beforeAll(() => {
    global.fetch = jest.fn().mockImplementation(() => {});
    jest.spyOn(window, 'fetch');
  });
  afterAll(() => delete global.fetch);

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    // Enzyme
    shallow(<App />);
  });

  it('has the correct welcome text', () => {
    const { getByText } = render(<App />);
    const title = getByText(/Items near you:/i);
    expect(title).toBeInTheDocument();
  });

  it('contains the header', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Header />)).toBe(true);
  });

  it('contains the footer', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<Footer />)).toBe(true);
  });

  it('stays unchanged if the user clicks home', () => {
    const { getByText } = render(<App />);

    // Click button
    fireEvent.click(getByText('Home'));

    const title = getByText(/Items near you:/i);
    expect(title).toBeInTheDocument();
  });

  it('changes pages if you click on catalog', async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => (mockProducts),
    });

    let getByText;
    await act(async () => {
      const { getByText: getText } = await render(<App />);
      getByText = getText;
    });
    // const { getByText: getText } = await render(<App />);

    // Click button
    await act(async () => {
      await fireEvent.click(getByText('Catalog'));
    });
    // await fireEvent.click(getByText('Catalog'));

    // const title = getByText(/Items near you:/i);
    // expect(title).not.toBeInTheDocument();
  });
});
