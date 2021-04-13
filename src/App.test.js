import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { render } from '@testing-library/react';
import Header from './components/Header/Header';
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
});
