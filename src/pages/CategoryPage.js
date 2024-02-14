import React from 'react';
import Header from '../Components/Header';
import { useLocation, useNavigate } from 'react-router';
import Blogs from '../Components/Blogs';
import Pagination from '../Components/Pagination';

const CategoryPage = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const category = location.pathname.split("/").at(-1);

  return (
    <div>
        <div className='w-11/12 flex flex-col justify-center items-center'>
        
            <Header />
            <div className='flex flex-col gap-x-3 w-11/12 max-w-2xl ml-[55px] mt-[100px]'>
                <div className='flex mb-6 ml-[30px] gap-x-2 items-baseline '>
                    <button 
                        onClick={()=>(navigate(-1))}
                        className='border-2 border-gray-300 py-1 px-4 rounded-md'>
                        Back
                    </button>
                    <h2 className='font-bold text-[21px]'>
                        Blogs On <span className='underline'>{category}</span>
                    </h2>
                </div>
                <Blogs />
                <Pagination />
            </div>
            
        </div>
    </div>
  )
};

export default CategoryPage;