import request from '../utils/request'
import API from './constants'

export const getTagList = () => request.get(API.API_TAG)
export const getTagDetail = id => request.get(`${API.API_TAG}/${id}`)
export const createTag = tag => request.post(API.API_TAG, tag)
export const updateTag = (id, tag) => request.put(`${API.API_TAG}/${id}`, tag)
export const removeTag = id => request.delete(`${API.API_TAG}/${id}`)
export const removeManyTag = ids => request.delete(`${API.API_TAG}?ids=${ids}`)
