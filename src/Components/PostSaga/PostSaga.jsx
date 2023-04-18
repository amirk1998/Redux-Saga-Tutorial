import { useState } from 'react';

const PostSaga = () => {
  const [postId, setPostId] = useState('');

  return (
    <div className='flex flex-col items-center'>
      <h1 className='text-4xl text-slate-900 font-bold'>
        Redux Saga Middleware
      </h1>
      <input
        type='text'
        value={postId}
        onChange={(e) => setPostId(e.target.value)}
        className='bg-gray-50 border-2 border-gray-300 text-gray-900 text-sm rounded-lg 
        outline-none focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mt-8'
        placeholder='John'
      />
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
