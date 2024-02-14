import React, { useContext } from "react";
import Spinner from "./Spinner";
import { AppContext } from "../Context/AppContext";
import BlogDetails from "./BlogDetails";

const Blogs = () => {
    // Consume
    const { posts, loading } = useContext(AppContext);
    console.log(posts);
    return (
        <div >
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div >
                    <p className="">No Post Found</p>
                </div>
            ) : (
                posts.map((post) => (
                    <BlogDetails key={post.id} post={post} />
                ))
            )}
        </div>
    );
};

export default Blogs;
