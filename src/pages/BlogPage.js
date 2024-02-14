import React, { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AppContext } from '../Context/AppContext';
import Header from '../Components/Header';
import BlogDetails from '../Components/BlogDetails';

const BlogPage = () => {

  const baseUrlblog = "https://codehelp-apis.vercel.app/api/get-blog";

    const [blog, setBlog] = useState(null);
    const [relatedBlog, setRelatedBlog] = useState([]);
    const location = useLocation();
    const navigate = useNavigate();
    const {loading, setLoading} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){

        const url = `${baseUrlblog}?blogId=${blogId}`;
        console.log(url);

        setLoading(true);
        try{

            const result = await fetch(url);
            const data = await result.json();
            console.log('fetchrelated blogs ka data');
            console.log(data);
            setBlog(data.blog);
            setRelatedBlog(data.relatedBlogs);

        }
        catch(error){

            console.log('Error occured in blog calling by blogId');
            setBlog(null);
            setRelatedBlog([]);

        }
        setLoading(false);
    }

    useEffect( () => {
      if(blogId) {
          fetchRelatedBlogs();
      }
    }, [location.pathname])

  return (
    <div  className='w-11/12 flex flex-col justify-center items-center'>
      
      <Header />
      
      <div className='max-w-[620px] w-full flex flex-col ml-[5px] mt-[100px]'> 
          <div className='ml-7 mb-6'>
            <button 
                onClick={() => {navigate(-1)}}
                className='border-2 border-gray-300 py-1 px-4 rounded-md'>
                Back
            </button>
          </div>
          {
            loading ? 
            (
              <div className='flex justify-center items-center'>
                <p className='font-bold text-2xl'>Loading...</p>
              </div>
            ) :
            (blog ? 
            ( 
              <div className='flex flex-col gap-y-7'>
                  <BlogDetails post={blog} />
                  <h2 className="font-bold text-3xl ml-8 mt-[-20px]"> Related Blogs </h2>
                  <div className='mb-1'>
                  {
                      relatedBlog.map( (post) => { 
                        return <BlogDetails key={post.id} post={post} />
                      } )
                  }
                  </div>
              </div> 
            ) : 
            ( 
              <div>
                <p>No Blog Found</p>
              </div>
             ) )
          }
      
      </div>
    </div>
  )
};

export default BlogPage;