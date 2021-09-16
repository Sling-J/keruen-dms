import axios from 'axios'
import AxiosInterceptors from './interceptors'

export default history => ({ dispatch, getState }) => {
  const instance = axios.create({
    baseURL: process.env.BASE_URL,
  })

  const axiosInterceptors = new AxiosInterceptors(instance)

  instance.interceptors.request.use(
    axiosInterceptors.getRequestSuccess(),
    axiosInterceptors.getRequestError(),
  )

  instance.interceptors.response.use(
    axiosInterceptors.getResponseSuccess(),
    axiosInterceptors.getResponseError(),
  )

  return next => action => {
    if (typeof action === 'function') {
      action(dispatch, getState, instance, history)
    } else {
      next(action)
    }
  }
}
