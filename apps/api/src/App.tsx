import { Grid } from '@mui/material';

import { CategoriesPage, HomePage, LoginPage, PostPage } from './components/Page';

function App() {
  const page: string = 'HomePage';
  return (
    <Grid container id="app" direction="column" height="100vh" flexWrap="nowrap">
      <Grid item flexGrow={1}>
        {page === 'HomePage' && <HomePage />}
        {page === 'PostPage' && <PostPage />}
        {page === 'LoginPage' && <LoginPage />}
        {page === 'CategoriesPage' && <CategoriesPage />}
      </Grid>
    </Grid>
  );
}

export default App;