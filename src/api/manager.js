import request from '@/utils/request'

export function createUser(data) {
    return request({
      url: '/users',
      method: 'post',
      data
    })
}

export function createAddress(data) {
    return request({
      url: '/addresses',
      method: 'post',
      data
    })
}

export function createUserAddress(address_id,data) {
    return request({
      url: '/addresses/'+address_id+'/users',
      method: 'post',
      data
    })
}

export function getFaceId(data) {
    return request({
      url: '/face/face_id',
      method: 'post',
      data
    })
}

export function fetchList(query) {
    return request({
      url: '/user_owner',
      method: 'get',
      params: query
    })
}

export function fetchPropertyList(query) {
    return request({
      url: '/user_property',
      method: 'get',
      params: query
    })
}