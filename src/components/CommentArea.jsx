import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

function CommentArea({ id }) {
  
  const url = 'https://striveschool-api.herokuapp.com/api/books/'; //:asin/comments/';
  const token = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjNhNGY2ZTBiM2IyNTAwMTUxYjU0NzEiLCJpYXQiOjE3MTU1NDQyOTQsImV4cCI6MTcxNjc1Mzg5NH0.LvfHMjTsGRN4TMQ0aqLaBwmJQ9wrX3G_M4Q6whpiwNo";
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(url + id + '/comments/', {
      header: {
        'Content-Type': 'application/json',
        'Authorization': token
      },
      })
      .then((response) => response.json())
      .then((data) => setComments(data))
  }, []);

  return (
    <>
      <CommentList comments={comments}/>
      <AddComment />
    </>
  );
}

export default CommentArea;