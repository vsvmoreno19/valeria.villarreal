import { Typography } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import { Container, Content, Author } from "./CommentCard.styles";

type  CommentType = {
  comment: {
    _id: string,
    author: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    __v: string,
  }
}

// ACT 3 - Receive comment prop

function CommentCard({comment}: CommentType) {
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
