// 定义请求参数和响应的类型

// 验证码响应结果类型约束
interface CaptchaAPIRes {
    msg: string;
    img: string;
    code: number;
    captchaEnabled: boolean;
    uuid: string;
}

// 登录请求参数
interface LoginAPIReq {
    username: string;
    password: string;
    code: string;
    uuid: string;
}

// 登录响应
interface LoginAPIRes {
    msg: string;
    code: number;
    token: string;
}