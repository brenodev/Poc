import axios from 'axios'
import { getBaseParams, headerParams } from './base-service'

const baseParams = getBaseParams()

export function getExample () {
  return axios.get(`${baseParams.baseUrl}/todos/1`)
}

export function postExample () {
  const payload = JSON.stringify({
    body: 'bar',
    title: 'foo',
    userId: 1
  })
  return axios.post(`${baseParams.baseUrl}/posts`, payload, headerParams)
}

export function putExample () {
  const payload = JSON.stringify({
    body: 'bar',
    title: 'foo',
    userId: 1
  })
  return axios.put(`${baseParams.baseUrl}/posts/1`, payload, headerParams)
}

export function deleteExample () {
  return axios.delete(`${baseParams.baseUrl}/posts/1`)
}
