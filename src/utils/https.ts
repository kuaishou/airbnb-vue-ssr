import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

const defaultConfig = {
    timeout: 5000,
    basUrl: ''
}
class Http {
    constructor() {

        this.httpInterceptorsRequest()
        this.httpInterceptorsResponse()

    }
    private static axiosInstance = axios.create(defaultConfig)

    private httpInterceptorsRequest() {
        Http.axiosInstance.interceptors.request.use((config) => {
            return config
        }, err => {
            return Promise.reject(err)
        })
    }

    private httpInterceptorsResponse() {
        Http.axiosInstance.interceptors.response.use((response: AxiosResponse) => {
            return response
        }, err => {
            return Promise.reject(err)
        })
    }

    public httpGet<T>(url: string, params: AxiosRequestConfig): Promise<T> {
        return Http.axiosInstance.get(url, params).then(res => res.data).catch()
    }
    public httpPost<T>(url: string, params: AxiosRequestConfig): Promise<T> {
        return Http.axiosInstance.post(url, params).then(res => res.data).catch()
    }
}




export const http = new Http()





// import axios from 'axios'

// const defaultConfig = {
//     timeout: 5000,
//     basUrl: ''
// }

// const axiosInstance = axios.create(defaultConfig)

// //请求拦截
// axiosInstance.interceptors.request.use(config => {
//     return config
// }, err => {
//     return Promise.reject(err)
// })

// //响应拦截
// axiosInstance.interceptors.response.use(config => {
//     return config
// }, err => {
//     return Promise.reject(err)
// })


// //封装get post请求

// function HttpRequestGet(url, params) {
//     return axiosInstance.get(url, params).then(res => res.data).catch()
// }

// function HttpRequestPost(url, params) {
//     return axiosInstance.post(url, params).then(res => res.data).catch()
// }


// export default {
//     HttpRequestGet,
//     HttpRequestPost
// }



