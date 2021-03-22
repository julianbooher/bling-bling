import { combineReducers } from 'redux';
import errors from './errors.reducer';
import transaction from './transaction.reducer';

const rootReducer = combineReducers({
    errors, // contains registrationMessage and loginMessage
    transactions
  });
  
  export default rootReducer;