import React, { useState } from 'react';
import { FaFire } from 'react-icons/fa';

const Like = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div>
      <div className="flex justify-center items-center h-full top-0">
        <button
          onClick={handleLikeClick}
          className={`px-1 py-1 rounded-3xl absolute items-center ${isLiked ? 'bg-white text-black' : 'bg-white text-white'
            }`}
        >
          <FaFire className={`w-6 h-6 ${isLiked ? 'text-black' : 'text-red-500'}`} />
          {isLiked ? '' : ''}
        </button>
      </div>
    </div>
  );
};

export default Like;
