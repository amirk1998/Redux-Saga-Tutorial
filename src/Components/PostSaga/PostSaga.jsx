import { useState } from 'react';

const PostSaga = () => {
  const [postId, setPostId] = useState('');

  return (
    <div className='flex flex-col items-center'>
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
        className='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-6'
      >
        Get Post
      </button>
    </div>
  );
};

export default PostSaga;
