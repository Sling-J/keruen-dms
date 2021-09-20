/* tslint:disable */
import { AxiosInstance, AxiosRequestConfig } from 'axios'

import { moduleName as authModule } from 'modules/auth/reducers'

class AxiosInterceptors {
  private instance: AxiosInstance

  constructor(instance) {
    this.instance = instance
  }

  getRequestSuccess(getState) {
    return function(config: AxiosRequestConfig) {
      const access_token = getState()[authModule].credentials.access_token

      if (config.url.indexOf('refresh') >= 0) {
        return config
      }

      return {
        ...config,
        headers: {
          ...config.headers,
          Authorization: 'Bearer ' + access_token,
        },
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
    return response => {
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
