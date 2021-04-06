import { combineReducers } from 'redux';

// Reducer for transactions to be displayed on the table.
const debt = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_DEBT':
        return action.payload;
    case 'CLEAR_DEBT':
        return [];
    default:
        return state;
  }
};

// TODO reducer for edit field errors.

export default debt;