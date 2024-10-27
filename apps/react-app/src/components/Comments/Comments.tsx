import React, { useState } from 'react';
import CommentCard from "../CommentCard";
import CommentForm from "../CommentForm/CommentForm";
import { Title, Container, FormContainer } from "./Comments.styles";

type CommentType = {
  comments: {
    author: string,
    content: string,
  }[]
}
const postID = "671e5bfd4e1e9611a145afca"

function Comments({ comments: initialComments }: CommentType) {
  const [comments, setComments] = useState(initialComments);

  const addComment = (comment: {author: string, content: string }) => {
    setComments([...comments, comment]);
  };

  return (
    <Container container>
      <Title item sm={8}>   
        <h4>Comments</h4>
      </Title>
      {comments.map(comment => (
        <CommentCard comment={comment}/>
      ))}
      <FormContainer item sm={8}>
        <CommentForm addComment={addComment} postID={postID} />
      </FormContainer>
    </Container>
  );
}

export default Comments;