import axios from 'axios'

const http = axios.create({
    baseURL: 'http://112.74.99.5:3000/web/api',
    timeout: 5000
})
// 请求拦截
http.interceptors.request.use(config => {
    if (localStorage.getItem("token") || localStorage.getItem("id")) {
        config.headers.Authorization = "Bearer " + localStorage.getItem("token")
    }
    // 1.比如config中的一些不符合服务器的要求
    // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标
    // 3.某些网络请求（比如登录），必须携带一些特殊的信息

    // 必须要返回拦截的对象
    return config
}, err => {
    return err
})
// 响应拦截
http.interceptors.response.use(res => {
    return res
}, err => {
    console.log(err)
    return err
})

export default http