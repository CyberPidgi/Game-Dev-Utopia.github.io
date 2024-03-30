import React, { useState } from 'react'
import { FaHeart, FaBookmark } from 'react-icons/fa';

const Save = () => {
  const [isSaved, setIsSaved] = useState(false);

  const handleSaveClick = () => {
    setIsSaved(!isSaved);
  };

  return (
    <div className='flex justify-center items-center h-full top-0'>
      <button
        onClick={handleSaveClick}
        className={`px-1 py-1  rounded-3xl absolute items-center mr-2 right-0 ${isSaved ? 'bg-white text-black' : 'bg-white text-white'}`}
      >
        <FaBookmark className={`w-6 h-6 ${isSaved ? 'text-black' : 'text-green-600'}`} />
        {isSaved ? '' : ''}
      </button>
    </div>
  )
}

export default Save
