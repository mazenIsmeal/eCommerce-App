import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@layouts/mainLayout/MainLayout'

import Home from '@pages/Home'
import About from '@pages/About'
import Products from '@pages/Products'
import Categories from '@pages/Categories'
import Login from '@pages/Login'
import Register from '@pages/Register'
import Error from '@pages/Error'
import Cart from '@pages/Cart'

// Router
const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {index: true, element: <Home /> },
      {path: 'about-us', element: <About /> },
      {path: 'categories', element: <Categories /> },
      {path: 'cart', element: <Cart />},
      {path: 'categories', element: <Categories /> },
      {
        path: 'categories/products/:prefix', 
        element: <Products />,
        loader: ({params}) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true
        }
      },
      {path: 'login', element: <Login />},
      {path: 'register', element: <Register />},
    ]
  }
]) 

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter