import '../style/AllTheBook.css';

import { Row, Col, Card, Button } from 'react-bootstrap';

function AllTheBooks({ books }) {
  
  return (
      <Row>
        {books.map((book) => (
          <Col key={book.asin}>
            <Card className='card-item'>
              <Card.Img variant="top" src={book.img} />
              <Card.Body className='p-2'>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <p>Categoria: {book.category}</p>
                  <p>Prezzo: € {book.price}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
  );
}

export default AllTheBooks;