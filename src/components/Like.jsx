import React,{useState} from 'react'
import { FaHeart, FaBookmark } from 'react-icons/fa';
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
        className={` px-1 py-1 rounded-3xl  absolute items-center ${isLiked ? 'bg-red-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        <FaHeart className="w-6 h-6" />
        {isLiked ? '' : ''}
      </button>
      
    </div>
    </div>
  )
}

export default Like
