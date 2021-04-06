import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchAllDebts(action) {
    console.log(action.payload)
    const response = yield axios.post(`/api/debt`, action.payload);
    yield console.log(response.data)
    yield put({type:'SET_ALL_DEBT', payload: response.data});
}

function* transactionSaga() {
    yield takeLatest('FETCH_ALL_DEBTS', fetchAllDebts);
  }
  
  export default transactionSaga;