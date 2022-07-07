import React from 'react';
import { Card } from 'react-bootstrap';
import moment from 'moment';

const Post = ({ creator, title, likeCount, selectedFile, tags, message, createdAt}) => {
    
    return (
        <Card className='m-3'>
            <Card.Img  alt={title} src={selectedFile} img={selectedFile} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {message}
                </Card.Text>
                <Card.Text>
                    <span>By: </span> {creator}
                </Card.Text>
            </Card.Body>
            <Card.Header>{ moment(createdAt).fromNow() }</Card.Header>
        </Card>
    );
}

export default Post;
