import React from 'react';
import Header from '../Components/Header';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';


const Home = () => {
  return (
    <div className='w-11/12 flex flex-col justify-center items-center'>
        
        <Header />
        <div className='flex items-center gap-x-3 w-11/12 max-w-2xl ml-[55px] mt-[100px]'>
          <Blogs />
          <Pagination />
        </div>
        
    </div>
  )
};

export default Home;