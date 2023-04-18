import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostRequest } from '../../Redux/Posts/PostActions';

const PostSaga = () => {
  const [postId, setPostId] = useState('');
  const { loading, error, data } = useSelector((state) => state.post);
  const dispatch = useDispatch();

  return (
    <div className='flex flex-col items-center w-1/2'>
      <h1 className='text-4xl text-slate-900 font-bold'>
        Redux Saga Middleware
      </h1>
      <input
        type='number'
        value={postId}
        min={1}
        max={100}
        onChange={(e) => setPostId(e.target.value)}
        className={
          postId < 1 || postId > 100
            ? 'bg-gray-50 border-2 border-red-300 text-red-500 text-lg text-center rounded-lg outline-none focus:border-red-500 block w-1/2 p-2.5 mt-8'
            : 'bg-gray-50 border-2 border-gray-300 text-gray-900 text-lg text-center rounded-lg outline-none focus:border-blue-500 block w-1/2 p-2.5 mt-8'
        }
        placeholder='Enter a Number'
      />
      {postId < 1 || postId > 100 ? (
        <div className='text-red-500 text-lg font-medium my-2'>
          Please enter a number between 1 and 100
        </div>
      ) : null}
      <button
        type='button'
        onClick={() => dispatch(fetchPostRequest(postId))}
        className='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-4 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-6'
      >
        Get Post
      </button>

      {loading ? (
        <p className='text-2xl text-center font-bold text-blue-600'>
          Loading ...
        </p>
      ) : error ? (
        <p className='text-2xl text-center font-bold text-red-600'>{error}</p>
      ) : data && data.title ? (
        <div className='flex flex-col items-center gap-y-2 w-full'>
          <p className='text-xl text-center font-medium text-slate-900'>
            <span className='mr-2'>Title: </span> {data.title}
          </p>
          <p className='text-xl text-center font-medium text-slate-900'>
            <span className='mr-2'>Body: </span> {data.body}
          </p>
        </div>
      ) : (
        <p className='text-xl text-center font-bold text-green-700'>
          Fetch some posts
        </p>
      )}

      {/* {loading && (
        <p className='text-2xl text-center font-bold text-blue-600'>
          Loading ...
        </p>
      )}

      {error && (
        <p className='text-2xl text-center font-bold text-red-600'>{error}</p>
      )}

      {data.title ? (
        <div className='flex flex-col items-center'>
          <p className='text-xl text-center font-bold text-slate-900'>
            <span className='mr-2'>Title: </span> {data.title}
          </p>
          <p className='text-xl text-center font-bold text-slate-900'>
            <span className='mr-2'>Body: </span> {data.body}
          </p>
        </div>
      ) : (
        <p className='text-xl text-center font-bold text-green-700'>
          Fetch some posts
        </p>
      )} */}
    </div>
  );
};

export default PostSaga;
