import { Col, Card } from 'react-bootstrap';

function SingleBook({ book }) {
  return (
    <Col>
      <Card className='card-item'>
        <Card.Img variant="top" src={book.img} />
        <Card.Body className='p-2'>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>
            Categoria: {book.category}
            Prezzo: € {book.price}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default SingleBook;