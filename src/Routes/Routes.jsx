import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Products from "../pages/products/Products/Products";
import Login from "../pages/Login/Login";
import Signup from "../pages/signup/Signup";
import Dashboard from "../Layout/Dashboard";
import PaymentDetails from "../pages/Dashboard/payment/PaymentDetails";
import Users from "../pages/Dashboard/allusers/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "menu",
        element: <Products></Products>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "signup",
        element: <Signup></Signup>,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "payment",
        element: <PaymentDetails></PaymentDetails>,
      },

      // admin routes
      {
        path: "users",
        element: <Users></Users>,
      },
    ],
  },
]);
