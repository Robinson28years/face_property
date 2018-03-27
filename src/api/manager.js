import request from '@/utils/request'

export function createUser(data) {
    return request({
      url: '/users',
      method: 'post',
      data
    })
  }