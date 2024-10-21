import React from 'react';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { Container, Row, StyledTextField } from './CommentFrom.styles';
import { Content } from '../CommentCard/CommentCard.styles';

type FormValues = {
  comment: string;
};

type CommentFormProps = {
  addComment: (comment: { _id: string, author: string, content: string, createdAt: string, updatedAt: string, __v: string }) => void;
};

function CommentForm({ addComment }: CommentFormProps) {
  const form = useForm<FormValues>({
    defaultValues: {
      comment: ''
    }
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    const newComment = {
      _id: Date.now().toString(),
      author: "Anonymus",
      content: data.comment,
      createdAt: "2024",
      updatedAt: "2024",
      __v: "000",
    };
    addComment(newComment);
    reset();
  };

  return (
    <Container item sm={12}>
      <Content>
        <form onSubmit={handleSubmit(onSubmit)} noValidate style={{ width: '500px' }}>
          <StyledTextField
            fullWidth
            className='xTextField'
            label="Write a comment"
            type="text"
            {...register("comment", {
              required: "Comment is required",
              maxLength: {
                value: 200,
                message: "Too Many Characters (max 200)"
              }
            })}
            error={!!errors.comment}
            helperText={errors.comment?.message}
            InputLabelProps={{
              required: true
            }}
          />
          <Row>
            <Button type="submit" variant="contained">
              Add
            </Button>
          </Row>
        </form>
      </Content>
    </Container>
  );
}

export default CommentForm;