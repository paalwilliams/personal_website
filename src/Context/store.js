// store.js
import React, { createContext, useContext, useReducer } from 'react';

const StoreContext = createContext();
const initialState = {
  contact: false,
  name: '',
  message: '',
  hamburger: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_CONTACT':
      return {
        ...state,
        contact: true,
      };
    case 'CLOSE_CONTACT':
      return {
        ...state,
        contact: false,
      };
    case 'EMAIL':
      return {
        ...state,
        [action.field]: action.payload,
      };
    case 'TOGGLE_HAMBURGER':
      return {
        ...state,
        hamburger: !state.hamburger,
      };
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
