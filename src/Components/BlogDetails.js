import React from 'react'
import { NavLink } from 'react-router-dom';

const BlogDetails = ({post}) => {
  return (
    <div className="w-11/12 mx-auto max-w-2xl gap-y-1 mb-10">
        
        <div className='mb-2'>
            <NavLink to={`/blog/${post.id}`} >
                <span className="font-bold text-lg ">{post.title}</span>
            </NavLink>
        </div>
        
        <p className="text-[14px]">
            By <span className="italic">{post.author}</span> 
            on{" "}
            <NavLink to={`/categories/${post.category.replaceAll(" ","-")}`}>
                <span className="underline font-bold">{post.category}</span>
            </NavLink>
        </p>

        <p className="text-[14px]">Posted on {post.date}</p>
            
        <p className="text-[16px] mt-[13px] mb-1">{post.content}</p>
            
        <div className="flex flex-wrap gap-x-2 items-center">
            {post.tags.map( (tag, index) => {
                return <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                            <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">#{tag}</span>
                       </NavLink>
            })}
        </div>
        
    </div>
  )
}

export default BlogDetails