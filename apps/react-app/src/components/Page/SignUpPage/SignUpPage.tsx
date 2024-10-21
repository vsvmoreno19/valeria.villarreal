import { PageContainer, FormContainer } from "./SignUpPage.styles";
import { TextField, Button, Stack, Typography, Box } from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormValues = {
  userName: string;
  password: string;
  firstName: string;
  lastName: string;
  confirmPassword: string;
};

const SignUpPage = () => {
  const form = useForm<FormValues>({
    defaultValues: {
      userName: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: ''
    }
  });
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    if (data.userName && data.password && data.firstName && data.lastName && data.confirmPassword) {
      navigate('/');
    }
  };
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <PageContainer container>
      <FormContainer item md={8} xs={8} lg={8}>
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{ paddingBottom: 4, fontWeight: 'bold' }}
        >
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2}>
            <TextField
              label="User Name"
              {...register("userName", { required: "User Name is required" })}
              error={!!errors.userName}
              helperText={errors.userName?.message}
              InputLabelProps={{ required: true }}
              sx={{ paddingBottom: 2}}
            />
            <TextField
              label="First Name"
              {...register("firstName", { 
                required: "First Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "First Name cannot contain numbers"
                }
              })}
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
              InputLabelProps={{ required: true }}
              sx={{ paddingBottom: 2}}
            />
            <TextField
              label="Last Name"
              {...register("lastName", { 
                required: "Last Name is required",
                pattern: {
                  value: /^[A-Za-z]+$/,
                  message: "Last Name cannot contain numbers"
                }
              })}
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
              InputLabelProps={{ required: true }}
              sx={{ paddingBottom: 2}}
            />
            <TextField
              label="Password"
              type="password"
              {...register("password", { 
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long"
                }
              })}
              error={!!errors.password}
              helperText={errors.password?.message}
              InputLabelProps={{ required: true }}
              sx={{ paddingBottom: 2}}
            />
            <TextField
              label="Confirm Password"
              type="password"
              {...register("confirmPassword", { required: "Confirm Password is required" })}
              error={!!errors.confirmPassword}
              helperText={errors.confirmPassword?.message}
              InputLabelProps={{ required: true }}
              sx={{ paddingBottom: 10}}
            />
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
              <Button type="submit" variant="outlined" size="large">Sign Up</Button>
              <Button type="button" variant="contained" size="large" onClick={handleLoginClick}>Login</Button>
            </Box>
          </Stack>
        </form>
      </FormContainer>
    </PageContainer>
  );
};

export default SignUpPage;