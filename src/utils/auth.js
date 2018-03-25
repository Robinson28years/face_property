// import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
  return window.localStorage.getItem(TokenKey)
}

export function setToken(token) {
  return window.localStorage.setItem(TokenKey, token)
}

export function removeToken() {
  return window.localStorage.clear()
  // return window.localStorage.remove(TokenKey)
}
