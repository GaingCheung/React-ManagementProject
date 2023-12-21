// import { Outlet, Link } from 'react-router-dom'
import { useRoutes, useLocation, useNavigate } from 'react-router-dom'
import router from './router'
import { useEffect } from 'react'

function ToLogin(){
  const navigateTo = useNavigate()
  // 跳转登录页面
  useEffect(() => {
    navigateTo('/login')
  }, [])
  return <div></div>
}

function ToPage1(){
  const navigateTo = useNavigate()
  // 跳转首页
  useEffect(() => {
    navigateTo('/page1')
  }, [])
  return <div></div>
}

function BeforeRouterEnter(){
    // 路由前置守卫
  const outlet = useRoutes(router)
  const location = useLocation()
  //  两种情况,当访问login页面且有token,跳转首页 or 当访问不是login且没有token,跳转登录页
  if(location.pathname === '/login' && localStorage.getItem('token')){
    return <ToPage1/>
  }
  if(location.pathname !== '/login' && !localStorage.getItem('token')){
    return <ToLogin/>
  }
  return outlet
}

function App() {
  return (
    <div className="App">
      {/* {outlet} */}
      <BeforeRouterEnter/>
    </div>
  )
}

export default App
