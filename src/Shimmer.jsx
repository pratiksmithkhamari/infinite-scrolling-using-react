import React from 'react';

const Shimmer = () => {
  return (
    
    <div className='flex-wrap flex gap-3 justify-center items-center'>
      {Array(20).fill(0).map((val, i) => (
        <div key={i} className='h-56 w-52 border p-3 bg-gray-300 animate-pulse rounded-md border-black'>
         
        </div>
      ))}
    </div>
    
  );
}

export default Shimmer;
