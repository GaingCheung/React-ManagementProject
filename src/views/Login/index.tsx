import initLoginBg from "./init"
import { ChangeEvent, useEffect, useState } from "react"
import style from './login.module.scss'
import { Input, Space, Button, message } from 'antd';
import {captchaAPI, loginAPI} from '@/request/api'
import { useNavigate } from "react-router-dom";

function Login (){
    const navigateTo = useNavigate()
    useEffect(() => {
        // 加载完组件后初始化背景
        initLoginBg()
        // 窗口改变重新初始化，实现自适应效果
        window.onresize = function(){
            initLoginBg()
        }
        // 加载组件后首次请求验证码
        getCaptchaSrc()
    }, [])

    // 获取输入用户名
    const [userName, setUserName] = useState('')
    function getUserName(e: ChangeEvent<HTMLInputElement>){
        setUserName(e.target.value)
    }
    // 获取输入密码
    const[password, setPassword] = useState('')
    function getPassword(e: ChangeEvent<HTMLInputElement>){
        setPassword(e.target.value)
    }
    // 获取验证码
    const[captcha, setCaptcha] = useState('')
    function getCaptcha(e: ChangeEvent<HTMLInputElement>){
        setCaptcha(e.target.value)
    }

    // 用于保存验证码图片src
    const [ captchaImg, setCaptchaImg ] = useState('')

    // 点击登录按钮
    async function goLogin(){
        // console.log(userName, password,captcha )
        // 判断是否为空值
        if(!userName.trim() || !password.trim() || !captcha.trim()){
            // alert('请输入完整内容')
            message.warning('请输入完整信息')
            return
        }
        let loginRes = await loginAPI({
            username: userName,
            password: password,
            code: captcha,
            uuid: localStorage.getItem('uuid') as string
        })
        if(loginRes.code === 200){
            // 1. 提示登录成功
            message.success('登录成功!')
            // 2. 保存token
            localStorage.setItem('token', loginRes.token)
            // 3. 跳转到page1
            navigateTo('/page1')
            // 4. 删除uuid
            localStorage.removeItem('uuid')
        }
    }

    // 获取验证码图片
    async function getCaptchaSrc(){
        const captchaRes = await captchaAPI()
        if(captchaRes.code === 200){
            // 1. 把图片链接显示在img上
            setCaptchaImg("data:image/gif;base64," + captchaRes.img)
            // 2. 本地保存uuid，点击登录时使用
            localStorage.setItem('uuid', captchaRes.uuid)
        }
    }

    return (
        <div className={style.loginPage}> 
            {/* 背景盒子 */}
            <canvas id="canvas"></canvas>
            {/* 登录表单 */}
            <div className={style.loginBox}>
                {/* title部分 */}
                <div className={style.title}>
                    <h1>通用后台系统</h1>
                </div>
                {/* 输入框部分 */}
                <div className={style.form}>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Input placeholder="用户名" onChange={getUserName} />
                        <Input.Password placeholder="密码" onChange={getPassword}/>
                        <div className={style.captchaBox}>
                            <Input placeholder="验证码" onChange={getCaptcha}/>
                            <div className={style.captchaImg} onClick={getCaptchaSrc}>
                                <img height="38px" src={captchaImg} alt="" />
                            </div>
                        </div>
                        <Button type="primary" block onClick={goLogin}>
                            登录
                        </Button>
                    </Space>
                </div>
                
            </div>
        </div>
    )
}

export default Login