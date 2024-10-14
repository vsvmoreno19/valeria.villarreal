import { Typography } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Container, Content, Author } from './CommentCard.styles';

interface CommentCardProps {
  comment: { id: string; author: string; content: string; };
}

function CommentCard({comment}: CommentCardProps) {
  return (
    <Container item sm={8}>
      <AccountCircleIcon />
      <Content>
        <Author>{comment.author}</Author>
        <Typography>{comment.content}</Typography>
      </Content>
    </Container>
  );
}

export default CommentCard;