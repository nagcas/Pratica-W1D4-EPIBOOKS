import '../style/AllTheBook.css';

import { Form, Row } from 'react-bootstrap';
import SingleBook from './SingleBook';
import { useState } from 'react';

function AllTheBooks({ books }) {

  const [search, setSearch] = useState('');

  const InputSearch = (e) => {
    setSearch(e);
  } 
  
  return (
    <>
      <Form.Control
        className='mb-4'
        placeholder='Search book'
        type='text'
        name='search'
        value={search}
        onChange={(e) => InputSearch(e.target.value)}
      />
      <Row>
        {books.filter((book) => book.title.toLowerCase().includes(search))
          .map((book) => <SingleBook key={book.asin} book={book} />)}
      </Row>
    </>
  );
}

export default AllTheBooks;