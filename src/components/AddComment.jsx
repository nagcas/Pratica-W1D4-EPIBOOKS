import { useState } from 'react';
import '../style/AddComment.css'

import { Container, Accordion, Form, Button } from 'react-bootstrap';

function AddComment({ token, id }) {

  console.log(id);
  console.log(token);
  const url = 'https://striveschool-api.herokuapp.com/api/comments/';

  const [FormData, setFormData] = useState({
    author: '',
    comment: '',
    rate: 0,
    elementId: id,
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(url + id, {
      method: 'POST',
      header: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(FormData)
    })
  }

  return (
    <Container className='comment-add'>
      <Accordion defaultActiveKey='1'>
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Add Comment</Accordion.Header>
        <Accordion.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='formEmail'>
            <Form.Label>Author</Form.Label>
            <Form.Control 
              type='text' 
              placeholder='Enter author' 
              name='author' 
              value={FormData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formComment'>
            <Form.Label>Comment</Form.Label>
            <Form.Control 
              type='text' 
              placeholder='Comment' 
              name='comment' 
              value={FormData.comment}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Select 
            className='mb-3' 
            aria-label='select-rate' 
            name='rate' 
            value={FormData.rate}
            onChange={handleChange}
          >
            <option>Select Rate</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </Form.Select>
          <Button variant='primary' type='submit'>Add</Button>
        </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
}

export default AddComment;