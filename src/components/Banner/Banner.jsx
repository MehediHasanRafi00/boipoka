import React from 'react';

import bookimg from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='py-20 px-30 bg-[#f3f3f3] flex justify-between items-center mb-24 rounded-2xl'>
            <div>
                <h1 className='font-bold mb-10 text-5xl/18  '>Books to freshen up your bookshelf</h1>
            <button className='btn bg-green-500 text-white'>View The List</button>
            </div>
            <div>
                <img className='rounded-2xl' src={bookimg} alt="" />
            </div>
        </div>
    );
};

export default Banner;