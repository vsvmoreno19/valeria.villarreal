import CommentCard from "../CommentCard";
import { Title, Container, FormContainer } from "./Comments.styles";

type  CommentType = {
  comments: {
    _id: string,
    author: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    __v: string,
  }[]
}

function Comments({comments}: CommentType) {
  return (
    <Container container>
      <Title item sm={8}>   
        <h4>Comments</h4>
      </Title>
      { comments.map(comment => <CommentCard comment={comment}    key={comment._id} ></CommentCard> ) }
      <FormContainer item sm={8}>
        Form
      </FormContainer>
    </Container>
  );
}

export default Comments;
