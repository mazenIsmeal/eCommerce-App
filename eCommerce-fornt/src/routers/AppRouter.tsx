import { lazy, Suspense } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from '@layouts/mainLayout/MainLayout'

const Home = lazy(() => import('@pages/Home'))
const About = lazy(() => import('@pages/About'))
const Products = lazy(() => import('@pages/Products'))
const Categories = lazy(() => import('@pages/Categories'))
const Login = lazy(() => import('@pages/Login'))
const Register = lazy(() => import('@pages/Register'))
const Error = lazy(() => import('@pages/Error'))
const Cart = lazy(() => import('@pages/Cart'))
const Wishlist = lazy(() => import('@pages/Wishlist'))

// Router
const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {index: true, element: <Suspense fallback='loading please wait'><Home /></Suspense>  },
      {path: 'about-us', element: <Suspense fallback='loading please wait'><About /></Suspense> },
      {path: 'categories', element: <Suspense fallback='loading please wait'><Categories /></Suspense> },
      {path: 'cart', element: <Suspense fallback='loading please wait'><Cart /></Suspense>},
      {path: 'categories', element: <Suspense fallback='loading please wait'><Categories /></Suspense> },
      {path:'wishlist', element: <Suspense fallback='loading please wait'><Wishlist /></Suspense>},
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
      {path: 'login', element: <Suspense fallback='loading please wait'><Login /></Suspense>},
      {path: 'register', element: <Suspense fallback='loading please wait'><Register /></Suspense>},
    ]
  }
]) 

const AppRouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default AppRouter