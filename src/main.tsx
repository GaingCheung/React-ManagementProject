import React from 'react'
import ReactDOM from 'react-dom/client'
// 引入清除样式
import 'reset-css'
// 引入UI框架样式
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
// 组件样式
import '@/assets/styles/global.scss'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// import Router from '@/router'
import { Provider } from 'react-redux';
import store from '@/store/index.ts';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
)
