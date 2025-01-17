import React, { createContext, useContext, useReducer } from 'react';

// Prepares the data layer
// eslint-disable-next-line func-names
export const StateContext = createContext([{ cart: [], user: null }, function () { }]);

// Wrap our app and provide the Data Layer to every component on our app
/* eslint react/prop-types: 0 */
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
