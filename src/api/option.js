import request from '../utils/request'
import API from './constants'

export const getSiteOption = () => request.get(API.API_OPTION)
export const updateSiteOption = (id, option) => request.put(`${API.API_OPTION}/${id}`, option)
