import { Title, Container, FormContainer } from './Comments.styles';
import CommentCard from '../CommentCard/CommentCard';

interface CommentsProps {
  comments: { id: string; author: string; content: string; }[];
}

function Comments({ comments }: CommentsProps) {
  return (
    <Container container>
      <Title item sm={8}>
        <h4>Comments</h4>
      </Title>
      {comments.map((comment)=><CommentCard key={comment.id} comment={comment} />)}
      <FormContainer item sm={8}>
        Form
      </FormContainer>
    </Container>
  );
}

export default Comments;