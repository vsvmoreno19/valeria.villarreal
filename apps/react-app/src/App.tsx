
import { CategoriesPage, HomePage, LoginPage, PostPage } from "./components/Page";
import NavBar from "./components/NavBar";
import { PostProvider,SnackbarProvider} from "./context";
import { Grid } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignUpPage from "./components/Page/SignUpPage";

function App() {
  return (
    <SnackbarProvider>
      <PostProvider>
        <Router>
          <Grid
            container
            id="app"
            direction="column"
            height="100vh"
            wrap="nowrap"
          >
            <NavBar />
            <Grid
              container
              item
              wrap="nowrap"
              sx={{
                display: "flex",
                flexDirection: "column",
                height: "calc(100vh - 84px)",
              }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/posts" element={<PostPage />} />
                <Route path="/categories" element={<CategoriesPage />} />
                <Route path="/signup" element={<SignUpPage />} />
              </Routes>
            </Grid>
          </Grid>
        </Router>
      </PostProvider>
    </SnackbarProvider>
  );
}

export default App;