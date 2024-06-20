import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_BASE_URL

export const axiosInstance = axios.create({
  baseURL: baseURL,
  // header will be added later
})

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // For example, you can add authorization token here
    // config.headers.Authorization = `Bearer ${token}`;
    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

// Add a response interceptor
axiosInstance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error)
  }
)
