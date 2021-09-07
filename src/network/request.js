import axios from "axios";

//对网络请求模块进行封装
export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:7878/api/m5',
        timeout: 5000,
    })

    //拦截器的使用
    instance.interceptors.request.use(config => {
        //请求时处理代码
        console.log('请求拦截成功');
        return config
    },error => {
        console.log('请求拦截失败');
    })

    instance.interceptors.response.use(res => {
        //响应成功
        console.log('响应成功');
        return res.data
    }, error => {
        console.log('响应失败');
    })

        return instance(config)
}