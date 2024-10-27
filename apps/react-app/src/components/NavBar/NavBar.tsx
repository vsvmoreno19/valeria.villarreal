import React from "react";
import Grid from "@mui/material/Grid";
import { Box, Button, Typography } from "@mui/material";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import { NavLink, useNavigate } from "react-router-dom";

export default function NavBar(): React.JSX.Element {
  const navigate = useNavigate();

  const handlePostsClick = () => {
    navigate('/post/671e5bfd4e1e9611a145afca');
  };

  const handleHomeClick = () => {
    navigate('/');
  };


  return (
    <Grid
      item
      sx={{
        display: "flex",
        padding: 2,
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#0065c9",
        height: "84px",
      }}
    >
      <Button
        sx={{
          textDecoration: "none",
          color: "white",
          display: "flex",
          gap: "16px",
          alignItems: "center",
        }}
        onClick={handleHomeClick}
      >
        Home
        <TravelExploreIcon sx={{ width: 45, height: 45 }} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        >
          <Typography variant="h6" fontWeight="bold">
            Discovering the World
          </Typography>
          <Typography variant="caption" alignItems="center">
            Making your Life Easier
          </Typography>
        </Box>
      </Button>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "end",
          gap: 2,
        }}
      >
         <Button
          sx={{
            textDecoration: "none",
            fontWeight: "bold",
            color: "white",
            backgroundColor: "#1e8fff",
            borderRadius: "8px",
            padding: "8px",
          }}
          onClick={handlePostsClick}
        >
          Posts
        </Button>
        <NavLink to="/categories" style={({ isActive }) => { return { borderRadius: "8px", backgroundColor: isActive? "blue" : "#1e8fff", } } }>
          <Button
            sx={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "white",         
              borderRadius: "8px",
              padding: "8px",
            }}
          >
            Categories
          </Button>
        </NavLink>
        <NavLink to="/login" style={({ isActive }) => { return { borderRadius: "8px", backgroundColor: isActive? "blue" : "#1e8fff", } } }>
          <Button
            sx={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "white",
              borderRadius: "8px",
              padding: "8px",
            }}
          >
            Login
          </Button>
        </NavLink>
      </Box>
    </Grid>
  );
}
