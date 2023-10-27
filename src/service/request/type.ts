import type { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 针对AxiosRequestConfig配置进行扩展
export interface WJWInterceptors<T = AxiosResponse> {
  requestSuccessFn?: (config: InternalAxiosRequestConfig) => InternalAxiosRequestConfig
  requestFailureFn?: (err: any) => any
  responseSuccessFn?: (res: T) => T
  responseFailureFn?: (err: any) => any
}

export interface WJWRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
  interceptors?: WJWInterceptors<T>
}
