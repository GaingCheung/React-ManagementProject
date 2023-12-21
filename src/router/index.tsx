import React, {lazy} from 'react'
import Home from "@/views/Home"
import Login from '@/views/Login'
const About = lazy(() => import('@/views/About'))
const Page1 = lazy(() => import('@/views/Page1'))
const Page2 = lazy(() => import('@/views/Page2'))
const Page301 = lazy(() => import('@/views/Page301'))
import {Navigate} from 'react-router-dom'

 // 使用懒加载必须添加loading fallback
const loadingCallback = (comp:JSX.Element) => (
    <React.Suspense fallback={<div>loading...</div>}>
        {comp}
    </React.Suspense>
)

const routes = [
    {
        path: '/',
        element: <Navigate to="/page1"/>
    },
    {
        path: '/',
        element: <Home/>,
        children: [
            {
                path: '/page1',
                element: loadingCallback(<Page1/>)
            },
            {
                path: '/page2',
                element: loadingCallback(<Page2/>)
            },
            {
                path: '/page3/301',
                element: loadingCallback(<Page301/>)
            }
        ]
    },
    {
        path: '/about',
        element: loadingCallback(<About/>)
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '*',
        element: <Navigate to="/page1"/>
    }
]   

export default routes