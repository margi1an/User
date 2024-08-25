import React, { useEffect } from "react";
import { axiosClient } from "./utils/axiosClient";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ProtectedRoute from "./Components/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { checkUser } from "./features/userSlice";
import Create from "./pages/Create";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.user);
  const routes = createBrowserRouter([
    {
      path: "/",
      element:<ProtectedRoute user={user}>
        <MainLayout></MainLayout>
      </ProtectedRoute>,
      children:[
        {
          index:true,
          element:<Home></Home>
        },
        {
          path: "/about",
          element:<About></About>
        },
        {
          path: "/contact",
          element:<Contact></Contact>
        },
        {
          path: "/create",
          element:<Create></Create>
        },
        {
          path: "/product",
          element:<Product></Product>
        },
        {
          path: "/cart",
          element:<Cart></Cart>
        }
      ]
    },
    {
      path: "/login",
      element: user ? <Navigate to="/" /> : <Login />
    },
    {
      path: "/register",
      element: user ? <Navigate to="/" /> : <Register />
    }
  ])  

  useEffect(() => {
    dispatch(checkUser)
  })
  return <RouterProvider router={routes}></RouterProvider>
}

export default App;
