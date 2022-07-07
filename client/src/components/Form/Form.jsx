import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/posts';

const FormPost = () => {

    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        message: '',
        tags: '',
        selectedField: '' 
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createPost(postData))
    }

    const clear = () => {

    }

    return (
        <Container>
            <h3>Form</h3>
            <h6>Creating a new Review</h6>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-2">
                    <Form.Control  
                        variant='outlined' 
                        placeholder='Name of the Creator'
                        type='text'
                        value={postData.creator} 
                        onChange={(e) => setPostData({ ...postData, creator: e.target.value })} 
                        />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control 
                        variant='outlined' 
                        placeholder='Title'
                        type='text'
                        value={postData.title} 
                        onChange={(e) => setPostData({ ...postData, title: e.target.value })} 
                        />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control 
                        variant='outlined' 
                        placeholder='Message'
                        type='text'
                        value={postData.message} 
                        onChange={(e) => setPostData({ ...postData, message: e.target.value })} 
                        />
                </Form.Group>
                <Form.Group className="mb-2">
                    <Form.Control 
                        variant='outlined' 
                        placeholder='Tags'
                        type='text'
                        value={postData.tags} 
                        onChange={(e) => setPostData({ ...postData, tags: e.target.value })} 
                        />
                </Form.Group>
                <FileBase type='file' multiple={false} onDone={({base64}) => setPostData({ ...postData, selectedField: base64 })} />
                <div className="d-grid gap-2 mt-2">
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <Button variant="danger" onClick={clear}>
                        Clear
                    </Button>
                </div>
            </Form>
        </Container>
        
    );
}

export default FormPost;
