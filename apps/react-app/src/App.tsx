
import { CategoriesPage, HomePage, LoginPage, PostPage } from "./components/Page";
import NavBar from "./components/NavBar";
import { PostProvider } from "./context";
import { Grid } from "@mui/material";

function App() {
  const page: string = "HomePage";
  const isPostPage: boolean = false;
  const isCategoriesPage: boolean = true;
  const isLoginPage: boolean = false;

  return (
    <PostProvider>
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
            {page === "HomePage" && <HomePage />}
            { isPostPage ?  <PostPage/> : '' }
            { isCategoriesPage ? <CategoriesPage/> : '' }
            { isLoginPage ? <LoginPage/> : '' }
          </Grid>
        </Grid>
    </PostProvider>
  );
}

export default App;