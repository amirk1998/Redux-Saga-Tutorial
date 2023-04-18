import { call, put, takeEvery } from 'redux-saga/effects';
import { FETCH_POST_REQUEST } from '../Posts/PostTypes';
import axios from 'axios';
import { fetchPostRequest, fetchPostSuccess } from '../Posts/PostActions';

function* fetchPost(action) {
  try {
    const apiEndPoint = `https://jsonplaceholder.typicode.com/posts/${action.payload}`;
    const response = yield call(() => axios.get(apiEndPoint));
    yield put(fetchPostSuccess(response.data));
  } catch (error) {
    yield put(fetchPostRequest(error.message));
  }
}

export function* watchFetchPost() {
  yield takeEvery(FETCH_POST_REQUEST, fetchPost);
}
