import { Grid, Box, Typography, TextField } from "@mui/material";
import { styled } from "@mui/system";
export const Container = styled(Grid)`
  display: flex;
  gap: 16px;
  flex-grow: 1;
  padding: 16px;
  margin-bottom: 24px;
  height: fit-content;
`;
export const Content = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Author = styled(Typography)`
  font-weight: bold;
  margin-bottom: 8px;
`;
export const Row = styled(Box)`
  margin-top: 1rem;
`;


export const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    & fieldset {
      border: 0;
      border-bottom: 1px solid rgba(0, 0, 0, 0.23);
      border-radius: 0px;
    }
    &:hover fieldset {
      border-bottom: 1px solid rgba(0, 0, 0, 0.23);
    }
    &.Mui-focused fieldset {
      border-bottom: 2px solid rgba(0, 0, 0, 0.23);
    }
  }
  & .MuiInputBase-input {
    padding: 8px 0;
  }
`;