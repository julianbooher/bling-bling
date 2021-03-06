import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllTransactions(action) {
    const response = yield axios.get(`/api/transaction`);
    yield put({type:'SET_ALL_TRANSACTIONS', payload: response.data});
}

function* postNewTransaction(action) {
    console.log(action.payload)
    yield axios.post(`/api/transaction`, action.payload);
    yield put({type:'FETCH_ALL_TRANSACTIONS'});
    yield put({type: 'FETCH_ALL_DEBTS', payload: {userOne: 'Julian', userTwo: 'Teaghan'}})
}

function* transactionSaga() {
    yield takeLatest('FETCH_ALL_TRANSACTIONS', fetchAllTransactions);
    yield takeLatest('POST_NEW_TRANSACTION', postNewTransaction);
  }
  
  export default transactionSaga;