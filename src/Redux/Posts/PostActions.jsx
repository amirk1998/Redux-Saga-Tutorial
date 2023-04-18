import axios from 'axios';

import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
} from './PostTypes';

export function fetchPostRequest(id) {
  return {
    type: FETCH_POST_REQUEST,
    payload: id,
  };
}

export function fetchPostFailure(error) {
  return {
    type: FETCH_POST_FAILURE,
    payload: error,
  };
}

export function fetchPostSuccess(Post) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: Post,
  };
}

// export const fetchPost = () => {
//   return function (dispatch) {
//     dispatch(fetchPostRequest());
//     axios
//       .get('https://jsonplaceholder.typicode.com/users')
//       .then((res) => {
//         const posts = res.data;
//         console.log(posts);
//         dispatch(fetchPostSuccess(posts));
//         return posts;
//       })
//       .catch((error) => fetchPostFailure(error.message));
//   };
// };
