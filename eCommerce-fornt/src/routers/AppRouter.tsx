import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@layouts/mainLayout/MainLayout'

import PageSuspenseFallback from '@components/feedback/PageSuspenseFallback/PageSuspenseFallback'

const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const Products = lazy(() => import('@pages/Products'))
const Categories = lazy(() => import('@pages/Categories'))
const Login = lazy(() => import('@pages/Login'))
const Register = lazy(() => import('@pages/Register'))
const Cart = lazy(() => import('@pages/Cart'))
const Wishlist = lazy(() => import('@pages/Wishlist'))
import Error from '@pages/Error'

// Router
const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {index: true, element: <PageSuspenseFallback><Home /></PageSuspenseFallback>  },
      {path: 'about-us', element: <PageSuspenseFallback><About /></PageSuspenseFallback> },
      {path: 'categories', element: <PageSuspenseFallback><Categories /></PageSuspenseFallback> },
      {path: 'cart', element: <PageSuspenseFallback><Cart /></PageSuspenseFallback>},
      {path: 'categories', element: <PageSuspenseFallback><Categories /></PageSuspenseFallback> },
      {path:'wishlist', element: <PageSuspenseFallback><Wishlist /></PageSuspenseFallback>},
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
      {path: 'login', element: <PageSuspenseFallback><Login /></PageSuspenseFallback>},
      {path: 'register', element: <PageSuspenseFallback><Register /></PageSuspenseFallback>},
    ]
  }
]) 

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter