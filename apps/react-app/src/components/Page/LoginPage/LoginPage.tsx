import { PageContainer, FormContainer } from "./LoginPage.styles";
import { TextField, Button, Stack, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const onSubmit = (data: FormValues) => {
    console.log(data);
    if (data.email && data.password) {
      navigate('/');
    }
  };
  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <PageContainer container>
      <FormContainer item md={8} xs={8} lg={8}>
      <Typography variant="h5" component="h1" gutterBottom  sx={{ paddingBottom: 4, fontWeight: 'bold' }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <TextField
              label="Email"
              type="email"
              {...register("email", { required: "Email is required" })}
              error={!!errors.email}
              helperText={errors.email?.message}
              InputLabelProps={{ required: true }}
            />
            <TextField
              label="Password"
              type="password"
              {...register("password", { required: "Password is required" })}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputLabelProps={{ required: true }}
              sx={{ paddingBottom: 4 }}
            />
            <Button type="submit" variant="contained">Login</Button>
            <Button type="submit" variant="outlined" onClick={handleSignUpClick}>Sign Up</Button>
          </Stack>
        </form>
      </FormContainer>
    </PageContainer>
  );
};

export default LoginPage;