import React from 'react';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import { Container, Row, StyledTextField } from './CommentFrom.styles';
import { Content } from '../CommentCard/CommentCard.styles';
import { createComment } from '../../api/endpoints/comments';
import { CommentResponse } from '../catTypes';

type FormValues = {
  comment: string;
};

type CommentFormProps = {
  addComment: (comment: { author: string, content: string}) => void;
  postID: string;
};

function CommentForm({ addComment, postID }: CommentFormProps) {
  const form = useForm<FormValues>({
    defaultValues: {
      comment: ''
    }
  });
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = async (data: FormValues) => {
    const onSuccess = (newComment: CommentResponse) => {
      addComment(newComment);
      reset();
    };

    const onError = (error: any) => {
      console.error("Error creating comment:", error);
    };

    const onLoading = (isLoading: boolean) => {
      console.log("Loading:", isLoading);
    };

    try {
      await createComment({
        postID,
        newComment: {
          content: data.comment,
          author: 'Anonymous'
        },
        onSuccess,
        onError,
        onLoading
      });
    } catch (error) {
      console.error("Error creating comment:", error);
    }
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