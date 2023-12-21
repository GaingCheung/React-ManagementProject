import request from "./index";

// 请求中，请求参数和返回值的类型都应该进行约束

// 获取验证码
export const captchaAPI = () :Promise<CaptchaAPIRes> => request.get('/prod-api/captchaImage')

// 登录请求
export const loginAPI = (params: LoginAPIReq) : Promise<LoginAPIRes> => request.post('/prod-api/login', params)