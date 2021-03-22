import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllTransactions(action) {
    const response = yield axios.get(`/api/transaction`);
    yield put({type:'SET_ALL_TRANSACTIONS', payload: response.data});
}

function* transactionSaga() {
    yield takeLatest('FETCH_ALL_TRANSACTIONS', fetchAllTransactions);

  }
  
  export default transactionSaga;