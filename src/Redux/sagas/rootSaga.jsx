// import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { all } from 'redux-saga/effects';
import { watchFetchPost } from './PostSaga';

export function* rootSaga() {
  //function* ==> Generator Function
  yield all([watchFetchPost()]);
}
