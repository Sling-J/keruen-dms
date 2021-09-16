/* tslint:disable */
import { AxiosInstance, AxiosRequestConfig } from 'axios'

class AxiosInterceptors {
  private instance: AxiosInstance

  constructor(instance) {
    this.instance = instance
  }

  getRequestSuccess() {
    return function(config: AxiosRequestConfig) {
      return {
        ...config,
      }
    }
  }

  getRequestError() {
    return function(error) {
      // tslint:disable-next-line:no-console
      console.log(error)
      return Promise.reject(error)
    }
  }

  getResponseSuccess() {
    return function(response) {
      return response
    }
  }

  getResponseError() {
    return function(error) {
      // tslint:disable-next-line:no-console
      console.log(error)
      return Promise.reject(error)
    }
  }
}

export default AxiosInterceptors
