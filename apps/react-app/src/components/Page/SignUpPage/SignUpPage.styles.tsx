import { Grid } from "@mui/material";
import { styled } from "@mui/system";

export const PageContainer = styled(Grid)`
  display: flex;
  padding: 32px;
  flex-wrap: nowrap;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  background-color: #f5f5f5;
`;

export const FormContainer = styled(Grid)`
  padding: 32px;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border: 1px solid #ddd;
  width: 30%;
  margin: 0 auto;
  height: 100%;
  max-height: 700px;
`;