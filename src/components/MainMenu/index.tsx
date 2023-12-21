import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

type MenuItem = Required<MenuProps>['items'][number];

// 构建菜单栏数据
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem('栏目 1', '/page1', <PieChartOutlined />),
  getItem('栏目 2', '/page2', <DesktopOutlined />),
  getItem('栏目 3', 'page3', <UserOutlined />, [
    getItem('栏目 301', '/page3/301'),
    getItem('栏目 302', '/page3/302'),
    getItem('栏目 303', '/page3/303'),
  ]),
  getItem('栏目 4', 'page4', <TeamOutlined />, [
    getItem('栏目 401', '/page4/401'),
    getItem('栏目 402', '/page4/302')
  ]),
  getItem('栏目 5', '/page5', <FileOutlined />),
];

const MainMenu: React.FC = () => {

    const navigateTo = useNavigate()
    const currentRoute = useLocation()
    // console.log('111', currentRoute)

    //点击菜单栏实现跳转
    const clickMenu = (e: {key: string}) =>{
        navigateTo(e.key)
    }

    let firstOpenKey: string = ''

    const findChildren = (item:any)=> {
      return item.key === currentRoute.pathname
    }

    for(let i = 0; i < items.length; i++){
      if(items[i]?['children'].find(findChildren) : Boolean){
        firstOpenKey = items[i]!.key as string 
        break
      }
    }

    // 点击展开/ 收起一级菜单
    const [openKeys, setOpenKeys] = useState([firstOpenKey])
    const changeOpen = (openKeys: string[]) => {
      // 改变openKeys，让当前之展开一个menu且为点击的一项
      setOpenKeys([openKeys[openKeys.length - 1]])
    }
    return (
        <Menu 
            theme="dark" 
            defaultSelectedKeys={[currentRoute.pathname]} // 当前选中菜单样式
            mode="inline" 
            items={items} 
            onClick={clickMenu}
            onOpenChange={changeOpen}
            openKeys={openKeys}
          />
    )
}

export default MainMenu;