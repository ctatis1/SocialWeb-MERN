import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';

const Posts = () => {
    const posts = useSelector((state) => state.posts)

    console.log(posts);
    posts.map(post => console.log(post))
    return (
        <div>
            <h3>Posts</h3>
            {posts.map(post => (
                <Post title={post.title} />
            ))}
            
        </div>
    );
}

export default Posts;
