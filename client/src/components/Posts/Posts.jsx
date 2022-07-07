import React from 'react';
import Post from './Post/Post';
import { useSelector } from 'react-redux';
import { CardGroup, Container, ProgressBar } from 'react-bootstrap';

const Posts = () => {
    const posts = useSelector((state) => state.posts)

    console.log(posts);
    return (
        <Container className='mt-2'>
             {!posts.length ? 
                <>
                   <small clas>Loading...</small>
                    <ProgressBar animated now={100} /> 
                </>
                :
                <CardGroup>
                    {posts.map(post => (
                        <Post 
                            key={post.id}
                            title={post.title} 
                            creator={post.creator} 
                            message={post.message} 
                            likeCount={post.likeCount} 
                            createdAt={post.createdAt}
                            tags={post.tags}    
                            />
                        
                    ))}  
                </CardGroup> 
             }
        </Container>
    );
}

export default Posts;
