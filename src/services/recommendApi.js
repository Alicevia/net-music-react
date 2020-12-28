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

export function reqNewAlbum(data) {
  return request({
    url: '/top/album',
    params: data,
    method: 'get'
  })
}
export function reqListRanking(data) {
  return request({
    url: "/top/list",
    params: data
  })
}

export function reqHotSinger(data) {
  return request({
    url: "/top/artists",
    params: data
  })
}

export function reqHotAnchor(data) {
  return request({
    url: "/dj/toplist/popular",
    params: data
  })
}

