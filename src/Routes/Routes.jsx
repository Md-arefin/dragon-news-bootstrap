import { createBrowserRouter, Navigate } from "react-router-dom";
import LoginLayout from "../layout/LoginLayout";
import Main from "../layout/Main";
import NewsLayout from "../layout/NewsLayout/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login/Login";
import Register from "../pages/Login/Register/Register";
import News from "../pages/News/News/News";
import Terms from "../Sheard/Terms/Terms";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout></LoginLayout>,
        children: [
            {
                path: '/',
                element: <Navigate to='/category/0'></Navigate>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/terms",
                element: <Terms></Terms>
            },
        ]
    },
    {
        path: '/category',
        element: <Main></Main>,
        children: [
            // {
            //     path: '/',
                
            //     element: <Category></Category>,
            //     loader: ({params}) => fetch(`http://localhost:5000/news`)
            // },
            {
                path: ':id',
                element: <Category></Category>,
                loader: ({ params }) => fetch (`https://the-news-dragon-server-md-arefin.vercel.app/categories/${params.id}`)
            },
        ]
    },
    {
        path: '/news',
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ':id',
                element: <PrivateRoute></PrivateRoute>,
                loader: ({ params }) => 
                fetch(`https://the-news-dragon-server-md-arefin.vercel.app/news/${params.id}`)
            }
        ]
    },
])

export default router;
