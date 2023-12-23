import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../Pages/About/About";
import Contacts from "../Pages/Contacts/Contacts";
import Login from "../Pages/Registration/Login/Login";
import SignUp from "../Pages/Registration/SignUp/SignUp";
import NotFound from "../Pages/NotFound/NotFound";
import Home from "../Pages/Home/Home";
import Users from "../Pages/Users/Users";
import UserDetails from "../Pages/Users/UserDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
        errorElement: <NotFound />,
      },
      {
        path: "/users/:id",
        element: <UserDetails />,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contacts />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
