import '../style/CommentList.css';

import { Container, ListGroup, Accordion } from 'react-bootstrap';

function CommentList({ comments }) {

  console.log(comments);

  return (
    <Container className='comment-list'>
      <Accordion defaultActiveKey="1">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Comment List</Accordion.Header>
        <Accordion.Body>
          <ListGroup>
            {comments.map((comment) => (
              <ListGroup.Item key={comment._id}>{comment.comment}</ListGroup.Item>
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </Container>
  );
}

export default CommentList;