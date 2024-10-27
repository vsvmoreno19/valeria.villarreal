import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Page from "../components/Page/Page";
import { CategoriesPage, HomePage, LoginPage, PostPage } from "../components/Page";
import NotFoundPage from "../components/Page/NotFoundPage";
import SignUpPage from "../components/Page/SignUpPage";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute route={<Page page={<HomePage />} />} />,
  },
  {
    path : "/post/:postID",
    element: <PrivateRoute route={<Page page={<PostPage/>} />} />
  },
  {
    path : "/categories",
    element: <PrivateRoute route={<Page page={<CategoriesPage/>} />} />
  },
  {
    path : "/login",
    element: <LoginPage/>
  },
  {
    path : "/signup",
    element: <PrivateRoute route={<Page page={<SignUpPage/>} />} />
  },
  {
    path : "*",
    element: <NotFoundPage/>
  },      
]);

export default Router;
