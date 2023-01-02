import React from 'react';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/*Left side*/}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJlYWNofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
          alt='/'
        />
        <img
          className=' row-span-3 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1538964173425-93884d739596?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src='https://images.unsplash.com/photo-1533760881669-80db4d7b4c15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
          alt='/'
        />
      </div>

      {/*Right side*/}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold'>Plan your next trip</h3>
        <p className='text-2xl py-6'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus,
          fugit?
        </p>
        <p className='pb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et dolore
          quibusdam exercitationem dolores ab repudiandae dolor eaque illum sunt
          placeat reiciendis molestias laudantium praesentium eveniet iste, at
          optio eum cumque.
        </p>
        <div>
          <button className='border-black mr-4 hover:shadow-xl'>
            Learn More
          </button>
          <button className='bg-black text-white border-black hover:shadow-xl'>
            Book your trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default Plan;
