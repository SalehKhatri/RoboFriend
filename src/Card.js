import React from 'react';
import './Card.css'

const Card =({name,email,id})=>{
    return(
        <div className='bg-white p-3 mx-2 my-4 rounded-lg shadow-md drop-shadow-md w-fit inline-grid hover:scale-110 hover:duration-500 hover:bg-black text-black hover:text-white'>
         <img className='w-36 pb-2' src={`https://robohash.org/${id}?100x100`} alt='robo' />
         <div>
          <h2 className='font-bold text-center text-lg'>{name}</h2>
          <p className='font-semibold'>{email}</p>
         </div>
        </div>
    );
}

export default Card;