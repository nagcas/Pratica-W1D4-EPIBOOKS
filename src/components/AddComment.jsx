import '../style/AddComment.css'

import { Container, ListGroup, Accordion } from 'react-bootstrap';

function AddComment() {
  return (
    <Container className='comment-add'>
      <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Add Comment</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            <ListGroup.Item>...</ListGroup.Item>
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
}

export default AddComment;