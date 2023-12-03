import React from 'react';

const Subscribe = () => {
  return (
    <>
      <section className='container mx-auto  py-10'>
        <div className='mt-10 flex h-[399px] flex-col items-center justify-center gap-7'>
          <div className='flex flex-col items-center justify-center gap-5 max-md:mx-5 md:mx-10'>
            <h3 className=' text-lg font-semibold text-green-700'>SUBSCRIBE</h3>
            <h1 className=' flex flex-wrap items-baseline justify-center text-4xl font-bold text-black'>
              Subscribe To Get The Latest News About Us
            </h1>
            <p className='text-gray-500'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, ea!
            </p>
          </div>

          <div className='relative flex flex-row justify-center space-x-2 rounded-lg  border-2 border-gray-500 p-1'>
            <input
              className='mr-5 pl-3 pr-10 outline-0 ring-0 md:mr-9 md:pl-5 md:pr-20'
              type='text'
              placeholder='Enter Email here'
            />
            <button className=' ml-9 rounded-lg bg-orange-600 px-3 py-2 text-white'>
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscribe;
