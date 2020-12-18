import { request } from './axios'

export function reqTopBanners() {
  return request({
    url: '/banner'
  })
}