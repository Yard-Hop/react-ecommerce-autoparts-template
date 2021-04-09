import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { render, fireEvent, act } from '@testing-library/react';
import mockProducts from '../config/mockProducts';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import App from './App';

describe('App tests', () => {
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
});

describe('App header functionality', () => {
  beforeAll(() => {
    // Mock the fetch function
    global.fetch = jest.fn().mockImplementation(() => {});
    // Spy on the fetch function
    jest.spyOn(window, 'fetch');
  });

  // Clean up the mocked fetch function
  afterAll(() => delete global.fetch);

  it('stays unchanged if the user clicks home', () => {
    const { getByText } = render(<App />);

    // Click button
    fireEvent.click(getByText('Home'));

    const title = getByText(/Items near you:/i);
    expect(title).toBeInTheDocument();
  });

  it('changes to the catalogue page if you click on catalog', async () => {
    // Mock the fetch response for /api/products
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => (mockProducts),
    });

    // Render the App component
    let component;
    await act(async () => {
      component = await render(<App />);
    });
    const { getByText, queryByText, getAllByText } = component;

    // Click button
    await act(async () => {
      await fireEvent.click(getByText('Catalog'));
    });

    // Expect old title to no longer show
    expect(queryByText('Items near you:')).not.toBeInTheDocument();

    // Expect Catalog to show up more than once
    // Because it should be in the header plus the new title
    const catalogTextArr = getAllByText(/Catalog/i);
    expect(catalogTextArr.length > 1).toBe(true);
  });

  xit('changes to the the order page when you click Track Order', async () => {
  });
});
