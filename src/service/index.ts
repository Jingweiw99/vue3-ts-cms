import { BASE_URL, TIME_OUT } from './config'
import WJWRequest from './request'

const wjwRequest = new WJWRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT
})

export const wjwRequest2 = new WJWRequest({
  baseURL: 'http://codercba.com:1888/airbnb/api',
  timeout: 8000,

  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
    requestFailureFn: (err) => {
      return err
    },
    responseSuccessFn: (res) => {
      return res
    },
    responseFailureFn: (err) => {
      return err
    }
  }
})

export default wjwRequest
