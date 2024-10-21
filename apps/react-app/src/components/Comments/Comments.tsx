import React, { useState } from 'react';
import CommentCard from "../CommentCard";
import CommentForm from "../CommentForm/CommentForm";
import { Title, Container, FormContainer } from "./Comments.styles";

type CommentType = {
  comments: {
    _id: string,
    author: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    __v: string,
  }[]
}

function Comments({ comments: initialComments }: CommentType) {
  const [comments, setComments] = useState(initialComments);

  const addComment = (comment: { _id: string, author: string, content: string, createdAt: string, updatedAt: string, __v: string }) => {
    setComments([...comments, comment]);
  };

  return (
    <Container container>
      <Title item sm={8}>   
        <h4>Comments</h4>
      </Title>
      {comments.map(comment => (
        <CommentCard comment={comment} key={comment._id} />
      ))}
      <FormContainer item sm={8}>
        <CommentForm addComment={addComment} />
      </FormContainer>
    </Container>
  );
}

export default Comments;