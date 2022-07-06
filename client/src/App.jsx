import React, { useEffect } from 'react';
import { Container, Navbar, Row, Col } from 'react-bootstrap';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import { useDispatch } from 'react-redux';
import { getPosts } from './actions/posts'

import './styles.css'

const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch])

    return (
        <>
            <Navbar bg='primary' variant='dark' expand='lg'>
                <Container>
                    <Navbar.Brand href="#home">
                        Memories
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Container className='p-2'>
                <Row>   
                    <Col md={8}>
                        <Posts />
                    </Col>
                    <Col md={4}>
                        <Form />
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default App;
