import React,{useState} from 'react'
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
        className={`px-1 py-1  rounded-3xl absolute items-center mr-2 right-0 ${isSaved ? 'bg-green-500 text-white' : 'bg-gray-200 text-black'}`}
      >
        <FaBookmark className="w-6 h-6" />
        {isSaved ? '' : ''}
      </button>
    </div>
  )
}

export default Save
