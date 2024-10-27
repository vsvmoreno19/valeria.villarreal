
import { PostProvider,SnackbarProvider, AuthProvider} from "./context";
import {RouterProvider } from 'react-router-dom';
import Router from "./Router";

function App() {
  return (
    <SnackbarProvider>
      <AuthProvider>
        <PostProvider>
          <RouterProvider router={Router} />
        </PostProvider>
    </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;