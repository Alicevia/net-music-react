import { request } from './axios'

export function reqTopBanners() {
  return request({
    url: '/banner'
  })
}

export function reqHotRec(data) {
  return request({
    url: '/personalized',
    params: data,
    method: 'get'
  })
}