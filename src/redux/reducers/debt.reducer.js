import { combineReducers } from 'redux';

// Reducer for transactions to be displayed on the table.
const debts = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_DEBTS':
        return action.payload;
    case 'CLEAR_DEBTS':
        return [];
    default:
        return state;
  }
};

// TODO reducer for edit field errors.

export default debts;