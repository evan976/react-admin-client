import request from '../utils/request'
import API from './constants'

export const getCategoryList = () => request.get(API.API_CATEGORY)
export const getCategoryDetail = id => request.get(`${API.API_CATEGORY}/${id}`)
export const createCategory = category => request.post(API.API_CATEGORY, category)
export const updateCategory = (id, category) => request.put(`${API.API_CATEGORY}/${id}`, category)
export const removeCategory = id => request.delete(`${API.API_CATEGORY}/${id}`)
export const removeManyCategory = ids => request.delete(`${API.API_CATEGORY}?ids=${ids}`)
