import { combineReducers } from 'redux';

// Reducer for errors in the transaction submission input field.
const transactionMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_TRANSACTION_MESSAGE':
      return '';
    default:
      return state;
  }
};

// TODO reducer for edit field errors.

export default combineReducers({
  transactionMessage,
});