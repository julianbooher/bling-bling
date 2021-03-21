import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllExpenses(action) {
    const response = yield axios.get(`/api/transaction`);
    yield put({type:'SET_ALL_WINDOWS', payload: response.data});
}

function* transactionSaga() {
    yield takeLatest('FETCH_ALL_EXPENSES', fetchAllExpenses);

  }
  
  export default transactionSaga;