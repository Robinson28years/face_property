import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/visits',
    method: 'get',
    params: query
  })
}