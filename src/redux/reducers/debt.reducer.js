import { combineReducers } from 'redux';

// Reducer for errors in the transaction submission input field.
const transactions = (state = [], action) => {
  switch (action.type) {
    case 'SET_ALL_TRANSACTIONS':
        return action.payload;
    case 'CLEAR_TRANSACTIONS':
        return [];
    default:
        return state;
  }
};

export default transactions;