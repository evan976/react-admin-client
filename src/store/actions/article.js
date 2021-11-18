import * as actionType from '../action-type'

export const getArticleSyncAction = article => ({
  type: actionType.GET_ARTICLE,
  payload: {
    articleList: article.data,
    page: article.page,
    pageSize: article.pageSize,
    total: article.total
  }
})

export const resetArticleSyncAction = () => ({
  type: actionType.RESET_ARTICLE
})
