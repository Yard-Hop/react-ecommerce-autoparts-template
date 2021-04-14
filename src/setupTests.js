/* eslint-disable import/no-extraneous-dependencies */
import '@testing-library/jest-dom';
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'whatwg-fetch'; // May not be necessary
import './testServer';

configure({ adapter: new Adapter() });
