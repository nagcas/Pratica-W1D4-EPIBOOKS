import '../style/AllTheBook.css';

import { Row } from 'react-bootstrap';
import SingleBook from './SingleBook';

function AllTheBooks({ books }) {
  
  return (
      <Row>
        {books.map((book) => <SingleBook key={book.asin} book={book} />)}
      </Row>
  );
}

export default AllTheBooks;