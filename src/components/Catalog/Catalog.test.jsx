import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Catalog from './Catalog';
import { StateProvider } from '../../StateProvider';
import reducer, { initialState } from '../../reducer';
// import { server, rest } from '../testServer';

beforeEach(() => {
  render(
    <StateProvider initialState={initialState} reducer={reducer}>
      <MemoryRouter initialEntries={['/']} initialIndex={0}>
        <Catalog />
      </MemoryRouter>
    </StateProvider>,
  );
});

test('renders learn react link', async () => {
  const element = await screen.findAllByText(/Ford/i);
});

// test('handles errors', async () => {
//   server.use(
//     rest.get('https://api.exchangeratesapi.io/latest', (req, res, ctx) => res(ctx.status(404))),
//   );

//   render(
//     <SWRConfig value={{ dedupingInterval: 0 }}>
//       <OtherApp />
//     </SWRConfig>,
//   );
//   const element = await screen.findByText(/Error!/i);
//   expect(element).toBeInTheDocument();
// });
