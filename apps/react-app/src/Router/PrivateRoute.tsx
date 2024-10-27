import { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Grid } from "@mui/material";
import { AuthContext } from "../context";
import Loading from "../components/Loading";

interface PrivateRouteProps {
  route: React.JSX.Element;
}

const PrivateRoute = ({ route }: PrivateRouteProps): JSX.Element => {
  const { authLoading, isAuthenticated, validateToken } =
    useContext(AuthContext);

  useEffect(() => {
    const initialize = async () => {
      await validateToken();
    };
    initialize();
  }, [validateToken]);

  if (isAuthenticated === null || authLoading === null || authLoading) {    
    return (
      <Grid container direction="column" height="100vh" wrap="nowrap">
        <Loading />
      </Grid>
    );
  }
  
  return (isAuthenticated ? { ...route } : <Navigate to={"/login"} replace />)
  
};

export default PrivateRoute;