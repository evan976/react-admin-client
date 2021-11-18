import request from '../utils/request'
import API from './constants'

export const getArticleList = params => request.get(API.API_ARTICLE, {params})
export const getArticleDetail = id => request.get(`${API.API_ARTICLE}/${id}`)
export const createArticle = article => request.post(API.API_ARTICLE, article)
export const updateArticle = (id, article) => request.put(`${API.API_ARTICLE}/${id}`, article)
export const removeArticle = id => request.delete(`${API.API_ARTICLE}/${id}`)
export const removeManyArticle = ids => request.delete(`${API.API_ARTICLE}?ids=${ids}`)
