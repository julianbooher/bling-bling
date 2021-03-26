import { combineReducers } from 'redux';
import errors from './errors.reducer';
import transactions from './transaction.reducer';
import debt from './debt.reducer';

const rootReducer = combineReducers({
    errors, // contains registrationMessage and loginMessage
    transactions,
    debt
  });
  
  export default rootReducer;